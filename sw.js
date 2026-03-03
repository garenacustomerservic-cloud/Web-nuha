// Service Worker — Nurul Hasanah PWA
const CACHE = 'nh-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.url.includes('/api/')) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const c=res.clone(); caches.open('nh-v1').then(ch=>ch.put(e.request,c)); return res; })
      .catch(() => caches.match(e.request))
  );
});
