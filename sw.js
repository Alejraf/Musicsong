/*
  Service worker mínimo de Vibra.
  Solo existe para que el navegador permita instalar la app y recibir enlaces con "Compartir" desde YouTube.
  No guarda nada en caché: todas las peticiones van directas a la red.
*/
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* sin caché, sin interceptar */ });
