"use strict";
(() => {
  if ("production" === process.env.NODE_ENV) {
    if (
      location.hostname !== "localhost" &&
      "127.0.0.1" !== location.hostname
    ) {
      "serviceWorker" in navigator &&
        window.addEventListener("load", function() {
          navigator.serviceWorker.register("service-worker.js").catch(() => {});
        });
    }
  }
})();
