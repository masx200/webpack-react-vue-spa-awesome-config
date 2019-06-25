(() => {
  /* 注册google的workbox的serviceworker */
  "serviceWorker" in navigator &&
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("service-worker.js");
    });
})();
