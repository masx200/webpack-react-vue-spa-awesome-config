(() => {
  /* 判断ie11 */
  if (navigator.userAgent.indexOf("Trident") > -1) {
    // var s = document.createElement("script");
    // s.src = "https://cdn.bootcss.com/babel-polyfill/7.4.4/polyfill.min.js";
    // document.head.appendChild(s);

    if (!importScripts) {
      var importScripts = (function(globalEval) {
        var xhr = new XMLHttpRequest();
        return function importScripts() {
          var args = Array.prototype.slice.call(arguments),
            len = args.length,
            i = 0,
            meta,
            data,
            content;
          for (; i < len; i++) {
            if (args[i].substr(0, 5).toLowerCase() === "data:") {
              data = args[i];
              content = data.indexOf(",");
              meta = data.substr(5, content).toLowerCase();
              data = decodeURIComponent(data.substr(content + 1));
              if (/;\s*base64\s*[;,]/.test(meta)) {
                data = atob(data);
              }
              if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
                data = decodeURIComponent(escape(data));
              }
            } else {
              xhr.open("GET", args[i], false);
              xhr.send(null);
              data = xhr.responseText;
            }
            globalEval(data);
          }
        };
      })(eval);
    }

    importScripts(
      "https://cdn.bootcss.com/babel-polyfill/7.4.4/polyfill.min.js"
    );

    importScripts("https://cdn.staticfile.org/fetch/3.0.0/fetch.min.js");
  }
})();
// import "./fetch.js";
