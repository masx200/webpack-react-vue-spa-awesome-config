function importScripts(url) {
    var xhr = new XMLHttpRequest();
    // var args = Array.prototype.slice.call(arguments),
    //   len = args.length,
    //   i = 0,
    //   meta,
    //   data,
    //   content;
    // for (; i < len; i++) {
    //   if (args[i].substr(0, 5).toLowerCase() === "data:") {
    //     data = args[i];
    //     content = data.indexOf(",");
    //     meta = data.substr(5, content).toLowerCase();
    //     data = decodeURIComponent(data.substr(content + 1));
    //     if (/;\s*base64\s*[;,]/.test(meta)) {
    //       data = atob(data);
    //     }
    //     if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
    //       data = decodeURIComponent(escape(data));
    //     }
    //   } else {
    // xhr.open("GET", args[i], false);
    xhr.open("GET", url, false);
    xhr.send(null);
    var data = xhr.responseText;
    // eval(data);
    new Function(data)();
    //   }
    //   globalEval(data);
    // }
}
module.exports = importScripts;
