// ==========================================================================
// Abdulloh Tohirov — INTJ-T Neural System Engine
// Canvas Particle Matrix, Interactive AI Terminal, Web Audio Synth, I18n
// ==========================================================================

/* --------------------------------------------------------------------------
   1. TRANSLATIONS (UZ / EN)
   -------------------------------------------------------------------------- */
const i18n = {
  uz: {
    unit_status: "INTJ-T // ARCHITECT",
    hero_manifesto: "Farg'onadanman, Toshkentda dasturiy injiniring bo'yicha o'qiyman. INTJ-T xarakter: ortiqcha balandparvoz gaplarsiz, sovuqqon mantiq, tizimli fikrlash va doimiy takomillashish. Noor macOS agenti va Noor AI tarjimon botini sun'iy intellektni boshqarib (AI-Assisted Architecture) birgalikda yaratganman.",
    val_hometown: "Farg'ona ➔ Toshkent",
    val_method: "AI Leverage & Architecture",
    
    badge_projects: "AI BILAN QURILGAN LOYIHALAR",
    noor_os_desc: "Sun'iy intellekt vositalari yordamida to'liq arxitekturasi ishlab chiqilgan, macOS tizimi uchun ovozli va kompyuterni mustaqil boshqara oladigan Desktop AI agenti. Vosk lokal uyg'onish modeli («Nur»), o'zbekcha nutq (Edge-TTS), foydalanuvchi ovozini biometrik tanish (Speaker ID), Accessibility Tree orqali tizimni boshqarish, Vision OCR vizual xotirasi va Sokratik tahlil tizimi bilan qurollantirilgan.",
    noor_bot_desc: "Sun'iy intellekt imkoniyatlarini amaliyotga tatbiq etish natijasida yaratilgan aqlli Telegram tarjimon boti. So'zma-so'z emas, kontekstni va ma'no nozikliklarini to'g'ri anglagan holda tez va aniq tarjima qilib beradi.",

    term_header_label: "STRATEGIK AI TERMINAL",
    quick_cmds_label: "Buyruqlar:",
    
    bento_header_label: "INTJ-T XARAKTER VA ISH USLUBI",
    bento1_title: "INTJ-T: Sovuqqon Mantiq va Tizimli Fikrlash",
    bento1_desc: "INTJ-T (Turbulent Architect) sifatida quruq hissiyotlar yoki balandparvoz gaplarni yoqtirmayman. Har bir g'oya avval tahlil qilinadi, aniq tizimga solinadi va faqat samara beradigan usullar bilan amalga oshiriladi.",
    bento2_title: "AI — Kodlovchi va Kuchaytirgich",
    bento2_desc: "Loyihalarimni sun'iy intellekt vositalari bilan birgalikda yaratganman. Men uchun dasturlash — yillab sintaksis yodlash emas, balki to'g'ri arxitekturani o'ylab, AI'ga to'g'ri yo'l ko'rsatish orqali murakkab mahsulotlarni tez chiqarishdir.",
    bento3_title: "Farg'onadan Toshkentga",
    bento3_desc: "Farg'onadan poytaxtga kelib, Toshkentda Dasturiy Injiniring bo'yicha ta'lim olyapman. Quruq nazariyaga vaqt yo'qotmay, to'g'ridan-to'g'ri ishlaydigan amaliy loyihalarga diqqatimni qaratganman.",
    bento4_title: "Doimiy Takomillashish (Perfectionism)",
    bento4_desc: "Turbulent (-T) xususiyatim sababli erishilgan natija bilan cheklanib qolmayman. Har bir loyiha va tizimni yanada tezroq, xavfsizroq va qulayroq qilish ustida doimiy ishlayman.",
    
    uplink_header_label: "TO'G'RIDAN-TO'G'RI ALOQA",
    uplink_open: "Aloqaga chiqish",
    uplink_repos: "Repozitoriylarni ko'rish",
    footer_all_rights: "Barcha huquqlar himoyalangan."
  },
  en: {
    unit_status: "INTJ-T // ARCHITECT",
    hero_manifesto: "From Fergana, currently pursuing Software Engineering in Tashkent. INTJ-T persona: zero fluff, pure cold logic, systems thinking, and continuous perfection. Built Noor macOS Agent and Noor AI Translator Bot through strategic AI leverage and systems architecture.",
    val_hometown: "Fergana ➔ Tashkent",
    val_method: "AI Leverage & Architecture",
    
    badge_projects: "PROJECTS ENGINEERED VIA AI",
    noor_os_desc: "Engineered in synergy with modern AI: an autonomous voice and OS-controlling desktop agent for macOS (Electron + Python + Swift C-FFI). Features local voice wake ('Noor'), biometric Speaker ID, Accessibility background automation, Vision OCR visual memory, and Socratic analysis.",
    noor_bot_desc: "An intelligent Telegram AI translator bot built by harnessing modern LLMs. Delivers context-rich, nuanced translations rapidly rather than literal word-for-word replacement.",

    term_header_label: "STRATEGIC AI TERMINAL",
    quick_cmds_label: "Directives:",
    
    bento_header_label: "INTJ-T TRAITS & ARCHITECTURE",
    bento1_title: "INTJ-T: Cold Logic & Systems Thinking",
    bento1_desc: "As an INTJ-T (Turbulent Architect), I despise fluff and grandiosity. Every project is analyzed structurally, planned methodically, and executed with extreme pragmatic efficiency.",
    bento2_title: "AI as the Ultimate Leverage",
    bento2_desc: "All my projects are built in deep collaboration with AI. True engineering today isn't manual syntax memorization — it's architecting systems and directing AI models to ship complex software fast.",
    bento3_title: "Fergana to Tashkent",
    bento3_desc: "From Fergana to Uzbekistan's digital hub. Pursuing Software Engineering in Tashkent while cutting through passive theory to ship functional code.",
    bento4_title: "Continuous Refinement (Turbulent Trait)",
    bento4_desc: "The Turbulent (-T) trait ensures I never rest on initial milestones. I am relentlessly iterating to optimize system performance, safety, and ergonomics.",
    
    uplink_header_label: "DIRECT UPLINK CHANNELS",
    uplink_open: "Establish Contact",
    uplink_repos: "Explore Code Repos",
    footer_all_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('abdulloh_lang') || 'uz';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('abdulloh_lang', lang);
  document.documentElement.lang = lang;

  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

/* --------------------------------------------------------------------------
   2. SYNTHESIZED AUDIO FX (Web Audio API)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = true;

function playCyberBlip(freq = 800, type = 'sine', duration = 0.05) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio safe fallback
  }
}

/* --------------------------------------------------------------------------
   3. TYPEWRITER EFFECT (INTJ-T & AI Architecture)
   -------------------------------------------------------------------------- */
const phrasesUz = [
  "Dasturiy Injiniring Talabasi",
  "INTJ-T • Tizimli Arxitektor",
  "AI Vositalari bilan Loyihalar Quruvchi",
  "Noor (macOS Desktop AI Agent) Muallifi",
  "Noor AI Tarjimon Boti Yaratuvchisi"
];

const phrasesEn = [
  "Software Engineering Student",
  "INTJ-T • Systems Architect",
  "AI-Orchestrated Software Builder",
  "Creator of Noor (macOS Desktop Agent)",
  "Creator of Noor AI Translator Bot"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 55;
const pauseDelay = 1800;

function typeWriterTick() {
  const list = currentLang === 'en' ? phrasesEn : phrasesUz;
  const currentPhrase = list[phraseIndex % list.length];
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  if (isDeleting) {
    charIndex--;
    typingEl.textContent = currentPhrase.substring(0, charIndex);
  } else {
    charIndex++;
    typingEl.textContent = currentPhrase.substring(0, charIndex);
  }

  let delay = typingSpeed;
  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = pauseDelay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    delay = 350;
  }

  setTimeout(typeWriterTick, delay);
}

/* --------------------------------------------------------------------------
   4. TELEMETRY CLOCK (Tashkent UZT UTC+5)
   -------------------------------------------------------------------------- */
function updateClock() {
  const clockEl = document.getElementById('clock-display');
  if (!clockEl) return;
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const tasDate = new Date(utc + (3600000 * 5));
  
  const h = String(tasDate.getHours()).padStart(2, '0');
  const m = String(tasDate.getMinutes()).padStart(2, '0');
  const s = String(tasDate.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}:${s}`;
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE AI COMMAND TERMINAL (INTJ-T Core)
   -------------------------------------------------------------------------- */
const terminalResponses = {
  uz: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Kelib chiqishi: Farg'ona viloyati\n• Hozirda: Toshkent shahri\n• Yo'nalish: Dasturiy Injiniring (Software Engineering)\n• Xarakter: INTJ-T (Turbulent Architect)\n• Loyihalari: Noor macOS AI Agent va Noor AI Tarjimon Boti.",
    mbti: "♟️ INTJ-T (Turbulent Architect):\n• Introverted, Intuitive, Thinking, Judging, Turbulent\n• Sovuqqon mantiq, strategik rejalashtirish va yuqori samaradorlik\n• Balandparvoz gaplarsiz, faqat mantiq va ishlaydigan natija\n• Doimiy mukammallikka intilish (perfectionism).",
    ai_leverage: "🤖 AI LEVERAGE & YONDASHUV:\n• Barcha loyihalarim (Noor Desktop Agent, Tarjimon Bot) sun'iy intellekt vositalari bilan birgalikda yaratilgan.\n• Dasturlashda eng muhimi — kodni yodlash emas, to'g'ri arxitektura qurib, AI vositalarini boshqara olishdir.",
    noor_agent: "🧠 NOOR — macOS Desktop AI Agent:\n• AI vositalari orqali arxitekturasi qurilgan (Electron + Python + Swift C-FFI)\n• Vosk lokal ovozli uyg'onish ('Nur')\n• Speaker ID (foydalanuvchi ovozini biometrik tanish)\n• Accessibility orqali fon rejimida kompyuterni boshqarish\n• Vision OCR vizual xotira va Sokratik tahlil tizimi.",
    tarjimon_bot: "🌐 NOOR AI TARJIMON BOT:\n• Telegram platformasida kontekstni to'g'ri tushunib tarjima qiluvchi aqlli bot.\n• AI yordamida tezkor va sifatli qilib yaratilgan.",
    skills: "⚡ ASOSIY STEK:\n• Desktop AI (Electron, Python, Swift C-FFI)\n• AI Architecture & Prompt Engineering\n• Telegram Bot API & LLM integratsiyasi\n• Software Engineering arxitekturasi.",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nAloqa uchun ochiq!",
    help: "📋 MAVJUD BUYRUQLAR:\n• whoami        - Abdulloh haqida ma'lumot\n• mbti          - INTJ-T xarakteri tahlili\n• ai_leverage   - AI bilan loyihalar qurish yondashuvi\n• noor_agent    - Noor macOS AI Desktop agenti haqida\n• tarjimon_bot  - Noor AI tarjimon boti haqida\n• skills        - Texnologik stek\n• telegram      - Aloqa havolasi\n• clear         - Ekranni tozalash"
  },
  en: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Origin: Fergana, Uzbekistan\n• Base: Tashkent City\n• Major: Software Engineering\n• Personality: INTJ-T (Turbulent Architect)\n• Builds: Noor macOS AI Agent & Noor AI Translator Bot.",
    mbti: "♟️ INTJ-T (Turbulent Architect):\n• Introverted, Intuitive, Thinking, Judging, Turbulent\n• Cold logic, strategic planning, and extreme execution efficiency\n• Dislikes fluff and pretension; prioritizes working software\n• Relentlessly driven by continuous improvement.",
    ai_leverage: "🤖 AI LEVERAGE APPROACH:\n• All projects (Noor Desktop Agent, Translator Bot) were engineered in synergy with AI.\n• Engineering in 2026 is about system design and directing AI models rather than manual syntax typing.",
    noor_agent: "🧠 NOOR — macOS Desktop AI Agent:\n• Multimodal desktop agent (Electron + Python + Swift C-FFI)\n• Local voice-wake ('Noor') via Vosk\n• Biometric Speaker ID identification\n• Background Accessibility UI automation\n• Vision OCR memory & Socratic inquiry.",
    tarjimon_bot: "🌐 NOOR AI TRANSLATOR BOT:\n• Context-aware, high-speed neural translator on Telegram.",
    skills: "⚡ CORE STACK:\n• Desktop AI (Electron, Python, Swift C-FFI)\n• AI Architecture & Prompt Engineering\n• Telegram Bot API & LLM Integration\n• Software Engineering Principles.",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nDirect uplink ready!",
    help: "📋 AVAILABLE DIRECTIVES:\n• whoami        - About Abdulloh\n• mbti          - INTJ-T personality analysis\n• ai_leverage   - AI-assisted building methodology\n• noor_agent    - Details on Noor macOS Agent\n• tarjimon_bot  - Details on Noor AI Translator\n• skills        - Architecture & stack\n• telegram      - Contact uplink\n• clear         - Wipe terminal screen"
  }
};

function handleTerminalCommand(rawCmd) {
  const screen = document.getElementById('terminal-screen');
  if (!screen) return;

  const cmd = rawCmd.trim().toLowerCase();
  playCyberBlip(1200, 'square', 0.04);

  // Print user command
  const userRow = document.createElement('div');
  userRow.className = 'term-line user-input-line';
  userRow.innerHTML = `<span class="term-prompt">visitor@intj-t:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
  screen.appendChild(userRow);

  if (cmd === 'clear' || cmd === 'cls') {
    screen.innerHTML = '';
    return;
  }

  const dict = currentLang === 'en' ? terminalResponses.en : terminalResponses.uz;
  let replyText = "";

  if (dict[cmd]) {
    replyText = dict[cmd];
  } else if (cmd === 'mbti_intj' || cmd === 'intj') {
    replyText = dict.mbti;
  } else if (cmd === 'noor') {
    replyText = dict.noor_agent;
  } else if (cmd === 'bot') {
    replyText = dict.tarjimon_bot;
  } else if (cmd === 'ai') {
    replyText = dict.ai_leverage;
  } else if (cmd === 'hi' || cmd === 'salom' || cmd === 'hello') {
    replyText = currentLang === 'en' 
      ? "👋 Greetings! Type 'mbti' or 'noor_agent' to explore." 
      : "👋 Assalomu alaykum! 'mbti' yoki 'noor_agent' deb yozib ko'ring.";
  } else {
    replyText = currentLang === 'en'
      ? `Unknown command: '${cmd}'. Type 'help' to see available directives.`
      : `Noma'lum buyruq: '${cmd}'. Barcha buyruqlar ro'yxatini ko'rish uchun 'help' deb yozing.`;
  }

  const replyRow = document.createElement('div');
  replyRow.className = 'term-line term-reply';
  replyRow.textContent = replyText;
  screen.appendChild(replyRow);

  screen.scrollTop = screen.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* --------------------------------------------------------------------------
   6. NEURAL PARTICLE CANVAS
   -------------------------------------------------------------------------- */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 18), 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.8 + 1
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.35 * (1 - mdist / 140)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }
  render();
}

/* --------------------------------------------------------------------------
   INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  typeWriterTick();
  updateClock();
  setInterval(updateClock, 1000);
  initCyberCanvas();

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      playCyberBlip(900, 'sine', 0.06);
      const next = currentLang === 'uz' ? 'en' : 'uz';
      setLanguage(next);
    });
  }

  const soundBtn = document.getElementById('sound-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      const textEl = soundBtn.querySelector('.hud-btn-text');
      const iconEl = soundBtn.querySelector('.hud-btn-icon');
      if (soundEnabled) {
        textEl.textContent = "SFX: ON";
        iconEl.textContent = "🔊";
        playCyberBlip(1000, 'triangle', 0.08);
      } else {
        textEl.textContent = "SFX: OFF";
        iconEl.textContent = "🔇";
      }
    });
  }

  const termForm = document.getElementById('terminal-form');
  const termInput = document.getElementById('terminal-input');
  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = termInput.value.trim();
      if (val) {
        handleTerminalCommand(val);
        termInput.value = '';
      }
    });
  }

  document.querySelectorAll('.chip-cmd').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        handleTerminalCommand(cmd);
      }
    });
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      playCyberBlip(600, 'sine', 0.02);
    });
  });

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
