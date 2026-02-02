self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // qui potresti gestire cache in futuro
});

self.addEventListener("fetch", event => {
  // passthrough: nessuna cache offline per ora
});
