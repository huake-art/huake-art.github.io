/* 自动生成，请勿手改；重新生成：node tools/build-sw.mjs */
const CACHE = 'cet4-ba73ff56e4';
const ASSETS = [
  "./css/app.css",
  "./css/mobile.css",
  "./data/basics/sentences.js",
  "./data/basics/verbs.js",
  "./data/basics/words.js",
  "./data/books.js",
  "./data/modules.js",
  "./data/papers/paper-1.js",
  "./data/papers/paper-2.js",
  "./data/papers/paper-3.js",
  "./data/real-exams.js",
  "./data/words/liu-bei.js",
  "./data/words/liu-full.js",
  "./data/words/part-1.js",
  "./data/words/part-2.js",
  "./data/words/part-3.js",
  "./data/words/part-4.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./js/core.js",
  "./js/mobile-shell.js",
  "./js/pages/basics.js",
  "./js/pages/home.js",
  "./js/pages/mistakes.js",
  "./js/pages/module-page.js",
  "./js/pages/notes.js",
  "./js/pages/paper.js",
  "./js/pages/papers.js",
  "./js/pages/plan.js",
  "./js/pages/real-exams.js",
  "./js/pages/review.js",
  "./js/pages/vocabulary.js",
  "./js/srs.js",
  "./js/store.js",
  "./js/ui.js",
  "./manifest.json",
  "./pages/basics.html",
  "./pages/grammar.html",
  "./pages/listening.html",
  "./pages/mistakes.html",
  "./pages/notes.html",
  "./pages/paper.html",
  "./pages/papers.html",
  "./pages/plan.html",
  "./pages/reading.html",
  "./pages/real-exams.html",
  "./pages/review.html",
  "./pages/translation.html",
  "./pages/vocabulary.html",
  "./pages/writing.html"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.all(ASSETS.map((url) =>
        cache.add(url).catch(() => console.warn('precache miss', url))
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
