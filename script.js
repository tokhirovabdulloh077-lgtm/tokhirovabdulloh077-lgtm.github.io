// ==========================================================================
// Abdulloh Tohirov — Portfolio Scripts
// Clean translations, interactive console & ambient canvas
// ==========================================================================

const translations = {
  uz: {
    status_text: "O'qishda va amaliyotda",
    hero_role: "Dasturiy injiniring talabasi",
    hero_focus: "AI va yangi loyihalar",
    chip_location: "Farg'ona / Toshkent",
    chip_project: "Noor AI loyihasi",
    hero_bio: "Farg'onadanman, hozirda Toshkentda dasturiy injiniring yo'nalishida tahsil olyapman. Sun'iy intellekt imkoniyatlaridan foydalanib dasturlashni amalda o'rganish va odamlarga yordam beradigan foydali bot va dasturlar yaratishga qiziqaman.",
    btn_telegram: "Telegram'da yozish",
    btn_github: "GitHub",

    badge_projects: "Loyihalar",
    heading_projects: "Nimalar ustida ishlayapman?",
    noor_status: "Faol loyiha",
    noor_desc: "Sun'iy intellekt texnologiyalariga asoslangan aqlli tarjimon bot. Matnlarni shunchaki so'zma-so'z emas, kontekstni to'g'ri tushungan holda aniq va tabiiy tarjima qiladi.",
    noor_desk_status: "Desktop ilova",
    noor_desk_desc: "O'zbek tilida ishlaydigan aqlli ovozli desktop yordamchi dasturi (macOS). Ovozli buyruqlar orqali tizimni boshqarish va kundalik vazifalarni yengillashtirish uchun yaratilmoqda.",

    badge_about: "Haqimda",
    heading_about: "Men va qiziqishlarim",
    card1_title: "Farg'onadan Toshkentga",
    card1_text: "Farg'onadanman, ayni paytda Toshkentda Dasturiy injiniring bo'yicha ta'lim olyapman. Quruq nazariyaga bog'lanib qolmasdan, imkon qadar tezroq amaliyotga o'tib mustaqil ishlashni ma'qul ko'raman.",
    card2_title: "AI bilan Dasturlash",
    card2_text: "Dasturlashni noldan yillab o'rganish emas, balki hozirgi kuchli AI vositalaridan unumli foydalangan holda g'oyalarni tez va sifatli amalga oshirishga e'tibor qarataman.",
    card3_title: "Mustaqil Faoliyat",
    card3_text: "Birovning aytganini kutib o'tirmasdan, o'zimga xon — o'zimga bek bo'lib, o'z g'oyalarim va loyihalarim ustida mustaqil ishlashni yoqtiraman.",

    badge_terminal: "Interaktiv Qism",
    heading_terminal: "Konsol orqali ma'lumot olish",
    quick_label: "Tanlang:",
    term_welcome: "Abdulloh Tohirovning qisqa konsoliga xush kelibsiz. Yuqoridagi tugmalarni bosing yoki pastga buyruq yozing.",

    badge_contact: "Aloqa",
    heading_contact: "Savol yoki taklif bormi?",
    desc_contact: "Qiziqarli loyihalar, texnologik suhbatlar yoki Noor AI bo'yicha fikr almashish uchun Telegram orqali bemalol yozaverishingiz mumkin.",
    footer_rights: "Barcha huquqlar himoyalangan."
  },
  en: {
    status_text: "Studying & Building",
    hero_role: "Software Engineering Student",
    hero_focus: "AI & Digital Projects",
    chip_location: "Fergana / Tashkent",
    chip_project: "Noor AI Project",
    hero_bio: "Originally from Fergana, currently based in Tashkent pursuing Software Engineering. Focused on leveraging modern AI tools to master programming by building practical, real-world bots and applications.",
    btn_telegram: "Message on Telegram",
    btn_github: "GitHub",

    badge_projects: "Projects",
    heading_projects: "What I'm Building",
    noor_status: "Active Project",
    noor_desc: "An AI-powered smart translator bot for Telegram. Translates text with high contextual accuracy rather than literal word-by-word substitution.",
    noor_desk_status: "Desktop App",
    noor_desk_desc: "An intelligent Uzbek-language voice desktop assistant for macOS, designed to automate desktop workflows and simplify daily tasks via voice commands.",

    badge_about: "About",
    heading_about: "Background & Focus",
    card1_title: "Fergana to Tashkent",
    card1_text: "Born in Fergana, currently living and studying Software Engineering in Tashkent. I prefer learning by shipping functional products rather than getting stuck in endless theory.",
    card2_title: "AI-Augmented Coding",
    card2_text: "Instead of spending years memorizing syntax, I utilize modern AI models to build architectures and bring ideas to life rapidly.",
    card3_title: "Independent Mindset",
    card3_text: "I value self-sovereignty and freedom: building my own projects, exploring new ideas, and operating independently.",

    badge_terminal: "Interactive",
    heading_terminal: "Terminal Console",
    quick_label: "Quick select:",
    term_welcome: "Welcome to Abdulloh Tohirov's interactive console. Click buttons above or type commands below.",

    badge_contact: "Contact",
    heading_contact: "Got Questions or Ideas?",
    desc_contact: "Feel free to message me on Telegram to discuss projects, tech collaborations, or Noor AI.",
    footer_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('site_lang') || 'uz';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Terminal responses
const terminalReplies = {
  uz: {
    whoami: "Abdulloh Tohirov. Farg'onadanman, hozirda Toshkentda dasturiy injiniring yo'nalishida o'qiyman. AI va dasturlash orqali yangi loyihalar qilyapman.",
    noor: "Noor AI — Telegram uchun sun'iy intellekt asosida ishlaydigan tarjimon bot. Matnlarni aniq va tushunarli qilib tarjima qiladi.",
    skills: "Dasturiy injiniring asoslari, AI vositalari orqali tezkor kodlash, Telegram botlar yaratish.",
    telegram: "@toh1rovabdulloh — Savollar yoki qiziqarli takliflar bo'lsa, bemalol yozishingiz mumkin.",
    help: "Buyruqlar: whoami, noor, skills, telegram, clear"
  },
  en: {
    whoami: "Abdulloh Tohirov. Originally from Fergana, currently studying Software Engineering in Tashkent. Building practical apps with AI.",
    noor: "Noor AI — Telegram AI translator bot that provides context-aware, accurate translations.",
    skills: "Software engineering fundamentals, AI-assisted development, building Telegram bots & automations.",
    telegram: "@toh1rovabdulloh — Open for discussions, questions, or ideas.",
    help: "Commands: whoami, noor, skills, telegram, clear"
  }
};

function runTerminalCommand(raw) {
  const screen = document.getElementById('terminal-screen');
  if (!screen) return;

  const cmd = raw.trim().toLowerCase();

  // Print command
  const cmdRow = document.createElement('div');
  cmdRow.className = 'term-line-user';
  cmdRow.innerHTML = `<span class="term-prompt">visitor:~$</span> <span>${escapeHtml(raw)}</span>`;
  screen.appendChild(cmdRow);

  if (cmd === 'clear' || cmd === 'cls') {
    screen.innerHTML = '';
    return;
  }

  const dict = currentLang === 'en' ? terminalReplies.en : terminalReplies.uz;
  let reply = "";

  if (dict[cmd]) {
    reply = dict[cmd];
  } else if (cmd === 'salom' || cmd === 'hello' || cmd === 'hi') {
    reply = currentLang === 'en' ? "Hello! Type 'whoami' or 'noor' to explore." : "Salom! 'whoami' yoki 'noor' deb yozib ko'ring.";
  } else {
    reply = currentLang === 'en'
      ? `Command not found: '${cmd}'. Type 'help' for available options.`
      : `Bunday buyruq topilmadi: '${cmd}'. Barcha buyruqlar uchun 'help' deb yozing.`;
  }

  const replyRow = document.createElement('div');
  replyRow.className = 'term-line-reply';
  replyRow.textContent = reply;
  screen.appendChild(replyRow);

  screen.scrollTop = screen.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Clock Display (Tashkent UTC+5)
function updateClock() {
  const clockEl = document.getElementById('clock-display');
  if (!clockEl) return;
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const tasDate = new Date(utc + (3600000 * 5));
  
  const h = String(tasDate.getHours()).padStart(2, '0');
  const m = String(tasDate.getMinutes()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}`;
}

// Subtle Particle Canvas
function initCanvas() {
  const canvas = document.getElementById('subtle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = Math.min(Math.floor(w / 25), 45);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 1
    });
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(loop);
  }
  loop();
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  updateClock();
  setInterval(updateClock, 1000);
  initCanvas();

  // Language button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const next = currentLang === 'uz' ? 'en' : 'uz';
      setLanguage(next);
    });
  }

  // Terminal submit
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        runTerminalCommand(val);
        input.value = '';
      }
    });
  }

  // Quick Command Chips
  document.querySelectorAll('.btn-cmd').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        runTerminalCommand(cmd);
      }
    });
  });

  // Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
