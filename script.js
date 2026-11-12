// ==========================================================================
// Abdulloh Tohirov — Cybernetic Neural System Engine
// Canvas Particle Matrix, Interactive AI Terminal, Web Audio Synth, I18n
// ==========================================================================

/* --------------------------------------------------------------------------
   1. TRANSLATIONS (UZ / EN)
   -------------------------------------------------------------------------- */
const i18n = {
  uz: {
    unit_status: "SOFTWARE ENGINEERING // BUILDER",
    hero_manifesto: "Farg'onadanman, Toshkentda dasturiy injiniring yo'nalishida o'qiyman. Ortiqcha qoliplarga tushmasdan, AI imkoniyatlari va ilg'or texnologiyalar bilan mustaqil va real ishlaydigan loyihalar yaratish — mening yo'lim.",
    val_hometown: "Farg'ona ➔ Toshkent",
    
    badge_projects: "ASOSIY LOYIHALAR",
    noor_os_desc: "macOS tizimi uchun ovozli, ko'ruvchi, tahliliy fikrlovchi va kompyuterni mustaqil boshqara oladigan ilg'or Desktop AI agenti. Vosk lokal uyg'onish modeli («Nur»), o'zbekcha nutq (Edge-TTS), foydalanuvchi ovozini biometrik tanish (Speaker ID), Accessibility Tree orqali dasturlarni boshqarish, Vision OCR vizual xotira va Sokratik bahs tizimini o'z ichiga oladi.",
    noor_bot_desc: "Sun'iy intellekt texnologiyasiga asoslangan aqlli Telegram tarjimon bot. Matnlarni oddiy so'zma-so'z emas, kontekstni va ma'no nozikliklarini to'liq tushungan holda tez va aniq tarjima qilib beradi.",

    term_header_label: "INTERAKTIV AI TERMINAL",
    quick_cmds_label: "Buyruqlar:",
    
    bento_header_label: "YO'NALISHLAR VA FALSAFA",
    bento1_title: "\"O'ziga xon, o'ziga bek\"",
    bento1_desc: "Birovning chizib bergan qolipida cheklanib o'tirmasdan, mustaqil fikrlab yangiliklar yaratish. Sun'iy intellekt imkoniyatlari tufayli hozir bitta mustaqil muhandis butun jamoa ishini bajara oladi.",
    bento2_title: "AI bilan Kod Yozish",
    bento2_desc: "Sintaksis yodlashdan ko'ra, to'g'ri arxitektura qurish, sun'iy intellektga aniq yo'l ko'rsatish va g'oyalarni tezda ishlaydigan dasturga aylantirish.",
    bento3_title: "Farg'ona ➔ Toshkent",
    bento3_desc: "Farg'onadan poytaxtga kelib, Toshkentda Dasturiy injiniring bo'yicha ta'lim olyapman. Nazariyani chetga surib, real loyihalar chiqarish bilan mashg'ulman.",
    bento4_title: "Maqsad va Rejalar",
    bento4_desc: "Noor macOS agentini va Noor AI botini yanada rivojlantirish, shuningdek odamlarga foydasi tegadigan yangi mustaqil dasturiy mahsulotlar yaratish.",
    
    uplink_header_label: "TO'G'RIDAN-TO'G'RI ALOQA",
    uplink_open: "Xabar yozish",
    uplink_repos: "Repozitoriylarni ko'rish",
    footer_all_rights: "Barcha huquqlar himoyalangan."
  },
  en: {
    unit_status: "SOFTWARE ENGINEERING // BUILDER",
    hero_manifesto: "From Fergana, currently pursuing Software Engineering in Tashkent. Avoiding bureaucratic molds; building tangible, high-leverage products independently through AI and modern architectures.",
    val_hometown: "Fergana ➔ Tashkent",
    
    badge_projects: "CORE PROJECTS",
    noor_os_desc: "Advanced multimodal voice & OS-controlling Desktop AI agent for macOS (Electron + Python + Swift C-FFI). Features local voice-wake ('Noor'), biometrics-based Speaker ID, Accessibility automation, Vision OCR visual memory, and Socratic analysis.",
    noor_bot_desc: "An intelligent Telegram AI translator bot that understands semantic nuance and contextual meaning to deliver precise, natural translations rapidly.",

    term_header_label: "INTERACTIVE AI TERMINAL",
    quick_cmds_label: "Commands:",
    
    bento_header_label: "VISION & PHILOSOPHY",
    bento1_title: "Self-Sovereignty: Independent Builder",
    bento1_desc: "Refusing corporate molds. Operating with maximal leverage through AI: 1 autonomous engineer building full-stack products.",
    bento2_title: "AI-Augmented Development",
    bento2_desc: "Focusing on systems architecture, precise prompting, and rapid execution rather than obsolete rote memorization.",
    bento3_title: "Fergana ➔ Tashkent",
    bento3_desc: "Journey from Fergana to Tashkent pursuing Software Engineering. Prioritizing real shipping over passive theory.",
    bento4_title: "Future Horizons",
    bento4_desc: "Scaling Noor macOS Agent, expanding Noor AI Translator, and launching independent software products.",
    
    uplink_header_label: "DIRECT UPLINK CHANNELS",
    uplink_open: "Send Direct Message",
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
    // Audio context safe fallback
  }
}

/* --------------------------------------------------------------------------
   3. TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
const phrasesUz = [
  "Dasturiy Injiniring Talabasi",
  "Noor (macOS Desktop AI Agent) Muallifi",
  "Noor AI Tarjimon Boti Yaratuvchisi",
  "O'ziga Xon, O'ziga Bek"
];

const phrasesEn = [
  "Software Engineering Student",
  "Creator of Noor (macOS Desktop AI Agent)",
  "Creator of Noor AI Translator Bot",
  "Self-Sovereign Independent Builder"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 60;
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
   5. INTERACTIVE AI COMMAND TERMINAL
   -------------------------------------------------------------------------- */
const terminalResponses = {
  uz: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Kelib chiqishi: Farg'ona viloyati\n• Hozirda: Toshkent shahri\n• Yo'nalish: Dasturiy Injiniring (Software Engineering)\n• Loyihalari: Noor macOS AI Agent va Noor AI Tarjimon Boti.",
    noor_agent: "🧠 NOOR — macOS Desktop AI Agent:\n• Electron + Python + Swift C-FFI arxitekturasi\n• Ovozli 'Nur' uyg'onish (Vosk)\n• Speaker ID (foydalanuvchi ovozini biometrik tanish)\n• Accessibility orqali dasturlarni fon rejimida boshqarish\n• Vision OCR vizual xotira va Sokratik bahs tizimi.",
    tarjimon_bot: "🌐 NOOR AI TARJIMON BOT:\n• Telegram platformasida kontekstga asoslangan aqlli tarjima boti.",
    skills: "⚡ ASOSIY STEK:\n• Desktop AI (Electron, Python, Swift C-FFI)\n• AI Prompting & Agentic Workflows\n• Telegram Bot API & LLM integratsiyasi\n• Software Engineering arxitekturasi.",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nBog'lanish uchun doim ochiq!",
    help: "📋 MAVJUD BUYRUQLAR:\n• whoami        - Abdulloh haqida ma'lumot\n• noor_agent    - Noor macOS AI Desktop agenti haqida\n• tarjimon_bot  - Noor AI tarjimon boti haqida\n• skills        - Texnologik stek\n• telegram      - Aloqa havolasi\n• clear         - Ekranni tozalash"
  },
  en: {
    whoami: "🧑‍💻 ABDULLOH TOHIROV:\n• Origin: Fergana, Uzbekistan\n• Base: Tashkent City\n• Major: Software Engineering\n• Projects: Noor macOS AI Agent & Noor AI Translator Bot.",
    noor_agent: "🧠 NOOR — macOS Desktop AI Agent:\n• Multimodal OS agent (Electron + Python + Swift C-FFI)\n• Local voice-wake ('Noor') via Vosk\n• Biometric Speaker ID recognition\n• Background Accessibility UI automation\n• Vision OCR memory & Socratic inquiry.",
    tarjimon_bot: "🌐 NOOR AI TRANSLATOR BOT:\n• High-accuracy contextual translation bot on Telegram.",
    skills: "⚡ CORE STACK:\n• Desktop AI (Electron, Python, Swift C-FFI)\n• Prompt Engineering & Agentic Workflows\n• Telegram Bot API & LLM Integration\n• Software Engineering & Architecture.",
    telegram: "🚀 TELEGRAM:\n@toh1rovabdulloh (https://t.me/toh1rovabdulloh)\nDirect uplink ready!",
    help: "📋 AVAILABLE DIRECTIVES:\n• whoami        - About Abdulloh\n• noor_agent    - Details on Noor macOS Agent\n• tarjimon_bot  - Details on Noor AI Translator\n• skills        - Tech stack & architecture\n• telegram      - Contact uplink\n• clear         - Wipe terminal screen"
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
  } else if (cmd === 'noor') {
    replyText = dict.noor_agent;
  } else if (cmd === 'bot') {
    replyText = dict.tarjimon_bot;
  } else if (cmd === 'hi' || cmd === 'salom' || cmd === 'hello') {
    replyText = currentLang === 'en' 
      ? "👋 Greetings! Type 'noor_agent' or 'whoami' to explore." 
      : "👋 Assalomu alaykum! 'noor_agent' yoki 'whoami' deb yozib ko'ring.";
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
