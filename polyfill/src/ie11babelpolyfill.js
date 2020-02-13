var importScripts = require("./importscripts.js");
(() => {
    /* 判断ie11 */
    // if (navigator.userAgent.indexOf("Trident") > -1) {
    // var s = document.createElement("script");
    // s.src = "https://cdn.bootcss.com/babel-polyfill/7.4.4/polyfill.min.js";
    // document.head.appendChild(s);
    if (
        typeof Promise != "function" ||
        typeof Symbol != "function" ||
        typeof Reflect != "object"
    ) {
        importScripts(
            "https://cdn.bootcss.com/babel-polyfill/7.6.0/polyfill.min.js"
        );
    }

    // importScripts("https://cdn.staticfile.org/fetch/3.0.0/fetch.min.js");

    if (typeof fetch != "function" || typeof Response != "function") {
        require("./fetch-polyfill.js")();
    }

    if ("function" != typeof URL || "function" != typeof URLSearchParams) {
        require("./url-polyfill.min.js")();
    }

    if ("function" != typeof Event || "function" != typeof CustomEvent) {
        require("./event-polyfill.js")();
    }

    //发现Edge浏览器不支持 new EventTarget！

    try {
        new EventTarget();
    } catch (e) {
        window.EventTarget = undefined;
    }
    if ("function" != typeof EventTarget) {
        require("./EventTarget-polyfill.js")();
    }
    // }
})();
/* 
“URLSearchParams”未定义
URL.prototype
undefined
typeof URL
"object"
*/
