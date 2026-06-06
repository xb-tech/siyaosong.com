const CONTACT_TO = "kontakt@siyaosong.com";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function clean(value, maxLength) {
  return String(value || "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function onRequestPost({ request, env }) {
  let data;

  try {
    data = await request.json();
  } catch (error) {
    return jsonResponse({ ok: false, error: "Invalid request body" }, 400);
  }

  const name = clean(data.name, 120);
  const contact = clean(data.contact, 180);
  const type = clean(data.type, 180);
  const message = clean(data.message, 4000);
  const honeypot = clean(data.website, 200);

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  if (!name || !contact || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    return jsonResponse({ ok: false, error: "Missing or invalid fields" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return jsonResponse({ ok: false, error: "Email service is not configured" }, 500);
  }

  const from = env.CONTACT_FROM || "Siyao Song <kontakt@siyaosong.com>";
  const subject = `Kontaktformular: ${type || "Neue Nachricht"} - ${name}`;
  const text = [
    "Neue Nachricht über siyaosong.com",
    "",
    `Name: ${name}`,
    `E-Mail: ${contact}`,
    `Anliegen: ${type || "-"}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: CONTACT_TO,
      reply_to: contact,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse({ ok: false, error: "Email delivery failed" }, 502);
  }

  return jsonResponse({ ok: true });
}

export function onRequestGet() {
  return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
}
