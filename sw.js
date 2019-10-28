importScripts('/it202-project2/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       "/page_content/about.html",
       "/page_content/home.html",
       "/page_content/list.html",
       "/page_content/map1.html",
       "/page_content/search.html"
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
});
