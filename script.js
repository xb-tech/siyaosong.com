document.documentElement.classList.add("js-enabled");

const translations = {
  de: {
    metaTitle: "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
    metaDescription:
      "Persönliche Website einer Geigerin und Pädagogin. Konzerte und Unterricht als zwei Wege in ein Leben mit Musik.",
    "brand.role": "Violinistin",
    "nav.music": "Musikerin",
    "nav.concerts": "Konzerte",
    "nav.teaching": "Unterricht",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Konzert · Unterricht · Ein Leben in Musik",
    "hero.title": "Jeder Mensch<br />braucht Musik.",
    "hero.copy":
      "Wenn der Alltag uns vorantreibt, schenkt Musik der Zeit wieder Atem. Ein Konzert zu hören oder eine Geigenstunde zu beginnen heißt, sich dem Klang anzuvertrauen und die Welt feiner wahrzunehmen.",
    "hero.concertCta": "Konzerte",
    "hero.lessonCta": "Unterricht",
    "intro.kicker": "Die Musikerin",
    "intro.title": "Siyao Song",
    "intro.lead":
      "Violinistin, in China geboren und heute im Saarland zu Hause, aktiv auf europäischen Kammermusik- und Orchesterbühnen.",
    "intro.bioOne":
      "Sie studierte an der Mittelschule des Chinesischen Konservatoriums für Musik, am Chinesischen Konservatorium für Musik und an der Hochschule für Musik Saar. Zu ihren Lehrern zählen die renommierte Violinpädagogin Prof. Fang Yuan sowie der deutsche Geiger Prof. Hans-Peter Hoffmann.",
    "intro.bioTwo":
      "Sie wurde beim 8. Chinesischen Musikpreis Goldene Glocke im Wettbewerb für Streichquartett ausgezeichnet und wirkte in Konzerten mit der Chinesischen Jugendphilharmonie, dem Orchester des Nationalen Zentrums für Darstellende Künste, dem Sinfonieorchester des Chinesischen Nationalballetts, den Mainzer Virtuosi, dem Kammerorchester der Großregion und dem Europäischen Akademischen Orchester mit.",
    "intro.bioThree":
      "Als Gründerin des Delux-Streichquartetts widmet sie sich langfristig der Kammermusik und dem internationalen Kulturaustausch.",
    "intro.bioFour":
      "Derzeit leitet sie den Kulturbereich der Deutschen Musik- und Kunstpädagogen e.V. und verantwortet internationale Kulturprojekte, Konzert- und Kunstveranstaltungen, Nachwuchsförderung, Kooperationen in der Kunstbildung sowie den Aufbau von Plattformen für den deutsch-chinesischen Kulturaustausch.",
    "concerts.kicker": "Für Zuhörende",
    "concerts.title": "Ein Konzert zu erleben heißt, eine Zeit vom Klang erhellen zu lassen.",
    "concerts.ask": "Anfragen",
    "concerts.showMore": "Weitere Konzerte anzeigen",
    "concerts.showLess": "Weniger anzeigen",
    "date.oneMonth": "Juni",
    "date.twoMonth": "Juli",
    "date.threeMonth": "Sept",
    "event.oneCity": "Shanghai · Intimes Salonkonzert",
    "event.oneTitle": "Den Abend Bach anvertrauen",
    "event.oneCopy": "Bach und romantische Miniaturen entfalten sich bei Kerzenlicht, Holzklang und großer Nähe.",
    "event.oneLink": "Platz anfragen",
    "event.twoCity": "Hangzhou · Besonderer Abend im Kunstraum",
    "event.twoTitle": "Ein langer Brief an den Sommer",
    "event.twoCopy":
      "Klassische Linien und moderne Bearbeitungen verweben sich zu einem hellen Nachklang des Sommerabends.",
    "event.twoLink": "Details erfahren",
    "event.threeCity": "Suzhou · Kammermusik am Nachmittag",
    "event.threeTitle": "Garten auf Saiten",
    "event.threeCopy": "Violine und Klavier begegnen Mozart, Kreisler und einigen vertrauten Melodien.",
    "event.threeLink": "Karten anfragen",
    "teaching.kicker": "Für Lernende",
    "teaching.title": "Eine Geigenstunde zu beginnen heißt, eine innere Stimme durch Kunst wachsen zu lassen.",
    "teaching.copy":
      "Geige lernen bedeutet nicht nur, den richtigen Ton zu finden. Es bedeutet, zuhören, warten und einen musikalischen Satz vollständig aussprechen zu lernen. Für Kinder, Jugendliche und Erwachsene entsteht zwischen Intonation, Rhythmus, Bogenführung und Haltung allmählich eine eigene Stimme.",
    "lesson.one": "Für Kinder: erstes Hören und Neugier wecken",
    "lesson.two": "Für Jugendliche: Technik, Fokus und Bühnengefühl formen",
    "lesson.three": "Für Erwachsene: einen stillen Ort der Begegnung mit Musik bewahren",
    "lesson.four": "Für Prüfungen, Wettbewerbe und Konzerte: Programme sorgfältig vorbereiten",
    "quote.text": "“Der Mensch braucht Musik, weil es Orte im Herzen gibt, die nur Klang erreichen kann.”",
    "contact.kicker": "Mit Musik beginnen",
    "contact.title": "Schenken Sie der Musik ein Stück Zeit",
    "contact.copy":
      "Wenn Sie einen Abend planen, der in Erinnerung bleiben soll, oder für sich selbst oder Ihr Kind eine Zeit mit der Geige beginnen möchten, schreiben Sie gern. Ein Konzert, eine Probestunde oder ein längerer Lernweg kann mit einem Gespräch anfangen.",
    "form.name": "Name",
    "form.namePlaceholder": "Ihr Name",
    "form.contact": "E-Mail",
    "form.contactPlaceholder": "Ihre E-Mail-Adresse",
    "form.intent": "Ich möchte",
    "form.optionOne": "Einen persönlichen Konzertauftritt anfragen",
    "form.optionTwo": "Mit dem Geigenunterricht beginnen",
    "form.optionThree": "Über Zusammenarbeit oder andere Möglichkeiten sprechen",
    "form.message": "Eine Nachricht an die Musikerin",
    "form.messagePlaceholder": "Anlass, Datum oder Lernziel",
    "form.submit": "Diese Nachricht senden",
    "form.note": "Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.",
    "form.privacyLink": "Weitere Informationen finden Sie in der Datenschutzerklärung.",
    "form.sending": "Ihre Nachricht wird gesendet...",
    "form.success": "Vielen Dank. Ihre Nachricht wurde gesendet.",
    "form.error": "Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an kontakt@siyaosong.com.",
    "form.validation": "Bitte füllen Sie Name, E-Mail-Adresse und Nachricht aus.",
    "footer.text": "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
  },
  en: {
    metaTitle: "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
    metaDescription:
      "Personal website of a violinist and educator. Concerts and lessons as two ways into a life held by music.",
    "brand.role": "Violinist",
    "nav.music": "Musician",
    "nav.concerts": "Concerts",
    "nav.teaching": "Teaching",
    "nav.contact": "Contact",
    "hero.eyebrow": "Concert · Teaching · A Life Held By Music",
    "hero.title": "Every life<br />needs music.",
    "hero.copy":
      "When daily life carries us forward, music gives time its breath again. To hear a concert or begin a violin lesson is to entrust oneself to sound, and to feel the world with greater delicacy.",
    "hero.concertCta": "Concerts",
    "hero.lessonCta": "Lessons",
    "intro.kicker": "The Musician",
    "intro.title": "Siyao Song",
    "intro.lead":
      "A violinist born in China and now based in Germany, active on European chamber music and symphonic stages.",
    "intro.bioOne":
      "She studied at the Middle School Affiliated to the China Conservatory of Music, the China Conservatory of Music, and the Hochschule für Musik Saar in Germany. Her teachers include the renowned violin pedagogue Prof. Fang Yuan and German violinist Prof. Hans-Peter Hoffmann.",
    "intro.bioTwo":
      "She received an Excellence Award at the 8th China Music Golden Bell Award String Quartet Competition and has performed with the China Youth Philharmonic Orchestra, the National Centre for the Performing Arts Orchestra, the Symphony Orchestra of the National Ballet of China, Mainzer Virtuosi, Kammerorchester der Großregion, and the European Academic Orchestra.",
    "intro.bioThree":
      "She founded the Delux String Quartet and has long been devoted to chamber music performance and international cultural exchange.",
    "intro.bioFour":
      "She currently serves as Head of Culture at Deutsche Musik- und Kunstpädagogen e.V., developing international cultural exchange projects, concerts and arts events, young artist initiatives, arts education partnerships, and platforms for Sino-German cultural dialogue.",
    "concerts.kicker": "For Listeners",
    "concerts.title": "Enter a concert, and let a passage of time be illuminated by music.",
    "concerts.ask": "Inquire",
    "concerts.showMore": "Show more concerts",
    "concerts.showLess": "Show fewer",
    "date.oneMonth": "Jun",
    "date.twoMonth": "Jul",
    "date.threeMonth": "Sep",
    "event.oneCity": "Shanghai · Intimate Salon Concert",
    "event.oneTitle": "Entrusting the Night to Bach",
    "event.oneCopy": "Bach and romantic miniatures unfold through candlelight, wooden resonance, and close listening.",
    "event.oneLink": "Request a Seat",
    "event.twoCity": "Hangzhou · Special Art Space Performance",
    "event.twoTitle": "A Long Letter to Summer",
    "event.twoCopy":
      "Classical lines and modern arrangements intertwine, preserving a warm and luminous echo of a summer night.",
    "event.twoLink": "View Details",
    "event.threeCity": "Suzhou · Chamber Music Afternoon",
    "event.threeTitle": "Garden on Strings",
    "event.threeCopy": "Violin and piano meet Mozart, Kreisler, and a few familiar melodies.",
    "event.threeLink": "Ask for Tickets",
    "teaching.kicker": "For Learners",
    "teaching.title": "Enter a violin lesson, and let an inner voice grow through art.",
    "teaching.copy":
      "Learning violin is not only finding the right note. It is learning to listen, to wait, and to complete a musical sentence. For children, teenagers, and adults, intonation, rhythm, bowing, and posture gradually become a voice of one’s own.",
    "lesson.one": "For children: awakening first listening and curiosity",
    "lesson.two": "For teenagers: shaping technique, focus, and stage presence",
    "lesson.three": "For adults: keeping a quiet place to meet music",
    "lesson.four": "For exams, competitions, and concerts: preparing complete programs with care",
    "quote.text": "“We need music because there are places in the heart that only sound can reach.”",
    "contact.kicker": "Begin With Music",
    "contact.title": "Give a piece of time to music",
    "contact.copy":
      "If you are planning an evening worth remembering, or hoping to begin a life with violin for yourself or your child, please write. A concert, a trial lesson, or a longer learning path can begin with one conversation.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.contact": "Email",
    "form.contactPlaceholder": "Your email address",
    "form.intent": "I would like to",
    "form.optionOne": "Invite a warm, personal performance",
    "form.optionTwo": "Begin violin lessons",
    "form.optionThree": "Discuss collaboration or other possibilities",
    "form.message": "A note for the musician",
    "form.messagePlaceholder": "Occasion, date, or learning goal",
    "form.submit": "Send this note",
    "form.note": "By submitting, your details will be processed to handle your inquiry.",
    "form.privacyLink": "Further information is available in the privacy policy.",
    "form.sending": "Sending your message...",
    "form.success": "Thank you. Your message has been sent.",
    "form.error": "The message could not be sent. Please write directly to kontakt@siyaosong.com.",
    "form.validation": "Please fill in your name, email address, and message.",
    "footer.text": "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
  },
  zh: {
    metaTitle: "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
    metaDescription:
      "小提琴演奏家与教师个人网站。走近一场音乐会，走进一间课堂，让音乐回到每个人的生活。",
    "brand.role": "小提琴家",
    "nav.music": "音乐家",
    "nav.concerts": "音乐会",
    "nav.teaching": "课堂",
    "nav.contact": "联系",
    "hero.eyebrow": "音乐会 · 提琴课 · 一生与音乐同行",
    "hero.title": "每个人，<br />都需要音乐。",
    "hero.copy":
      "当日常推着我们向前，音乐让时间重新有了呼吸。来听一场音乐会，或开始一节小提琴课，都是把自己交还给声音，也交还给更细腻的感受。",
    "hero.concertCta": "走进音乐会",
    "hero.lessonCta": "走进课堂",
    "intro.kicker": "音乐家",
    "intro.title": "宋思瑶",
    "intro.lead": "小提琴家，出生于中国，现居德国，活跃于欧洲室内乐与交响乐舞台。",
    "intro.bioOne":
      "她先后就读于中国音乐学院附属中学、中国音乐学院及德国萨尔布吕肯音乐学院（Hochschule für Musik Saar），师从著名小提琴教育家方元教授及德国小提琴家 Hans-Peter Hoffmann 教授。",
    "intro.bioTwo":
      "曾荣获第八届中国音乐金钟奖弦乐四重奏比赛优秀奖，并参与中国青年爱乐乐团、国家大剧院管弦乐团、中央芭蕾舞团交响乐团、Mainzer Virtuosi 室内乐团、Kammerorchester der Großregion（KOG）及 European Academic Orchestra（EAO）等乐团的演出。",
    "intro.bioThree": "她创立 Delux 弦乐四重奏，长期致力于室内乐演奏及国际文化交流。",
    "intro.bioFour":
      "现任德国音乐艺术教育家协会（Deutsche Musik- und Kunstpädagogen e.V.）文化部负责人，主要负责国际文化交流项目策划、音乐会与艺术活动组织、青年艺术人才培养、艺术教育合作以及中德文化交流平台建设，积极推动音乐教育、艺术实践与跨文化合作的发展。",
    "concerts.kicker": "为聆听者",
    "concerts.title": "走进音乐会，让一段时光被音乐照亮。",
    "concerts.ask": "咨询",
    "concerts.showMore": "显示更多音乐会",
    "concerts.showLess": "收起",
    "date.oneMonth": "六月",
    "date.twoMonth": "七月",
    "date.threeMonth": "九月",
    "event.oneCity": "上海 · 亲密沙龙音乐会",
    "event.oneTitle": "把夜晚交给巴赫",
    "event.oneCopy": "以巴赫与浪漫派小品为线索，在烛光、木质空间与近距离聆听中展开。",
    "event.oneLink": "预约席位",
    "event.twoCity": "杭州 · 艺术空间特别演出",
    "event.twoTitle": "给夏日的一封长信",
    "event.twoCopy": "古典旋律与现代改编相互交织，为夏夜保留一段温柔、明亮的回声。",
    "event.twoLink": "了解详情",
    "event.threeCity": "苏州 · 室内乐午后",
    "event.threeTitle": "弦上花园",
    "event.threeCopy": "以小提琴与钢琴的对话，走过莫扎特、克莱斯勒与几首熟悉的旋律。",
    "event.threeLink": "咨询票务",
    "teaching.kicker": "为学习者",
    "teaching.title": "走进提琴课，让一颗心灵被艺术滋养。",
    "teaching.copy":
      "学琴从来不只是学会按下正确的音，也是在学习如何倾听、如何等待、如何把一句乐句说完整。课程面向儿童、青少年与成人学习者，在音准、节奏、运弓与姿态之间，慢慢建立属于每个人自己的声音。",
    "lesson.one": "为儿童点亮最初的听觉与好奇",
    "lesson.two": "为青少年打磨技术、专注与舞台感",
    "lesson.three": "为成人保留一处与音乐相遇的时间",
    "lesson.four": "为考级、比赛与音乐会准备完整曲目",
    "quote.text": "“人需要音乐，因为心里总有一些地方，只能由声音抵达。”",
    "contact.kicker": "从音乐开始",
    "contact.title": "把一段时光，交给音乐",
    "contact.copy":
      "如果你正在筹备一个值得被记住的夜晚，或希望为自己、为孩子开启一段与小提琴相伴的日子，欢迎留下你的想法。一次演出、一节试听课、一段长期学习，都可以从这里开始。",
    "form.name": "姓名",
    "form.namePlaceholder": "你的姓名",
    "form.contact": "邮箱",
    "form.contactPlaceholder": "你的邮箱地址",
    "form.intent": "我想要",
    "form.optionOne": "邀请一场有温度的演出",
    "form.optionTwo": "开始一段小提琴学习",
    "form.optionThree": "聊聊合作与其他可能",
    "form.message": "留给音乐家的话",
    "form.messagePlaceholder": "活动、日期或学习目标",
    "form.submit": "发送这封信",
    "form.note": "提交后，你的信息将用于处理这次咨询。",
    "form.privacyLink": "更多信息请见隐私声明。",
    "form.sending": "正在发送...",
    "form.success": "谢谢，你的消息已经发送。",
    "form.error": "消息暂时无法发送，请直接写信至 kontakt@siyaosong.com。",
    "form.validation": "请填写姓名、邮箱和留言内容。",
    "footer.text": "SIYAO SONG | Violinistin | Konzert | Geigenunterricht | Saarland",
  },
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.title = dictionary.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("site-language", lang);
  updateConcertToggleLabel();
}

function currentDictionary() {
  const lang = localStorage.getItem("site-language") || "de";
  return translations[lang] || translations.de;
}

function updateConcertToggleLabel() {
  const concertList = document.querySelector(".concert-list");
  const concertToggle = document.querySelector(".concert-toggle");
  if (!concertList || !concertToggle) return;

  const dictionary = currentDictionary();
  const isExpanded = concertList.classList.contains("is-expanded");
  concertToggle.textContent = isExpanded ? dictionary["concerts.showLess"] : dictionary["concerts.showMore"];
  concertToggle.setAttribute("aria-expanded", String(isExpanded));
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("site-language") || "de");

const concertList = document.querySelector(".concert-list");
const concertToggle = document.querySelector(".concert-toggle");

if (concertList && concertToggle) {
  concertToggle.addEventListener("click", () => {
    const wasExpanded = concertList.classList.contains("is-expanded");
    concertList.classList.toggle("is-expanded");
    updateConcertToggleLabel();

    if (!wasExpanded) {
      concertList.querySelectorAll(".concert-item").forEach((item) => item.classList.add("is-visible"));
    }

    if (wasExpanded) {
      document.querySelector("#concerts")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");

function setFormStatus(message, isError = false) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.toggle("is-error", isError);
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dictionary = currentDictionary();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      contact: String(formData.get("contact") || "").trim(),
      type: String(formData.get("type") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    if (!payload.name || !payload.contact || !payload.message) {
      setFormStatus(dictionary["form.validation"], true);
      return;
    }

    setFormStatus(dictionary["form.sending"]);
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Contact form request failed");

      contactForm.reset();
      setFormStatus(dictionary["form.success"]);
    } catch (error) {
      setFormStatus(dictionary["form.error"], true);
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

const progress = document.querySelector(".scroll-progress");
const heroImage = document.querySelector(".hero-image");
const revealTargets = [
  ".section-kicker",
  ".artist-portrait",
  ".artist-copy",
  ".section-heading",
  ".concert-item",
  ".teaching-media",
  ".teaching-copy",
  ".quote p",
  ".contact > *",
];

document.querySelectorAll(revealTargets.join(",")).forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

function updateScrollEffects() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? scrollTop / scrollable : 0;

  if (progress) {
    progress.style.transform = `scaleX(${ratio})`;
  }

  if (heroImage) {
    const heroShift = Math.min(scrollTop * 0.08, 48);
    heroImage.style.setProperty("--hero-shift", `${heroShift}px`);
  }
}

updateScrollEffects();
window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);

const legalPanels = document.querySelectorAll(".legal");
const legalHashes = ["#impressum", "#datenschutz"];

function syncLegalPanelFromHash() {
  const activeHash = legalHashes.includes(window.location.hash) ? window.location.hash : "";
  legalPanels.forEach((panel) => {
    panel.classList.toggle("is-open", `#${panel.id}` === activeHash);
  });
}

function openLegalPanel(hash) {
  if (!legalHashes.includes(hash)) return;
  history.pushState("", document.title, hash);
  syncLegalPanelFromHash();
}

function closeLegalPanel() {
  legalPanels.forEach((panel) => panel.classList.remove("is-open"));
  if (legalHashes.includes(window.location.hash)) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

document.querySelectorAll('.legal-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openLegalPanel(link.getAttribute("href"));
  });
});

document.querySelectorAll("[data-close-legal]").forEach((button) => {
  button.addEventListener("click", closeLegalPanel);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLegalPanel();
});

window.addEventListener("hashchange", syncLegalPanelFromHash);
syncLegalPanelFromHash();
