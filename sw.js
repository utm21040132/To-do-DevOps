//sin conexion
const CACHE_NAME = "checklist-cache-v1";
const urlsToCache = [
    "index.html",
    "styles.css",
    "app.js",
    "manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});