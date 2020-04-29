//precaching resources
const cacheName = "app-cache-v1";
const resourcesToPrecache = [
    '/',
    'index.html',
    'assets/css/formu.css',
    'assets/libs/bulma/css/bulma.min.css',
    'assets/css/styles.css',
    'assets/img/icons/dne512x512.png',
    'https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap',
    'assets/img/icons/dne96x96ios.png',
    'assets/libs/vue/vue.js',
    'assets/js/script.js'
    // 'manifest.json'
];

self.addEventListener('install', event =>{
    console.log('Service worker is installed 🎉');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            return cache.addAll(resourcesToPrecache);
        })
        .catch(err => {
            console.log(err);
        })
    );
});

//activate event
self.addEventListener("activate", event => {
    console.log("Service Worker has been activated ✔");
})

self.addEventListener("fetch", event => {
    //responding with only cached resources on a fetch event
    //respond with cached assets
    event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        console.log(cachedResponse)
        return cachedResponse || fetch(event.request)
    })
    .catch(err => {
        console.log(err)
    })
    );
});