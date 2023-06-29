const cacheName = "ServiceLocator";

self.addEventListener("install", (e) => {
  e.waitUntil(
    (function () {
      const baseURL = self.location.origin;

      Promise.allSettled([
        getMatchingFiles(
          baseURL,
          /href\s*=\s*['"]([^'"]*\.[^'"]+)['"]/gi // Regex matches any file extensions.
        ),
        getMatchingFiles(
          baseURL,
          /\/assets\/((?!serviceWorker\.js)[^'"]*\.js)/gi
        ),
      ])
        .then((promises) => {
          const cacheItems = [];
          for (let promise of promises) {
            if (promise.status == "fulfilled") {
              cacheItems.push(...promise.value);
            }
          }

          const uniqueRequests = [...new Set(cacheItems)];

          caches
            .open(cacheName)
            .then((cache) => cache.addAll(uniqueRequests))
            .catch((error) => {
              console.error("Failed to add files to cache:", error);
            });
        })
        .catch((error) => console.error(error));
    })()
  );

  self.skipWaiting();
});

self.addEventListener("active", (e) => {
  console.log("service worker is active!");
});
self.addEventListener("fetch", (e) => {
  console.log("service worker ready to fetch data.");
});
function getMatchingFiles(directory, regex) {
  return new Promise(function (resolve, reject) {
    try {
      fetch(directory)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Failed to fetch directory");
          }
          return response.text();
        })
        .then(function (html) {
          const fileMatches = html.match(regex);

          if (!fileMatches || fileMatches.length === 0) {
            resolve([]);
          }

          const files = fileMatches.map(function (match) {
            return match.replace(/.*href="(.*)"/i, "$1");
          });

          const absoluteFiles = files.map(function (file) {
            return new URL(file, directory).href;
          });

          resolve(absoluteFiles);
        })
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}
const cacheName = "ServiceLocator";

self.addEventListener("install", (e) => {
  e.waitUntil(
    (function () {
      const baseURL = self.location.origin;

      Promise.allSettled([
        getMatchingFiles(
          baseURL,
          /href\s*=\s*['"]([^'"]*\.[^'"]+)['"]/gi // Regex matches any file extensions.
        ),
        getMatchingFiles(
          baseURL,
          /\/assets\/((?!serviceWorker\.js)[^'"]*\.js)/gi
        ),
      ])
        .then((promises) => {
          const cacheItems = [];
          for (let promise of promises) {
            if (promise.status == "fulfilled") {
              cacheItems.push(...promise.value);
            }
          }

          const uniqueRequests = [...new Set(cacheItems)];

          caches
            .open(cacheName)
            .then((cache) => cache.addAll(uniqueRequests))
            .catch((error) => {
              console.error("Failed to add files to cache:", error);
            });
        })
        .catch((error) => console.error(error));
    })()
  );

  self.skipWaiting();
});

self.addEventListener("active", (e) => {
  console.log("service worker is active!");
});
self.addEventListener("fetch", (e) => {
  console.log("service worker ready to fetch data.");
});
function getMatchingFiles(directory, regex) {
  return new Promise(function (resolve, reject) {
    try {
      fetch(directory)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Failed to fetch directory");
          }
          return response.text();
        })
        .then(function (html) {
          const fileMatches = html.match(regex);

          if (!fileMatches || fileMatches.length === 0) {
            resolve([]);
          }

          const files = fileMatches.map(function (match) {
            return match.replace(/.*href="(.*)"/i, "$1");
          });

          const absoluteFiles = files.map(function (file) {
            return new URL(file, directory).href;
          });

          resolve(absoluteFiles);
        })
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}
