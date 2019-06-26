/* var sum = 0
for (var i = 0; i < 128; i++) {
    var c = String.fromCharCode(i);
    var out = hieroglyphy.hieroglyphyScript(c)
    sum += out.length
    console.log(i, c, out.length)
}
console.log(sum, sum / 128) */
// var document={}
// import("./hieroglyphy.js").then(m=>(WorkerGlobalScope.hieroglyphy=m))
import hieroglyphy from "./hieroglyphy.js";
// console.log(hieroglyphy,WorkerGlobalScope.hieroglyphy)
// var hieroglyphy=import("./hieroglyphy.js")
/* console.log( (WorkerGlobalScope !== undefined ? WorkerGlobalScope : false))
//(() => {
    console.log(( undefined!==window ? window : false)); */
//   var hieroglyphy = import("hieroglyphy.js");
// console.log(this,)
addEventListener("message", e => {
  // var hieroglyphy = WorkerGlobalScope.hieroglyphy;
  //   console.log( (typeof window !== 'undefined' ? window : false) ||
  //   (typeof WorkerGlobalScope !== 'undefined' ? WorkerGlobalScope : false))
  var d = e.data;

  console.log("副线程" + "从主线程接收" + "event.data\n");
  console.log(JSON.stringify(d));
  //   if (typeof hieroglyphy === "undefined") {
  //     var hieroglyphy = d[2];
  //   }

  //   importScripts(d[2]);
  //   var hieroglyphy = WorkerGlobalScope.hieroglyphy;
  // var hieroglyphy= import(d[2]);
  // mui(document.getElementById("encode")).button("loading");
  if ("encodescript" === d[1]) {
    var output = hieroglyphy.hieroglyphyScript(d[0]);
  } else if ("encodestring" === d[1]) {
    var output = hieroglyphy.hieroglyphyString(d[0]);
  }
  //   var output = JSFuck.encode(d[0], d[1]);
  // $2("output").value = output;
  // $2("stats").innerHTML = output.length + " chars";
  // mui(document.getElementById("encode")).button("reset");
  postMessage(output);
});
//})();
