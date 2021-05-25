var importScripts = require("./importscripts.js");
(() => {
    /* 判断ie11 */

    if (
        typeof Promise != "function" ||
        typeof Symbol != "function" ||
        typeof Reflect != "object"
    ) {
        importScripts(
            "https://cdn.bootcdn.net/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js"
        );
    }

    if (typeof fetch != "function" || typeof Response != "function") {
        require("./fetch-polyfill.js").default();
    }

    if ("function" != typeof URL || "function" != typeof URLSearchParams) {
        require("./url-polyfill.min.js").default();
    }

    if ("function" != typeof Event || "function" != typeof CustomEvent) {
        require("./event-polyfill.js").default();
    }

    //发现Edge浏览器不支持 new EventTarget！

    try {
        new EventTarget();
    } catch (e) {
        window.EventTarget = undefined;
    }
    if ("function" != typeof EventTarget) {
        require("./EventTarget-polyfill.js").default();
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
