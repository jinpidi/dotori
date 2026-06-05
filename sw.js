const VERSION = 'dotori-20260605_4';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 모든 요청을 항상 네트워크에서 받기 (캐시 사용 안 함)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
