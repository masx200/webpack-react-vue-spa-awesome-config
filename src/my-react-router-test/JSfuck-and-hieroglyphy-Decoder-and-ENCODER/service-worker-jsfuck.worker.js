/* var sum = 0
for (var i = 0; i < 128; i++) {
    var c = String.fromCharCode(i);
    var out = JSFuck.encode(c, true)
    sum += out.length
    console.log(i, c, out.length)
}
console.log(sum, sum / 128) */
/** 旧版:测试结果表明使用webworker进行jsfuck反而更慢*/
import JSFuck from "./jsfuck.js";
/** 新版:使用import JSFuck from "./jsfuck.js";后,测试结果表明使用webworker进行jsfuck速度更快*/
// (() => {
var mymessagehandler = e => {
  //   try {
  //     console.log(JSFuck);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // function globalimport(srciptsrc) {
  //   importScripts(srciptsrc);
  // }

  var d = e.data;

  console.log("副线程" + "从主线程接收" + "event.data\n");
  //   console.log(...d);
  console.log(JSON.stringify(d));
  // globalimport(d[2]);

  // mui(document.getElementById("encode")).button("loading");
  var output = JSFuck.encode(d[0], d[1]);
  // $2("output").value = output;
  // $2("stats").innerHTML = output.length + " chars";
  // mui(document.getElementById("encode")).button("reset");
  postMessage(output);
};
addEventListener("message", mymessagehandler);
// })();
