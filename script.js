// ==========================================================================
// Abdulloh Tohirov — Portfolio Website Scripts
// Feature: Multi-language (UZ / EN), Smooth state management & interactions
// ==========================================================================

const translations = {
  uz: {
    nav_telegram: "Telegram",
    status_text: "O'rganishda va rivojlanishda",
    hero_role: "Dasturiy Injiniring Talabasi",
    chip_location: "Farg'ona ➔ Toshkent",
    chip_study: "Software Engineering",
    chip_ai: "AI bilan Kod Yozish",
    hero_description: "Texnologiyalar olamida o'z yo'lini mustaqil qurayotgan ijodkor. Sun'iy intellekt vositalaridan foydalanib dasturlashni amalda o'rganish va erkin loyihalar yaratish jarayonidaman.",
    btn_telegram: "Telegram orqali bog'lanish",
    btn_github: "GitHub Profil",
    
    tag_about: "Men Haqimda",
    title_about: "Shaxsiyat va Qarashlar",
    card1_title: "Mustaqillik va Erkin Yondashuv",
    card1_text: "Asli Farg'onadanman, ayni paytda Toshkentda dasturiy injiniring bo'yicha ta'lim olyapman. Shunchaki qolipdagi nazariyalar bilan cheklanib qolmasdan, o'z oldimga qo'ygan maqsadlarim sari erkin va mustaqil intilishni afzal ko'raman.",
    card2_title: "AI bilan Kod Yozish",
    card2_text: "Hozirgi davrda dasturlash sintaksisini yillar davomida yodlash shart emas. Asosiy e'tiborimni sun'iy intellekt yordamida tezkor g'oyalarni real loyihalarga aylantirish va dastur arxitekturasini tushunishga qaratganman.",
    card3_title: "Kelajak Sari Rejalar",
    card3_text: "Yangi texnologiyalar, AI agentlari, foydali veb-vositalar yaratish va o'z qobiliyatlarim orqali mustaqil faoliyat yuritish — asosiy yo'nalishim.",
    
    tag_focus: "Asosiy Qiziqishlar",
    title_focus: "Men E'tibor Qaratayotgan Yo'nalishlar",
    feat1_title: "Dasturiy Injiniring",
    feat1_desc: "Dasturiy tizimlarning poydevori, algoritmlar va tizimli fikrlashni o'rganish.",
    feat2_title: "Sun'iy Intellekt & Prompting",
    feat2_desc: "Zamonaviy LLM va AI vositalari yordamida sifatli kod va arxitektura qurish.",
    feat3_title: "Mustaqil Loyihalar",
    feat3_desc: "Hech kimga qaram bo'lmagan holda o'z g'oyalarini hayotga tatbiq etish va sinash.",
    
    tag_contact: "Aloqa",
    title_contact: "Bog'lanish uchun ochiqman",
    desc_contact: "Fikr almashish, qiziqarli texnologik suhbatlar yoki yangi loyihalar uchun Telegram orqali xabar yozishingiz mumkin.",
    footer_rights: "Barcha huquqlar himoyalangan."
  },
  en: {
    nav_telegram: "Telegram",
    status_text: "Learning & Growing",
    hero_role: "Software Engineering Student",
    chip_location: "Fergana ➔ Tashkent",
    chip_study: "Software Engineering",
    chip_ai: "AI-Assisted Coding",
    hero_description: "An independent creator forging his own path in tech. Currently mastering programming through the power of AI tools and exploring digital product creation.",
    btn_telegram: "Get in touch on Telegram",
    btn_github: "GitHub Profile",
    
    tag_about: "About Me",
    title_about: "Mindset & Principles",
    card1_title: "Independence & Freedom",
    card1_text: "Originally from Fergana, currently based in Tashkent pursuing Software Engineering. Rather than sticking to rigid orthodox theories, I believe in moving fast, learning by doing, and building freely.",
    card2_title: "AI-Augmented Development",
    card2_text: "In the modern era, memorizing boilerplate code is secondary. My primary focus is leveraging cutting-edge AI to transform ideas into tangible software and understanding architectural patterns.",
    card3_title: "Future Vision",
    card3_text: "Exploring emerging technologies, AI autonomous agents, useful web apps, and building a sustainable independent career on my own terms.",
    
    tag_focus: "Core Focus",
    title_focus: "Areas I'm Actively Exploring",
    feat1_title: "Software Engineering",
    feat1_desc: "Foundations of computational systems, algorithmic thinking, and modern software design.",
    feat2_title: "AI & Prompt Engineering",
    feat2_desc: "Harnessing LLMs and generative agents to craft robust code and streamline builds.",
    feat3_title: "Independent Projects",
    feat3_desc: "Shipping ideas rapidly without corporate bureaucracy — pure builder mindset.",
    
    tag_contact: "Contact",
    title_contact: "Open to Connect",
    desc_contact: "Feel free to reach out via Telegram for discussions, tech exchanges, or exciting ideas.",
    footer_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('site_lang') || 'uz';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  // Update button label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Language toggle event listener
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'uz' ? 'en' : 'uz';
      updateLanguage(nextLang);
    });
  }

  // Set initial language
  updateLanguage(currentLang);

  // Update current year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Developer easter egg in console
  console.log(
    "%c⚡ Abdulloh Tohirov %c| Software Engineering & AI",
    "color: #06b6d4; font-size: 14px; font-weight: bold;",
    "color: #9ca3af; font-size: 13px;"
  );
});
