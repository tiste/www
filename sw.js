const cacheName = 'v1';

const assetsToCache = [
    '/assets/app.css',
    '/assets/app.js',
    '/index.html',
    '/en.html',
    '/projects.html',
    '/logo.png',
    '/assets/images/logo-full.png',
    '/assets/images/logo-full-white.png',
    '/assets/images/header.jpeg',
];

self.addEventListener('install', (event) => {
    console.log('SW - Installed', event);

    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(assetsToCache);
            })
            .then(() => {
                return self.skipWaiting();
            })
    )
});

self.addEventListener('activate', (event) => {
    console.log('SW - Activated', event);

    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }
    if (/http:/.test(event.request.url)) {
        return;
    }

    event.respondWith(
        caches.open(cacheName).then((cache) => {
            return fetch(event.request).then((networkResponse) => {
                cache.put(event.request, networkResponse.clone());

                return networkResponse;
            }).catch(() => {
                return cache.match(event.request);
            })
        })
    )
});
