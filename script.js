// ==========================================================================
// Abdulloh Tohirov — Cybernetic Neural System Engine
// Canvas Particle Matrix, Interactive AI Terminal, Web Audio Synth, I18n
// ==========================================================================

/* --------------------------------------------------------------------------
   1. TRANSLATIONS (UZ / EN)
   -------------------------------------------------------------------------- */
const i18n = {
  uz: {
    unit_status: "FAOL // DASTURIY INJINIRING",
    hero_manifesto: "Eski qoliplar va zerikarli darsliklarni chetga surib, sun'iy intellekt (AI) kuchi orqali g'oyalarni bir zumda real kodga aylantiraman. O'z yo'lini mustaqil yaratuvchi, o'ziga xon — o'ziga bek.",
    val_hometown: "Farg'ona",
    val_node: "Toshkent",
    val_spec: "AI-Augmented Dev",
    
    term_header_label: "INTERAKTIV AI TERMINAL",
    quick_cmds_label: "Tezkor buyruqlar:",
    
    bento_header_label: "FAOLIYAT VA YO'NALISHLAR",
    bento1_title: "Mustaqillik: \"O'ziga xon, o'ziga bek\"",
    bento1_desc: "Birovlarning chizib bergan qolipida yurish emas, balki sun'iy intellekt imkoniyatlarini maksimal o'zlashtirib, individual muhandis darajasiga chiqish. 1 ta inson + AI = Butun bir dasturiy ta'minot kompaniyasi.",
    bento2_title: "AI bilan Kod Yozish",
    bento2_desc: "Sintaksis yodlash o'tmishda qoldi. Hozirgi eng kuchli ko'nikma — to'g'ri arxitektura o'ylash, LLM vositalarini boshqarish va natijani bir zumda ishga tushirish.",
    bento3_title: "Farg'ona ➔ Toshkent",
    bento3_desc: "Farg'onadan poytaxtga qadam. Toshkentda Dasturiy injiniring bo'yicha ta'lim olib, amaliy IT industriyasi markazida o'z yo'limni mustahkamlamoqdaman.",
    bento4_title: "Kelajak Nima Bo'ladi?",
    bento4_desc: "Hech qanday oylik kutish yoki birovning buyrug'i bilan cheklanmasdan, global bozorda ishlaydigan mustaqil veb-vositalar, mini SaaS va AI yechimlari yaratish.",
    
    uplink_header_label: "TO'G'RIDAN-TO'G'RI ALOQA",
    uplink_open: "Aloqaga chiqish",
    uplink_repos: "Repozitoriylarni ko'rish",
    footer_all_rights: "BARCHA HUQUQLAR HIMOYA QILINGAN."
  },
  en: {
    unit_status: "ACTIVE // SOFTWARE ENGINEERING",
    hero_manifesto: "Ditching outdated textbooks and legacy dogmas. Leveraging state-of-the-art AI to translate thoughts directly into production software. 100% self-sovereign independent creator.",
    val_hometown: "Fergana",
    val_node: "Tashkent",
    val_spec: "AI-Augmented Dev",
    
    term_header_label: "INTERACTIVE AI TERMINAL",
    quick_cmds_label: "Quick commands:",
    
    bento_header_label: "CORE PILLARS & MATRIX",
    bento1_title: "Self-Sovereignty: Independent Builder",
    bento1_desc: "Refusing corporate bureaucratic molds. Harnessing artificial intelligence to operate with the leverage of an entire development team. 1 human + AI = full-stack software powerhouse.",
    bento2_title: "AI-Assisted Coding",
    bento2_desc: "Rote syntax memorization is obsolete. Today's meta-skill is system architecture, high-context prompt engineering, and rapid prototype execution.",
    bento3_title: "Fergana ➔ Tashkent",
    bento3_desc: "From the fertile Fergana valley to Uzbekistan's digital epicenter. Pursuing Software Engineering in Tashkent to build next-generation tech.",
    bento4_title: "What Does The Future Hold?",
    bento4_desc: "Building independent micro-SaaS, generative AI tools, and autonomous web systems without waiting for corporate permission.",
    
    uplink_header_label: "DIRECT UPLINK CHANNELS",
    uplink_open: "Open Direct Uplink",
    uplink_repos: "Explore Code Repos",
    footer_all_rights: "ALL RIGHTS RESERVED."
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
   2. SYNTHESIZED AUDIO FX (Web Audio API - Sci-Fi Blips)
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
    // Audio context may require interaction
  }
}

/* --------------------------------------------------------------------------
   3. TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
const phrasesUz = [
  "Dasturiy Injiniring Talabasi",
  "AI bilan Kodlovchi Mustaqil Ijodkor",
  "O'ziga Xon, O'ziga Bek",
  "Yangi Avlod Texnologiyalar Izlanuvchisi"
];

const phrasesEn = [
  "Software Engineering Student",
  "AI-Augmented Autonomous Coder",
  "Self-Sovereign Tech Builder",
  "Next-Gen Digital Pioneer"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 65;
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
  // Tashkent is UTC+5
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const tasDate = new Date(utc + (3600000 * 5));
  
  const h = String(tasDate.getHours()).padStart(2, '0');
  const m = String(tasDate.getMinutes()).padStart(2, '0');
  const s = String(tasDate.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}:${s}`;
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE AI COMMAND TERMINAL
   -------------------------------------------------------------------------- */
const terminalResponses = {
  uz: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Kelib chiqishi: Farg'ona viloyati\n• Hozirda: Toshkent shahri\n• Yo'nalish: Dasturiy Injiniring (Software Engineering)\n• Falsafa: AI orqali tezkor va mustaqil dasturlar yaratish.",
    skills: "⚡ KO'NIKMALAR VA TEXNOLOGIYALAR:\n• AI-Augmented Coding (Prompt Engineering, Agentic Workflows)\n• Software Engineering Fundamentals (Algoritmlar, Arxitektura)\n• Modern Web & Independent Products",
    philosophy: "🔥 FALSAFA: 'O'ziga xon, o'ziga bek'\nBirovning qo'lida cheklanib emas, o'z aqli va AI quvvati bilan global miqyosda mustaqil ishlaydigan tizimlar qurish.",
    location: "📍 LOKATSIYA:\nAsli Farg'onadan, ayni damda Toshkentda ta'lim va amaliyotda.",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nBog'lanish uchun doim ochiq!",
    help: "📋 MAVJUD BUYRUQLAR:\n• whoami      - Abdulloh haqida to'liq dosye\n• skills      - Texnologik stek va AI vositalari\n• philosophy  - Mustaqillik qarashlari\n• location    - Farg'ona ➔ Toshkent ma'lumoti\n• telegram    - To'g'ridan-to'g'ri aloqa\n• clear       - Ekranni tozalash"
  },
  en: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Origin: Fergana Region, Uzbekistan\n• Current Base: Tashkent City\n• Major: Software Engineering\n• Mission: Shipping software rapidly via AI leverage.",
    skills: "⚡ STACK & EXPERTISE:\n• AI-Augmented Development (Prompt Architecture, Agentic Systems)\n• Core Software Engineering & System Patterns\n• Autonomous Digital Creation",
    philosophy: "🔥 PHILOSOPHY: 'Self-Sovereign Builder'\nOperating without bureaucratic gatekeepers. Unleashing individual leverage through AI.",
    location: "📍 LOCATION:\nFergana ➔ Tashkent (Uzbekistan).",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nOpen to high-value connections!",
    help: "📋 AVAILABLE COMMANDS:\n• whoami      - Complete dossier\n• skills      - Stack & AI tooling\n• philosophy  - Builder mindset\n• location    - Origin & current node\n• telegram    - Direct contact link\n• clear       - Wipe screen"
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
  userRow.innerHTML = `<span class="term-prompt">visitor@tohirov:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
  screen.appendChild(userRow);

  if (cmd === 'clear' || cmd === 'cls') {
    screen.innerHTML = '';
    return;
  }

  const dict = currentLang === 'en' ? terminalResponses.en : terminalResponses.uz;
  let replyText = "";

  if (dict[cmd]) {
    replyText = dict[cmd];
  } else if (cmd === 'hi' || cmd === 'salom' || cmd === 'hello') {
    replyText = currentLang === 'en' 
      ? "👋 Greetings! Type 'whoami' or 'skills' to explore." 
      : "👋 Assalomu alaykum! 'whoami' yoki 'skills' deb yozib ko'ring.";
  } else if (cmd === 'ai') {
    replyText = "🤖 AI Node: Claude, Gemini 2.0, DeepSeek, Cursor, Antigravity interfeyslari orqali kodlash avjida!";
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

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.fill();

      // Connect with other particles
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

      // Mouse interactive line
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
  // Init language
  setLanguage(currentLang);

  // Typewriter
  typeWriterTick();

  // Telemetry clock
  updateClock();
  setInterval(updateClock, 1000);

  // Canvas
  initCyberCanvas();

  // Language switch button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      playCyberBlip(900, 'sine', 0.06);
      const next = currentLang === 'uz' ? 'en' : 'uz';
      setLanguage(next);
    });
  }

  // Audio FX toggle
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

  // Terminal Form submit
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

  // Quick Command Chips
  document.querySelectorAll('.chip-cmd').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        handleTerminalCommand(cmd);
      }
    });
  });

  // Sound clicks on buttons
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      playCyberBlip(600, 'sine', 0.02);
    });
  });

  // Footer Year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
