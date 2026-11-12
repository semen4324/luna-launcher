# Сайт лаунчера Luna Launcher

Одностраничный лендинг: возможности, скриншоты, описание, установка, FAQ.
Языки — **русский** и **украинский** (переключатель в шапке, выбор сохраняется).

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

## 1. Ссылка на скачивание (сделать обязательно)

Откройте `app.js`, самый верх:

```js
const CONFIG = {
  version: "1.0.0",
  size: "111 MB",
  downloadUrl: "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/latest/download/LunaLauncher-Setup-1.0.0.exe",
  repoUrl: "https://github.com/YOUR-USERNAME/YOUR-REPO"
};
```

Замените `YOUR-USERNAME` и `YOUR-REPO` на свои. Пока там заглушка, по нажатию
кнопки «Скачать» показывается подсказка вместо перехода.

### Как залить установщик на GitHub Releases

```bash
# 1. завести репозиторий и склонировать его
git init && git remote add origin https://github.com/USER/REPO.git

# 2. закоммитить сайт
git add website && git commit -m "landing"

# 3. создать релиз и прикрепить установщик
gh release create v1.0.0 \
  "ModernLauncher/dist/LunaLauncher-Setup-1.0.0.exe" \
  --title "Luna Launcher 1.0.0" --notes "Первый релиз"
```

Без `gh` — просто создайте Release в вебе и перетащите файл
`ModernLauncher/dist/LunaLauncher-Setup-1.0.0.exe` (111 МБ) в поле «Attach assets».

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
