const cacheName = 'finanzas-v1';
const archivos = [
  './',
  './login.html',
  './crear_usuario.html',
  './recuperar_contraseña.html',
  './index.html',
  './registro.html',
  './graficos.html',
  './manifest.json',
  './icono.png'
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(archivos))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});