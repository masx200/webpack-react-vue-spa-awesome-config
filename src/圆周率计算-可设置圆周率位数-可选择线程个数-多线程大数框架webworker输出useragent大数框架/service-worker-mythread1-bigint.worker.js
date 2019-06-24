// (() => {
//使用bigint测试
importScripts(
  "https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js"
);
// ()=>{
// console.log("加载完成")}
//   console.log(bigInt)
// importScripts("./decimal.min.js");
// nabs.cmp=(m)=> nabs.compareAbs(m);
/**
   * 
   * https://github.com/peterolson/BigInteger.js
   * 
   * BigInteger.js Build Status Coverage Status Monthly Downloads
BigInteger.js is an arbitrary-length integer library for Javascript, allowing arithmetic operations on integers of unlimited size, notwithstanding memory and time limitations.

Update (December 2, 2018): BigInt is being added as a native feature of JavaScript. This library now works as a polyfill: if the environment supports the native BigInt, this library acts as a thin wrapper over the native implementation.

BigInteger.js构建状态覆盖状态每月下载
BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。

更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。 此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
*/
// setTimeout(mycalc,0)
// function mycalc(){

addEventListener("message", function(event) {
  bigInt.abs = n => bigInt(n).abs();

  bigInt.mul = (n, m) => bigInt(n).multiply(m);

  bigInt.div = (n, m) => bigInt(n).divide(m);
  bigInt.add = (n, m) => bigInt(n).add(m);
  //MAX_INT
  //9007199254740992
  bigInt().__proto__.cmp = bigInt().__proto__.compare;
  bigInt().__proto__.div = bigInt().__proto__.divide;
  bigInt().__proto__.mul = bigInt().__proto__.multiply;

  bigInt("90071992547409920").__proto__.cmp = bigInt(
    "90071992547409920"
  ).__proto__.compare;
  bigInt("90071992547409920").__proto__.div = bigInt(
    "90071992547409920"
  ).__proto__.divide;
  bigInt("90071992547409920").__proto__.mul = bigInt(
    "90071992547409920"
  ).__proto__.multiply;
  // bigInt.cmp=bigInt.prototype.cmp=(n)=>;
  var piwei;
  piwei = event.data[0];
  // piwei /= 2;
  var threadall = event.data[1];
  var threadid = event.data[2];
  // console.log(
  //   "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n",
  //   ...event.data
  // );
  console.log(
    "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n",
    /* 线程中的console.log不能输出对象,只能输出文本 */
    JSON.stringify(event.data)
  );
  //   console.log(...event.data);

  // Decimal.precision = piwei + 1;
  var p = new bigInt(0);
  var a = new bigInt(1);
  // var h = 1;
  var h = new bigInt("1e" + piwei);
  // console.log("h",h.toString())
  var x = new bigInt(0);
  var fu = 1;
  var t = new bigInt(1);
  for (var i = 0, len = threadid; i < len; i++) {
    fu = -1 * fu;
    a = bigInt.mul(a, 1024);
    x = x.plus(1);
  }
  while (bigInt.abs(t).cmp(new bigInt(0)) >= 0) {
    // console.log("t",t.toString())
    // console.log("a",a.toString())
    // console.log("x",x.toString())
    // console.log("p",p.toString())
    /**除法小于零的结果直接变成0,所以分母要特别大才能精确除法 */
    t = bigInt
      .mul(1, fu)
      .mul(
        bigInt
          .div(h.mul(-(2 ** 5)), bigInt.mul(4, x).plus(1))
          .plus(bigInt.div(h.mul(-1), bigInt.mul(4, x).plus(3)))
          .plus(bigInt.div(h.mul(2 ** 8), bigInt.mul(10, x).plus(1)))
          .plus(bigInt.div(h.mul(-(2 ** 6)), bigInt.mul(10, x).plus(3)))
          .plus(bigInt.div(h.mul(-(2 ** 2)), bigInt.mul(10, x).plus(5)))
          .plus(bigInt.div(h.mul(-(2 ** 2)), bigInt.mul(10, x).plus(7)))
          .plus(bigInt.div(h.mul(1), bigInt.mul(10, x).plus(9)))
      )
      .div(bigInt.mul(2 ** 6, a));

    p = bigInt.add(p, t);
    if (bigInt.abs(t).cmp(new bigInt(0)) <= 0) break;

    for (var i = 0, len = threadall; i < len; i++) {
      fu = -1 * fu;
      a = bigInt.mul(a, 1024);
      x = x.plus(1);
    }
  }
  // console.log("t", t.toString())
  // console.log("p", p.toString())
  postMessage([p.toString(), "" + x.plus(1)]);
});
// }
// })();
