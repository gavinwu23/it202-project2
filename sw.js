importScripts('/it202-project2/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mmovie').then(function(cache) {
     return cache.addAll([
       '/it202-project2',
       '/it202-project2/index.html',
       "/it202-project2/page_content/about.html",
       "/it202-project2/page_content/home.html",
       "/it202-project2/page_content/list.html",
       "/it202-project2/page_content/map1.html",
       "/it202-project2/page_content/search.html"
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
