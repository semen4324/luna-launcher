/* ================= Luna Launcher — landing ================= */

/* ---- Ссылки на скачивание (GitHub Releases) ---- */
const CONFIG = {
  version: "1.0.0",
  size: "111 MB",
  downloadUrl: "https://github.com/semen4324/luna-launcher/releases/latest/download/LunaLauncher-Setup-1.0.0.exe",
  repoUrl: "https://github.com/semen4324/luna-launcher"
};

const T = {
  ru: {
    "doc.title": "Luna Launcher — современный лаунчер для Minecraft",
    "doc.desc": "Luna Launcher — бесплатный лаунчер для Minecraft на Windows: аккаунты Microsoft и офлайн, тысячи версий, Fabric/Quilt/Forge, моды Modrinth, 3D-скины и полная кастомизация дизайна.",

    "nav.features": "Возможности",
    "nav.screens": "Скриншоты",
    "nav.about": "О лаунчере",
    "nav.install": "Установка",

    "btn.download": "Скачать",
    "btn.downloadWin": "Скачать для Windows",
    "btn.how": "Как это работает",

    "hero.pill": "Бесплатный лаунчер для Windows",
    "hero.title": "Современный лаунчер <em>Luna</em>",
    "hero.lead": "Аккаунты, тысячи версий, моды, скины и полная кастомизация дизайна — всё в одном приложении. Выбери версию и жми «Играть».",
    "meta.version": "версия",
    "meta.size": "установщик",
    "meta.os": "x64",

    "feat.kicker": "Возможности",
    "feat.title": "Всё, что нужно для игры",
    "feat.sub": "Лаунчер делает самое скучное — скачивание версий, библиотек, модов и настройку Java.",

    "f1.t": "Аккаунты",
    "f1.d": "Оффлайн-режим и настоящий вход через Microsoft (Xbox). Аккаунт сохраняется, переключается в один клик.",
    "f2.t": "Тысячи версий",
    "f2.d": "Все релизы Mojang, снапшоты, локальные профили и установка нужных библиотек автоматически.",
    "f3.t": "Загрузчики",
    "f3.d": "Fabric, Quilt, Forge и NeoForge ставятся в один клик — вместе с API модов.",
    "f4.t": "Моды",
    "f4.d": "Поиск по базе Modrinth, установка нужной версии под твою сборку, апдейты и папка модов.",
    "f5.t": "Скины",
    "f5.d": "Тысячи популярных скинов, загрузка своих PNG 64×64 и живое 3D-превью прямо в лаунчере.",
    "f6.t": "Дизайн",
    "f6.d": "Темы с уникальными фонами, цвета, скругления, анимации, звук при наведении и панель слева/снизу/сверху/справа.",
    "f7.t": "Ресурс-паки",
    "f7.d": "Установка паков и шейдеров в один клик, быстрый доступ к папке игры .minecraft.",
    "f8.t": "Java и память",
    "f8.d": "Автопоиск Java, выбор объёма памяти, разрешение окна и режим полноэкранного режима.",

    "scr.kicker": "Скриншоты",
    "scr.title": "Так выглядит Luna",
    "scr.sub": "Четыре экрана — от запуска игры до настроек оформления.",
    "scr.t1": "Главный экран",
    "scr.t2": "Скины",
    "scr.t3": "Моды",
    "scr.t4": "Настройки",

    "abt.kicker": "Подробнее",
    "abt.title": "О лаунчере",
    "abt.sub": "Что это, как работает и чем отличается от других лаунчеров.",
    "abt.h1": "Реальный запуск игры",
    "abt.p1": "Luna Launcher — самостоятельное десктопное приложение для Windows. Он сам скачивает версии Minecraft у Mojang, собирает класс-путь, ставит нужные библиотеки и нативные файлы, а затем запускает саму игру. Никаких эмуляций и заглушек — игра стартует по-настоящему.",
    "abt.h2": "Безопасный вход",
    "abt.p2": "Вход через Microsoft открывается на официальной странице Microsoft — пароль вводится там, а лаунчер получает только токен доступа. Для одиночной игры и локальных серверов достаточно оффлайн-аккаунта: придумайте ник и играйте.",
    "abt.h3": "Ваши данные остаются у вас",
    "abt.p3": "Игра хранится в стандартной папке .minecraft, которую можно указать самому. Настройки лаунчера, аккаунты, скины и моды сохраняются локально на компьютере — облако не используется.",
    "abt.specH": "Технические детали",
    "abt.s1k": "Платформа", "abt.s1v": "Windows 10/11, x64",
    "abt.s2k": "Технология", "abt.s2v": "Electron + Node.js",
    "abt.s3k": "Версии игры", "abt.s3v": "Все релизы и снапшоты Mojang",
    "abt.s4k": "Загрузчики", "abt.s4v": "Fabric · Quilt · Forge · NeoForge",
    "abt.s5k": "Источники модов", "abt.s5v": "Modrinth · CurseForge",
    "abt.s6k": "Скины", "abt.s6v": "3D-превью, PNG 64×64",
    "abt.s7k": "Цена", "abt.s7v": "Бесплатно",
    "abt.s8k": "Размер",
    "abt.note": "Проект не связан с Mojang Studios и Microsoft.",

    "ins.kicker": "Установка",
    "ins.title": "Как запустить за 3 шага",
    "ins.sub": "Установщик ставит лаунчер без прав администратора.",
    "ins.s1t": "Скачайте установщик",
    "ins.s1d": "Нажмите кнопку «Скачать для Windows» — файл LunaLauncher-Setup-1.0.0.exe размером 111 МБ.",
    "ins.s2t": "Запустите и установите",
    "ins.s2d": "Откройте файл, выберите папку и нажмите «Установить». Ярлык появится на рабочем столе и в меню «Пуск».",
    "ins.s3t": "Добавьте аккаунт и играйте",
    "ins.s3d": "Оффлайн или через Microsoft, выберите версию и нажмите «Играть». Java лаунчер найдёт сам.",

    "req.title": "Системные требования",
    "req.1": "Windows 10 или 11 (64-бит)",
    "req.2": "2 ГБ ОЗУ для лаунчера, 4+ ГБ для игры",
    "req.3": "От 1 ГБ свободного места на диске",
    "req.4": "Интернет для загрузки версий и модов",
    "req2.title": "Чего не нужно",
    "req2.1": "Прав администратора",
    "req2.2": "Устанавливать Java заранее",
    "req2.3": "Регистрироваться на сторонних сайтах",
    "req2.4": "Платить — лаунчер полностью бесплатный",

    "faq.title": "Частые вопросы",
    "faq.q1": "Лаунчер бесплатный?",
    "faq.a1": "Да, полностью. Нет рекламы, нет платных функций и нет скрытых платежей.",
    "faq.q2": "Нужен ли аккаунт Microsoft?",
    "faq.a2": "Нет. Для одиночной игры достаточно офлайн-аккаунта — просто придумайте ник. Для официальных многопользовательских серверов понадобится настоящий аккаунт Microsoft с Minecraft.",
    "faq.q3": "Безопасен ли вход через Microsoft?",
    "faq.a3": "Да. Авторизация открывается на официальной странице Microsoft — лаунчер не видит и не хранит ваш пароль, он получает только временный токен.",
    "faq.q4": "Где хранятся игра и настройки?",
    "faq.a4": "Игра — в папке .minecraft (можно выбрать свою в настройках). Настройки, аккаунты и моды лаунчера — локально в папке данных приложения.",
    "faq.q5": "Будут ли работать мои старые моды и скины?",
    "faq.a5": "Да, если вы укажете существующую папку .minecraft — лаунчер подхватит установленные версии, моды, ресурс-паки и скины.",
    "faq.q6": "Можно ли изменить оформление?",
    "faq.a6": "Да: темы с уникальными фонами, акцентный цвет, затемнение, скругление, анимации, звук при наведении, положение панели меню и многое другое — в настройках дизайна.",

    "cta.title": "Готовы начать?",
    "cta.sub": "Скачайте Luna Launcher и запустите Minecraft за пару минут.",

    "ftr.about": "Бесплатный лаунчер для Minecraft с аккаунтами, модами, скинами и настройкой дизайна.",
    "ftr.c1": "Разделы",
    "ftr.c2": "Скачать",
    "ftr.dl": "Windows (x64), 111 МБ",
    "ftr.repo": "Исходный код",
    "ftr.copy": "© 2026 Luna Launcher",
    "ftr.legal": "Minecraft — товарный знак Mojang AB. Проект не связан с Mojang и Microsoft.",

    "toast.nolink": "Ссылка на скачивание пока не настроена — добавь её в website/app.js (CONFIG).",
    "toast.lang": "Язык: русский"
  },

  ua: {
    "doc.title": "Luna Launcher — сучасний лаунчер для Minecraft",
    "doc.desc": "Luna Launcher — безкоштовний лаунчер для Minecraft на Windows: акаунти Microsoft і офлайн, тисячі версій, Fabric/Quilt/Forge, моди Modrinth, 3D-скіни та повна кастомізація дизайну.",

    "nav.features": "Можливості",
    "nav.screens": "Скріншоти",
    "nav.about": "Про лаунчер",
    "nav.install": "Встановлення",

    "btn.download": "Завантажити",
    "btn.downloadWin": "Завантажити для Windows",
    "btn.how": "Як це працює",

    "hero.pill": "Безкоштовний лаунчер для Windows",
    "hero.title": "Сучасний лаунчер <em>Luna</em>",
    "hero.lead": "Акаунти, тисячі версій, моди, скіни та повна кастомізація дизайну — усе в одному застосунку. Обери версію та тисни «Грати».",
    "meta.version": "версія",
    "meta.size": "інсталятор",
    "meta.os": "x64",

    "feat.kicker": "Можливості",
    "feat.title": "Усе, що потрібно для гри",
    "feat.sub": "Лаунчер робить найнудніше — завантаження версій, бібліотек, модів і налаштування Java.",

    "f1.t": "Акаунти",
    "f1.d": "Офлайн-режим і справжній вхід через Microsoft (Xbox). Акаунт зберігається, перемикається в один клік.",
    "f2.t": "Тисячі версій",
    "f2.d": "Усі релізи Mojang, знімки, локальні профілі та встановлення потрібних бібліотек автоматично.",
    "f3.t": "Завантажувачі",
    "f3.d": "Fabric, Quilt, Forge і NeoForge ставляться в один клік — разом з API модів.",
    "f4.t": "Моди",
    "f4.d": "Пошук у базі Modrinth, встановлення потрібної версії під твою збірку, оновлення та папка модів.",
    "f5.t": "Скіни",
    "f5.d": "Тисячі популярних скінів, завантаження своїх PNG 64×64 і живий 3D-перегляд просто в лаунчері.",
    "f6.t": "Дизайн",
    "f6.d": "Теми з унікальними фонами, кольори, заокруглення, анімації, звук при наведенні та панель зліва/знизу/згори/справа.",
    "f7.t": "Ресурс-паки",
    "f7.d": "Встановлення паків і шейдерів в один клік, швидкий доступ до папки гри .minecraft.",
    "f8.t": "Java і пам'ять",
    "f8.d": "Автопошук Java, вибір об'єму пам'яті, роздільність вікна та повноекранний режим.",

    "scr.kicker": "Скріншоти",
    "scr.title": "Так виглядає Luna",
    "scr.sub": "Чотири екрани — від запуску гри до налаштувань оформлення.",
    "scr.t1": "Головний екран",
    "scr.t2": "Скіни",
    "scr.t3": "Моди",
    "scr.t4": "Налаштування",

    "abt.kicker": "Докладніше",
    "abt.title": "Про лаунчер",
    "abt.sub": "Що це, як працює і чим відрізняється від інших лаунчерів.",
    "abt.h1": "Справжній запуск гри",
    "abt.p1": "Luna Launcher — самостійний настільний застосунок для Windows. Він сам завантажує версії Minecraft у Mojang, збирає клас-шлях, ставить потрібні бібліотеки та нативні файли, а потім запускає саму гру. Жодних емуляцій і заглушок — гра стартує по-справжньому.",
    "abt.h2": "Безпечний вхід",
    "abt.p2": "Вхід через Microsoft відкривається на офіційній сторінці Microsoft — пароль вводиться там, а лаунчер отримує лише токен доступу. Для одиночної гри та локальних серверів достатньо офлайн-аккаунта: вигадайте нік і грайте.",
    "abt.h3": "Ваші дані залишаються у вас",
    "abt.p3": "Гра зберігається у стандартній папці .minecraft, яку можна вказати самому. Налаштування лаунчера, акаунти, скіни та моди зберігаються локально на комп'ютері — хмара не використовується.",
    "abt.specH": "Технічні деталі",
    "abt.s1k": "Платформа", "abt.s1v": "Windows 10/11, x64",
    "abt.s2k": "Технологія", "abt.s2v": "Electron + Node.js",
    "abt.s3k": "Версії гри", "abt.s3v": "Усі релізи та знімки Mojang",
    "abt.s4k": "Завантажувачі", "abt.s4v": "Fabric · Quilt · Forge · NeoForge",
    "abt.s5k": "Джерела модів", "abt.s5v": "Modrinth · CurseForge",
    "abt.s6k": "Скіни", "abt.s6v": "3D-перегляд, PNG 64×64",
    "abt.s7k": "Ціна", "abt.s7v": "Безкоштовно",
    "abt.s8k": "Розмір",
    "abt.note": "Проєкт не пов'язаний з Mojang Studios і Microsoft.",

    "ins.kicker": "Встановлення",
    "ins.title": "Як запустити за 3 кроки",
    "ins.sub": "Інсталятор ставить лаунчер без прав адміністратора.",
    "ins.s1t": "Завантажте інсталятор",
    "ins.s1d": "Натисніть кнопку «Завантажити для Windows» — файл LunaLauncher-Setup-1.0.0.exe розміром 111 МБ.",
    "ins.s2t": "Запустіть і встановіть",
    "ins.s2d": "Відкрийте файл, оберіть папку і натисніть «Встановити». Ярлик з'явиться на робочому столі та в меню «Пуск».",
    "ins.s3t": "Додайте акаунт і грайте",
    "ins.s3d": "Офлайн або через Microsoft, оберіть версію і натисніть «Грати». Java лаунчер знайде сам.",

    "req.title": "Системні вимоги",
    "req.1": "Windows 10 або 11 (64-біт)",
    "req.2": "2 ГБ ОЗН для лаунчера, 4+ ГБ для гри",
    "req.3": "Від 1 ГБ вільного місця на диску",
    "req.4": "Інтернет для завантаження версій і модів",
    "req2.title": "Чого не потрібно",
    "req2.1": "Прав адміністратора",
    "req2.2": "Встановлювати Java заздалегідь",
    "req2.3": "Реєструватися на сторонніх сайтах",
    "req2.4": "Платити — лаунчер повністю безкоштовний",

    "faq.title": "Часті запитання",
    "faq.q1": "Лаунчер безкоштовний?",
    "faq.a1": "Так, повністю. Немає реклами, платних функцій і прихованих платежів.",
    "faq.q2": "Чи потрібен акаунт Microsoft?",
    "faq.a2": "Ні. Для одиночної гри достатньо офлайн-аккаунта — просто вигадайте нік. Для офіційних багатокористувацьких серверів знадобиться справжній акаунт Microsoft з Minecraft.",
    "faq.q3": "Чи безпечний вхід через Microsoft?",
    "faq.a3": "Так. Авторизація відкривається на офіційній сторінці Microsoft — лаунчер не бачить і не зберігає ваш пароль, він отримує лише тимчасовий токен.",
    "faq.q4": "Де зберігаються гра та налаштування?",
    "faq.a4": "Гра — у папці .minecraft (можна вибрати свою в налаштуваннях). Налаштування, акаунти та моди лаунчера — локально в папці даних застосунку.",
    "faq.q5": "Чи працюватимуть мої старі моди та скіни?",
    "faq.a5": "Так, якщо ви вкажете існуючу папку .minecraft — лаунчер підхопить встановлені версії, моди, ресурс-паки та скіни.",
    "faq.q6": "Чи можна змінити оформлення?",
    "faq.a6": "Так: теми з унікальними фонами, акцентний колір, затемнення, заокруглення, анімації, звук при наведенні, положення панелі меню та багато іншого — у налаштуваннях дизайну.",

    "cta.title": "Готові почати?",
    "cta.sub": "Завантажте Luna Launcher і запустіть Minecraft за кілька хвилин.",

    "ftr.about": "Безкоштовний лаунчер для Minecraft з акаунтами, модами, скінами та налаштуванням дизайну.",
    "ftr.c1": "Розділи",
    "ftr.c2": "Завантажити",
    "ftr.dl": "Windows (x64), 111 МБ",
    "ftr.repo": "Вихідний код",
    "ftr.copy": "© 2026 Luna Launcher",
    "ftr.legal": "Minecraft — товарний знак Mojang AB. Проєкт не пов'язаний з Mojang і Microsoft.",

    "toast.nolink": "Посилання на завантаження ще не налаштоване — додай його в website/app.js (CONFIG).",
    "toast.lang": "Мова: українська"
  }
};

const SHOTS = {
  main:     { src: "assets/shot-main.png",     key: "scr.t1" },
  skins:    { src: "assets/shot-skins.png",    key: "scr.t2" },
  mods:     { src: "assets/shot-mods.png",     key: "scr.t3" },
  settings: { src: "assets/shot-settings.png", key: "scr.t4" }
};

let lang = localStorage.getItem("luna-lang");
if (!lang || !T[lang]) lang = (navigator.language || "ru").toLowerCase().startsWith("uk") ? "ua" : "ru";
if (!T[lang]) lang = "ru";
let shot = "main";

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("on"), 3600);
}

/* ---------- language ---------- */
function applyLang(next) {
  lang = next;
  localStorage.setItem("luna-lang", lang);
  const dict = T[lang];

  $$("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  $$("[data-i18n-html]").forEach(el => {
    const k = el.getAttribute("data-i18n-html");
    if (dict[k] != null) el.innerHTML = dict[k];
  });

  document.documentElement.lang = lang === "ua" ? "uk" : "ru";
  document.title = dict["doc.title"];
  const md = $('meta[name="description"]');
  if (md) md.setAttribute("content", dict["doc.desc"]);

  $$(".lang-btn").forEach(b => b.classList.toggle("is-on", b.dataset.lang === lang));

  // caption of the active screenshot
  const cap = $("#viewer-cap");
  if (cap && SHOTS[shot]) cap.textContent = dict[SHOTS[shot].key];

  $$(".js-dl").forEach(a => {
    if (lang === "ua") a.setAttribute("aria-label", "Завантажити для Windows");
    else a.setAttribute("aria-label", "Скачать для Windows");
  });
}

/* ---------- links ---------- */
function isPlaceholder(url) { return /YOUR-USERNAME/i.test(url || ""); }

function wireLinks() {
  $$(".js-dl").forEach(a => {
    a.href = CONFIG.downloadUrl;
    a.addEventListener("click", e => {
      if (isPlaceholder(CONFIG.downloadUrl)) { e.preventDefault(); toast(T[lang]["toast.nolink"]); }
    });
  });
  const repo = $("#repo-link");
  if (repo) {
    repo.href = CONFIG.repoUrl;
    repo.target = "_blank";
    repo.rel = "noopener";
    repo.addEventListener("click", e => {
      if (isPlaceholder(CONFIG.repoUrl)) { e.preventDefault(); toast(T[lang]["toast.nolink"]); }
    });
  }
}

/* ---------- screenshot tabs ---------- */
function wireTabs() {
  const img = $("#viewer-img");
  const cap = $("#viewer-cap");
  $$(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      shot = btn.dataset.shot;
      $$(".tab").forEach(b => {
        const on = b === btn;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      if (img && SHOTS[shot]) {
        img.style.opacity = "0";
        const next = new Image();
        next.onload = () => { img.src = next.src; img.style.opacity = "1"; };
        next.src = SHOTS[shot].src;
        img.alt = T[lang][SHOTS[shot].key];
      }
      if (cap && SHOTS[shot]) cap.textContent = T[lang][SHOTS[shot].key];
    });
  });
  if (img) img.style.transition = "opacity .3s ease";
}

/* ---------- header / burger ---------- */
function wireHeader() {
  const hdr = $("#hdr");
  const onScroll = () => hdr.classList.toggle("stuck", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#burger");
  const nav = $("#nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", e => {
      if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    });
  }
}

/* ---------- reveal on scroll ---------- */
function wireReveal() {
  const targets = $$(".sec-head, .card, .step, .req, .faq-i, .viewer, .about-col, .spec, .cta-in");
  if (!("IntersectionObserver" in window)) { targets.forEach(t => t.classList.add("in")); return; }
  targets.forEach(t => t.classList.add("rv"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  targets.forEach(t => io.observe(t));
}

/* ---------- language buttons ---------- */
function wireLang() {
  $$(".lang-btn").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    applyLang(b.dataset.lang);
    toast(T[lang]["toast.lang"]);
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  wireLinks();
  wireTabs();
  wireHeader();
  wireLang();
  applyLang(lang);
  wireReveal();
});
