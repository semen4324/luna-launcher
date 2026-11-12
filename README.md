# Сайт лаунчера Luna Launcher

Одностраничный лендинг: возможности, скриншоты, описание, установка, FAQ.
Языки — **русский** и **украинский** (переключатель в шапке, выбор сохраняется).

## Ссылки

- **Сайт:** https://semen4324.github.io/luna-launcher/
- **Репозиторий:** https://github.com/semen4324/luna-launcher
- **Установщик (Release):** https://github.com/semen4324/luna-launcher/releases/latest

## Файлы

```
website/
├── index.html      — разметка (текст сразу на двух языках через data-i18n)
├── styles.css      — стили, тёмная тема, адаптив
├── app.js          — словари RU/UA, переключение языка, вкладки скриншотов
└── assets/
    ├── icon.png
    ├── shot-main.png      — главный экран
    ├── shot-skins.png     — скіни
    ├── shot-mods.png      — моди
    └── shot-settings.png  — налаштування
```

Зависимостей нет — чистый HTML/CSS/JS, подходит для любого статического хостинга.

## 1. Ссылка на скачивание (уже настроено)

В `app.js`, самый верх:

```js
const CONFIG = {
  version: "1.0.0",
  size: "111 MB",
  downloadUrl: "https://github.com/semen4324/luna-launcher/releases/latest/download/LunaLauncher-Setup-1.0.0.exe",
  repoUrl: "https://github.com/semen4324/luna-launcher"
};
```

Ссылка ведёт на свежий релиз — при выходе новой версии просто создайте
Release с тем же именем файла, и кнопка подхватит его без правок в коде.

### Как обновить установщик (следующая версия)

```bash
gh release create v1.1.0 "ModernLauncher/dist/LunaLauncher-Setup-1.1.0.exe" \
  --repo semen4324/luna-launcher \
  --title "Luna Launcher 1.1.0" --notes "..."
```

Либо в вебе: репозиторий → **Releases → Draft a new release** → перетащить
`dist/LunaLauncher-Setup-x.y.z.exe` в поле «Attach assets».

## 2. Где опубликовать

### Вариант A — GitHub Pages (рекомендуется, бесплатно, без лимита трафика)

1. Залейте папку `website` в корень репозитория (или в ветку `gh-pages`).
2. Репозиторий → **Settings → Pages → Source: Deploy from a branch** →
   ветка `main`, папка `/ (root)`.
3. Через минуту сайт будет на `https://USER.github.io/REPO/`.

### Вариант B — Netlify (самый быстрый)

1. Откройте <https://app.netlify.com/drop>.
2. Перетащите папку `website` целиком.
3. Готово — сразу рабочий адрес, потом можно подключить свой домен.

### Вариант C — Cloudflare Pages

1. <https://dash.cloudflare.com> → **Workers & Pages → Create → Pages → Upload assets**.
2. Выберите папку `website`, нажмите **Deploy**.

## 3. Локальный просмотр

```bash
node serve.js 8099 ./website     # или любой другой статический сервер
# затем открыть http://127.0.0.1:8099
```

## 4. Обновить скриншоты

Скриншоты снимаются с реального лаунчера (метод `PrintWindow`, окно может быть
неактивным). После обновления интерфейса замените PNG в `assets/` —
разрешение и имена файлов должны остаться такими же.

## 5. Что можно доработать

- добавить секцию отзывов и ссылки на Discord/YouTube;
- OG-картинку для соцсетей (`og:image` сейчас указывает на `assets/shot-main.png`);
- счётчик скачиваний (нужен бэкенд, на статике не работает);
- перевод на английский — дописать объект `en` в `app.js` и кнопку в `.lang`.
