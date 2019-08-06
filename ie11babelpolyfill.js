(() => {
  /* 判断ie11 */
  if (navigator.userAgent.indexOf("Trident") > -1) {
    var s = document.createElement("script");
    s.src = "https://cdn.bootcss.com/babel-polyfill/7.4.4/polyfill.min.js";
    document.head.appendChild(s);
  }
})();
