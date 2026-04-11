const CACHE_NAME = 'fahrcast-v46';

// Install: skip waiting immediately to take over
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activate: delete ALL old caches, then claim all clients
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: ALWAYS network-first. Cache only as offline fallback.
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).then((resp) => {
      // Cache a copy for offline use
      if (resp.ok && e.request.method === 'GET' && !e.request.url.includes('googleapis.com')) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
      }
      return resp;
    }).catch(() => {
      // Offline: try cache
      return caches.match(e.request);
    })
  );
});
