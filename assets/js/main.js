
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const t = {
  ru: {
    menu_about: "О нас",
    menu_photos: "Фото",
    menu_contacts: "Контакты",
    hero_title: "Ваш эксперт по демонтажу и удалению асбеста",
    hero_tagline: "Быстро, чисто, надёжно. Кобленц и вся Рейнланд-Пфальц.",
    cta_contact: "Связаться",
    about_title: "О нас",
    about_text_1: "Мы — сильная команда из Кобленца...",
    about_text_2: "Выполняем пробивку проёмов...",
    services_title: "Наши услуги",
    service_1: "Демонтаж любой сложности",
    service_2: "Сертифицированное удаление асбеста",
    service_3: "Вывоз строительного мусора",
    service_4: "Работы по всей земле",
    service_5: "Быстро, пунктуально",
    photos_title: "Фото работ",
    photos_hint: "Позже здесь сделаем галерею.",
    contacts_title: "Контакты",
    btn_write: "Написать нам"
  },
  de: {
    menu_about: "Über uns",
    menu_photos: "Fotos",
    menu_contacts: "Kontakt",
    hero_title: "Ihr Profi für Abbruch & Asbestsanierung",
    hero_tagline: "Schnell, sauber, zuverlässig. Koblenz & ganz Rheinland-Pfalz.",
    cta_contact: "Kontakt",
    about_title: "Über uns",
    about_text_1: "Wir sind ein starkes Team aus Koblenz...",
    about_text_2: "Wir übernehmen Wanddurchbrüche...",
    services_title: "Unsere Leistungen",
    service_1: "Demontage jeder Art",
    service_2: "Zertifizierte Asbest-Entfernung",
    service_3: "Schuttentsorgung",
    service_4: "Arbeiten in ganz Rheinland-Pfalz",
    service_5: "Schnell, pünktlich",
    photos_title: "Arbeitsfotos",
    photos_hint: "Hier fügen wir später eine Galerie ein.",
    contacts_title: "Kontakt",
    btn_write: "Schreiben"
  }
};

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[lang] && t[lang][key]) el.textContent = t[lang][key];
  });
  document.documentElement.lang = lang === 'de' ? 'de' : 'ru';
  document.getElementById('ruBtn').classList.toggle('active', lang==='ru');
  document.getElementById('deBtn').classList.toggle('active', lang==='de');
  localStorage.setItem('lang', lang);
}

document.getElementById('ruBtn').addEventListener('click', () => setLang('ru'));
document.getElementById('deBtn').addEventListener('click', () => setLang('de'));

const saved = localStorage.getItem('lang');
setLang(saved ? saved : 'de');

document.getElementById('writeBtn').addEventListener('click', () => {
  const subjectMap = { ru: "Заявка с сайта NATAN Demontage", de: "Anfrage von der Website NATAN Demontage" };
  const bodyMap = {
    ru: "Здравствуйте!\n\nМне нужны работы по демонтажу/асбесту. Опишите задачу:",
    de: "Guten Tag!\n\nIch benötige Abbruch-/Asbestarbeiten. Beschreiben Sie bitte die Aufgabe:"
  };
  const lang = document.documentElement.lang === 'de' ? 'de' : 'ru';
  const mailto = `mailto:natandemontage@gmx.de?subject=${encodeURIComponent(subjectMap[lang])}&body=${encodeURIComponent(bodyMap[lang])}`;
  window.location.href = mailto;
});
