// // import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
// /* 应该再卸载组件时关闭所有worker */
// // (() => {
// //   $(window).one("load",
// import mui from "@/mui.js";
// const decimalworker = "./service-worker-mythread1-decimal.worker.js";
import decimalworker from "./service-worker-mythread1-decimal.worker.js";
import Decimal from "../decimal.min.js";
import mui from "../mui.min.js";
import React, { useState, useEffect, useRef } from "react";
// ("use strict");
import $ from "jquery";
const jQuery = $;
// const IMPORTCJSAMDUMD = window.IMPORTCJSAMDUMD;
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// var { useState, useEffect, useRef } = React;
// var myworker = Array(16).fill();
// // export
// function 关闭所有worker() {
//   myworker.forEach(function(currentValue, index, arr) {
//     /* 可能worker的数量没有满,undefined的terminate函数不存在 */
//     try {
//       arr[index].terminate();
//       /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
//       arr[index] = undefined;
//     } catch (error) {}
//   });
// }

// import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
// import("../IMPORTCJSAMDUMD").then(IMPORTCJSAMDUMD => {
// (() => {
//   $(window).one("load",
// 自动开启严格模式
/* 应该再卸载组件时关闭所有worker */
// ("use strict");
// const IMPORTCJSAMDUMD = window.IMPORTCJSAMDUMD;

// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// var { useState, useEffect, useRef, useCallback } = React;

var myworker = Array(16).fill();

//   );
// })();
function 关闭所有worker() {
  myworker.forEach(function(currentValue, index) {
    /* 可能worker的数量没有满,undefined的terminate函数不存在 */
    try {
      myworker[index].terminate();
      /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
      myworker[index] = undefined;
    } catch (error) {}
  });
}
export default function() {
  useEffect(() => {
    // onmount();
    return () => {
      关闭所有worker();
    };
  }, []);
  function useBindtext(text) {
    const [inputcode, setinputcode] = useState(text);
    const inputonchange = e => {
      setinputcode(e.target.value);
    };
    return [inputcode, setinputcode, inputonchange];
  }
  var p,
    piwei,
    strt,
    finishflag,
    x = 0,
    threadgeshu,
    testname;
  function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  function tanchu弹出消息提示() {
    // var id=Math.random()*100000000|0
    var id = guid();
    jQuery("#my导航栏").append(
      jQuery(`<div id="${id}" class="alert alert-success alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>成功!</strong> 计算成功提示信息。
                    </div>`).fadeTo(5000, 0.5, () => {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })
    );
    // console.timeEnd('解码JSFUCK 和hieroglyphy')
  }
  function lashentextarea(eles) {
    // console.log(eles.outerHTML);
    requestAnimationFrame(function() {
      //   for (var value of eles) {
      const value = eles;
      var myptext = value;
      //  document.getElementById(value);

      var el = myptext;
      // textarea.scrollHeight = 60
      // textarea.style.height = "60px"
      // makeExpandingArea(textarea);
      if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
        // console.log(parseInt(el.style.height), el.scrollHeight);
        myptext.style.height = myptext.scrollHeight + 2 + "px";
        console.log("拉伸文本框", [
          parseInt(el.style.height),
          el.scrollHeight,
          myptext.outerHTML
        ]);
      }
      //   }
    });
  }
  const [inputtext1, setinputtext1, onchangeinputtext1] = useBindtext(6);
  const [inputtext2, setinputtext2, onchangeinputtext2] = useBindtext(4);
  const [outputtext1, setoutputtext1old, onchangeoutputtext1] = useBindtext(
    "UserAgent: " +
      navigator.userAgent +
      "\n" +
      (typeof Decimal === "function"
        ? "你的浏览器能够支持原生Decimal!"
        : "你的浏览器无法支持原生Decimal!") +
      "\n开始圆周率多线程测试\n"
  );

  const [outputtext2, setoutputtext2old, onchangeoutputtext2] = useBindtext("");
  const btnele = useRef();
  const outtext1 = useRef();
  const outtext2 = useRef();
  function setoutputtext1(t) {
    setoutputtext1old(t);
    lashentextarea(outtext1.current);
  }
  function setoutputtext2(t) {
    lashentextarea(outtext2.current);
    setoutputtext2old(t);
  }
  async function mystart(btnele) {
    // const { default: Decimal } = await IMPORTCJSAMDUMD(
    //   "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js",
    //   "decimal"
    // );
    mui(btnele).button("loading");
    // Decimal.abs = n => Decimal(n).abs();
    // Decimal.mul = (n, m) => Decimal(n).multiply(m);
    // Decimal.div = (n, m) => Decimal(n).divide(m);
    // Decimal.add = (n, m) => Decimal(n).add(m);
    // Decimal().__proto__.cmp = Decimal().__proto__.compare;
    // Decimal().__proto__.div = Decimal().__proto__.divide;
    // Decimal().__proto__.mul = Decimal().__proto__.multiply;
    // Decimal("90071992547409920").__proto__.cmp = Decimal(
    //   "90071992547409920"
    // ).__proto__.compare;
    // Decimal("90071992547409920").__proto__.div = Decimal(
    //   "90071992547409920"
    // ).__proto__.divide;
    // Decimal("90071992547409920").__proto__.mul = Decimal(
    //   "90071992547409920"
    // ).__proto__.multiply;

    // var myinput1 = document.getElementById("thread-big");
    // var myinput2 = document.getElementById("pichangwei-big");
    if (
      inputtext1 >= 1 &&
      inputtext1 <= 16 &&
      inputtext2 >= 1 &&
      inputtext2 <= 100
    ) {
      piwei = 1000 * Math.floor(inputtext2);
      //   let inputtext2f = Math.floor(inputtext2);
      let inputtext1f = Math.floor(inputtext1);
      threadgeshu = inputtext1f;
      //   inputtext1 = threadgeshu;
      testname =
        "圆周率计算多线程" + "-" + "线程数为" + threadgeshu + "-位数为" + piwei;
      //   myshurukuangneirong =
      //     myshurukuangneirong + "线程数为" + threadgeshu + " ";
      //   myptext.value = myshurukuangneirong;
      //   eventdata = "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";
      //   // Decimal.precision = piwei
      //   myshurukuangneirong += String(eventdata);
      //   myptext.value = myshurukuangneirong;
      //   console.log(outputtext1);
      /* react hooks 的state 刷新太慢? */
      setoutputtext1(
        // outputtext1 +
        outtext1.current.value +
          testname +
          "线程数为" +
          threadgeshu +
          " " +
          "圆周率计算" +
          piwei +
          "位 " +
          "计算圆周率中......" +
          "  \n"
      );
      Decimal.precision = piwei;
      //   debugger;
      //   console.log(outputtext1);
      console.log(testname);
      console.time(testname);
      strt = new Date().getTime();
      p = new Decimal(0);
      //   myworker = [];
      //   myworker.length = threadgeshu;
      finishflag = [];
      finishflag.length = threadgeshu;
      //   if (typeof worker1 == "undefined") {
      //     worker1 = new Worker("service-worker-mythread1-Decimal.js");
      //   }
      // worker1=Array( threadgeshu)
      //   for (var i = 0, len = threadgeshu; i < len; i++) {
      //     myworker[i] = worker1;
      //   }
      //   var worker1 = Array(threadgeshu);
      //   myworker =Array(threadgeshu);
      //   for(var key=0;key< threadgeshu; key++){
      //       myworker[key]=undefined
      //   }
      //   myworker.length = threadgeshu;
      /* myworker.forEach(function(currentValue, index, arr) { */
      /* 等待所有线程完成之后再下一步 */
      var 所有输出promise = await Promise.all(
        myworker.slice(0, threadgeshu).map(function(currentValue, index) {
          const arr = myworker;
          /* arr和myworker不是同一个对象了! */
          //   console.log(arr === myworker);//false
          return new Promise((rs, rj) => {
            /* 不要开启多余的线程 */
            if (index >= threadgeshu) {
              rs();
              return;
            }

            // if (!arr[index]) {
            arr[index] =
              arr[index] ||
              //   new Worker("./service-worker-mythread1-decimal.worker.js");

              decimalworker();
            //   new Worker("service-worker-mythread1-decimal.js");
            //   &&
            //     console.log(
            //       "创建了新webworker线程",
            //       "service-worker-mythread1-Decimal.js" + "-" + index
            //     ));
            //   ,{name:"service-worker-mythread1-Decimal.js"+"-"+index}

            // }
            // arr[index].name ="service-worker-mythread1-Decimal.js"+ "-" + index;
            // console.log(arr[index].name )
            // arr[index] = new Worker("service-worker-mythread1-Decimal.js");
            arr[index].postMessage([piwei, threadgeshu, index]);
            arr[index].onmessage = function(event) {
              console.log(
                "主线程从副线程" + (index + 1) + "接收" + "event.data\n",
                event.data
              );
              // console.log(
              //   "第一个参数",
              //   event.data[0],
              //   "\n第二个参数",
              //   event.data[1]
              // );
              var p1 = new Decimal(event.data[0]);
              p = Decimal.add(p, p1);
              x = Math.max(x, parseInt(event.data[1]));
              finishflag[index] = 1;
              //   threadfinish(btnele);
              //   currentValue.terminate()
              rs(event.data);
            };
            arr[index].onerror = e => {
              // for (var key in e) {
              //     console.error(key, e[key])
              // }
              // console.error(e.message)
              //   console.error("Error:", e.message, e.filename);
              //   arr[index].terminate();
              //   $("#tp2-big").val("Error:" + e.message+" "+e.filename);
              //   throw e;
              rj(new Error(e.message + " " + e.filename));
            };
          });
          // console.log(arr[index]);
          // console.log(arr);
        })
      );
      console.log("所有输出promise的返回值", 所有输出promise);
      /* 所有线程已经完成,输出结果 */
      requestAnimationFrame(() => {
        (function(btnele) {
          // debugger;
          console.timeEnd(testname);
          mui(btnele).button("reset");
          var endt = new Date().getTime();
          var durt = (endt - strt) / 1000;
          const eventdata =
            "计算完成,用时" +
            durt +
            "秒第" +
            x +
            "次 " +
            "圆周率" +
            piwei +
            "位\n";
          setoutputtext2(
            "圆周率" +
              piwei +
              "位" +
              p.toString()[0] +
              //   "." +
              p.toString().slice(1)
          );
          //   console.log(outputtext1 + eventdata);
          /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生Decimal!
开始圆周率多线程测试
计算完成,用时0.533秒第1334次 圆周率4000位 */
          /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生Decimal!
开始圆周率多线程测试
圆周率计算多线程-线程数为6-位数为4000线程数为6 圆周率计算4000位 计算圆周率中......  
计算完成,用时0.533秒第1334次 圆周率4000位 */
          //   console.log(outtext1.current.value + eventdata);
          //   console.log(outputtext1);
          /* 改变状态是异步的! 两个输出一样 */
          //   debugger;
          /* 等到下次刷新组件时,获取到的state才会改变 */
          setoutputtext1(outtext1.current.value + eventdata);
          //   console.log(outputtext1);
          // debugger;
          tanchu弹出消息提示();
        })(btnele);
      });
    } else {
      alert("输入错误");
      /* 输入错误之后要重置 开始按钮 */
      setinputtext2(4); //inputtext2 = 4;
      setinputtext1(8); //   inputtext1 = 8;

      mui(btnele).button("reset");
    }
  }
  return (
    <div class="container">
      <h3>Decimal.js</h3>
      <p>
        Decimal.js是JavaScript的任意精度Decimal类型。 特征: 整数和浮点数,
        简单但功能齐全的API,
        复制JavaScript的Number.prototype和Math对象的许多方法,
        还处理十六进制，二进制和八进制值,
        比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用, 没有依赖,
        广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript 3）功能。
        全面的文档和测试集。
      </p>
      <hr />
      <div>
        <p>
          <span>
            选择线程个数:数量 ( 1 到 16 之间):
            <input
              value={inputtext1}
              onChange={onchangeinputtext1}
              class="form-control"
              id="thread-big"
              type="number"
              name="quantity"
              min="1"
              max="12"
            />
          </span>
        </p>
        <p>
          <span>
            选择圆周率位数:数量1000* ( 1 到 100 之间):
            <input
              value={inputtext2}
              onChange={onchangeinputtext2}
              class="form-control"
              id="pichangwei-big"
              type="number"
              name="quantity"
              min="1"
              max="100"
            />
          </span>
        </p>
        <button
          ref={btnele}
          data-loading-icon="mui-spinner mui-spinner-custom"
          class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
          id="start-big"
          onClick={e => {
            // console.log(e);
            // mystart(btnele.current);
            mystart(e.target);
          }}
          type="button"
          style={{ width: "100%" }}
        >
          开始
        </button>
      </div>
      <br />
      <div>
        <textarea
          ref={outtext1}
          value={outputtext1}
          onChange={e => {
            onchangeoutputtext1(e);
            lashentextarea(e.target);
          }}
          class="form-control"
          cols="100"
          rows="100"
          style={{
            width: "100%",
            height: "100px",
            margin: "0 0",
            "text-align": "center"
          }}
          width="100%"
          id="tp-big"
        />
        <br />
        {/* <button
            class=" btn btn-outline-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapsiblecontainer2"
          > */}
        <details open>
          <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
            展开收起圆周率结果
          </summary>
          {/* </button> */}
          <br />
          <br />
          <div id="collapsiblecontainer2" class="collapse show">
            <textarea
              ref={outtext2}
              value={outputtext2}
              //   onChange={onchangeoutputtext2}
              onChange={e => {
                onchangeoutputtext2(e);
                lashentextarea(e.target);
              }}
              class="form-control"
              cols="100"
              rows="100"
              style={{
                width: "100%",
                height: "100px",
                margin: "0 0",
                "text-align": "center"
              }}
              width="100%"
              id="tp2-big"
            />
          </div>
        </details>
      </div>
    </div>
  );
}

// const onmount = () => {
//     IMPORTCJSAMDUMD(
//       "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js",
//       "decimal"
//     ).then(module => {
//       const Decimal = module.default;
//       var myptext,
//         myshurukuangneirong,
//         p,
//         threadgeshu,
//         x,
//         piwei,
//         //   myworker = Array(16),
//         eventdata,
//         strt,
//         finishflag,
//         durt,
//         testname;
//       // for (var key = 0; key < myworker.length; key++) {
//       //   myworker[key] = undefined;
//       // }
//       mytestpi();
//       function guid() {
//         return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
//           c
//         ) {
//           var r = (Math.random() * 16) | 0,
//             v = c == "x" ? r : (r & 0x3) | 0x8;
//           return v.toString(16);
//         });
//       }
//       function tanchu弹出消息提示() {
//         // var id=Math.random()*100000000|0
//         var id = guid();
//         jQuery("#my导航栏").append(
//           jQuery(`<div id="${id}" class="alert alert-success alert-dismissible fade show">
//                           <button type="button" class="close" data-dismiss="alert">&times;</button>
//                           <strong>成功!</strong> 计算成功提示信息。
//                           </div>`).fadeTo(5000, 0.5, () => {
//             console.log(jQuery("#" + id));
//             jQuery("#" + id).remove();
//           })
//         );
//         // console.timeEnd('解码JSFUCK 和hieroglyphy')
//       }
//       //   window.onload = () => {
//       //     mytestpi();
//       //   };
//       // $('window').load(mytestpi)
//       // $(document).ready(mytestpi);
//       // mytestpi;

//       function lashentextarea(...ids) {
//         setTimeout(function() {
//           for (var value of ids) {
//             var myptext = document.getElementById(value);
//             var el = myptext;

//             // textarea.scrollHeight = 60
//             // textarea.style.height = "60px"
//             // makeExpandingArea(textarea);
//             if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
//               // console.log(parseInt(el.style.height), el.scrollHeight);

//               myptext.style.height = myptext.scrollHeight + 2 + "px";
//               // console.log("拉伸文本框", myptext.outerHTML)
//               console.log(
//                 "拉伸文本框",
//                 parseInt(el.style.height),
//                 el.scrollHeight,
//                 myptext.outerHTML
//               );
//             }
//           }
//         }, 0);
//       }

//       function mytestpi() {
//         // document.getElementById("start").onclick = mystart;
//         $("#start").click(mystart);
//         getConstpinewhighefficiency105();
//       }

//       function getConstpinewhighefficiency105() {
//         document.getElementById("thread").value = 6;
//         document.getElementById("pichangwei").value = 4;
//         // jisuanfinishflag = 1;
//         threadgeshu = 8;
//         x = 0;
//         // piwei = 3000;

//         myptext = document.getElementById("tp");
//         myshurukuangneirong = " ";
//         myshurukuangneirong =
//           myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
//         myshurukuangneirong = myshurukuangneirong + "开始圆周率多线程测试\n";
//         myptext.value = myshurukuangneirong;
//         // document.getElementById("start").onclick = mystart;
//         lashentextarea("tp", "tp2");
//         // setTimeout(function() {
//         //   myptext.style.height = myptext.scrollHeight + "px";
//         // }, 0);
//       }

//       function mystart() {
//         mui(document.getElementById("start")).button("loading");
//         // jisuanfinishflag = 0;

//         if (
//           document.getElementById("thread").value >= 1 &&
//           document.getElementById("thread").value <= 16 &&
//           document.getElementById("pichangwei").value >= 1 &&
//           document.getElementById("pichangwei").value <= 100
//         ) {
//           piwei = 1000 * Math.floor(document.getElementById("pichangwei").value);
//           document.getElementById("pichangwei").value = Math.floor(
//             document.getElementById("pichangwei").value
//           );
//           threadgeshu = Math.floor(document.getElementById("thread").value);
//           document.getElementById("thread").value = threadgeshu;
//           testname = document.title =
//             "圆周率计算多线程" +
//             "-" +
//             "线程数为" +
//             threadgeshu +
//             "-位数为" +
//             piwei;
//           myshurukuangneirong =
//             myshurukuangneirong + "线程数为" + threadgeshu + " ";
//           myptext.value = myshurukuangneirong;
//           eventdata =
//             "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";

//           myshurukuangneirong += String(eventdata);
//           myptext.value = myshurukuangneirong;
//           Decimal.precision = piwei;
//           console.log(testname);
//           console.time(testname);
//           strt = new Date().getTime();
//           p = new Decimal(0);

//           //   myworker = [];
//           //   myworker.length = threadgeshu;

//           finishflag = [];
//           finishflag.length = threadgeshu;
//           //   var worker1;
//           //   if (typeof worker1 == "undefined") {
//           //     worker1 = ("service-worker-mythread1-decimal.js");
//           //   }

//           //   for (var i = 0, len = threadgeshu; i < len; i++) {
//           //     myworker[i] = worker1;
//           //   }

//           myworker.forEach(function(currentValue, index, arr) {
//             // arr[index] = undefined;
//             if (index >= threadgeshu) {
//               return;
//             }
//             if (!arr[index]) {
//               arr[index] = new Worker("service-worker-mythread1-decimal.js");
//               console.log(
//                 "创建了新webworker线程",
//                 "service-worker-mythread1-decimal.js" + "-" + index
//               );
//             }
//             //   ,{name:"mythread1-Decimal.js"+"-"+index}
//             // arr[index] = new Worker("service-worker-mythread1-decimal.js");
//             // arr[index].name += "-" + index;
//             arr[index].postMessage([piwei, threadgeshu, index]);
//             arr[index].onmessage = function(event) {
//               console.log(
//                 "主线程从副线程" + (index + 1) + "接收" + "event.data\n"
//               );
//               console.log(
//                 "第一个参数",
//                 event.data[0],
//                 "\n第二个参数",
//                 event.data[1]
//               );
//               //   console.log(...event.data);

//               var p1 = new Decimal(event.data[0]);
//               p = Decimal.add(p, p1);
//               x = Math.max(x, parseInt(event.data[1]));
//               finishflag[index] = 1;
//               threadfinish();
//               //   arr[index].terminate()
//             };
//             arr[index].onerror = e => {
//               console.error("Error", e.message, e.filename);
//               // for (var key in e) {
//               //     console.error(key, e[key])
//               // }
//               // console.error(e)
//               //   arr[index].terminate();
//               // throw e;
//             };
//           });
//         } else {
//           alert("输入错误");
//           document.getElementById("pichangwei").value = 4;
//           document.getElementById("thread").value = 8;
//         }
//       }

//       function threadfinish() {
//         if (
//           threadgeshu ==
//           finishflag.filter(function(currentValue) {
//             return currentValue == 1;
//           }).length
//         ) {
//           mui(document.getElementById("start")).button("reset");
//           console.timeEnd(testname);
//           var endt = new Date().getTime();
//           durt = (endt - strt) / 1000;

//           eventdata =
//             "计算完成,用时" +
//             durt +
//             "秒第" +
//             x +
//             "次 " +
//             "圆周率" +
//             piwei +
//             "位\n";
//           // +
//           // "  \n" +
//           // p +
//           // "  \n"
//           document.getElementById("tp2").value =
//             "圆周率" + piwei + "位" + p.toString();
//           myptext = document.getElementById("tp");
//           myshurukuangneirong += String(eventdata);
//           myptext.value = myshurukuangneirong;
//           tanchu弹出消息提示();
//           // jisuanfinishflag = 1;
//           // myworker.forEach(function(currentValue, index, arr) {
//           //   // arr[index].terminate();
//           // });
//           x = 0;
//           //alert("ok")
//           setTimeout(function() {
//             // myptext.style.height = myptext.scrollHeight + "px";
//             lashentextarea("tp", "tp2");
//           }, 0);
//           document.body.onmousemove = document.body.onmouseover = document.body.onmousewheel = document.body.onscroll = document.body.onmousedown = null;
//         }
//       }
//     });
//   };

//    {/* <div>
//         <p>
//           <span>
//             选择线程个数:数量 ( 1 到 16 之间):
//             <input
//               class="form-control"
//               id="thread"
//               type="number"
//               name="quantity"
//               min="1"
//               max="12"
//             />
//           </span>
//         </p>
//         <p>
//           <span>
//             选择圆周率位数:数量1000* ( 1 到 100 之间):
//             <input
//               class="form-control"
//               id="pichangwei"
//               type="number"
//               name="quantity"
//               min="1"
//               max="100"
//             />
//           </span>
//         </p>
//         <button
//           data-loading-icon="mui-spinner mui-spinner-custom"
//           class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
//           id="start"
//           type="button"
//           style={{ width: "100%" }}
//         >
//           开始
//         </button>
//       </div>
//       <br />
//       <div>
//         <textarea
//           class="form-control"
//           cols="100"
//           rows="100"
//           style={{
//             width: "100%",
//             height: "200px",
//             margin: "0 0",
//             "text-align": "center"
//           }}
//           width="100%"
//           id="tp"
//         />
//         <br />
//         <br />
//         {/* <button
//         class=" btn btn-outline-primary"
//         type="button"
//         data-toggle="collapse"
//         data-target="#collapsiblecontainer3"
//       > */}
//         {/* <details open>
//           <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
//             展开收起圆周率结果
//           </summary>
//           {/* </button> */}
//           {/* <br />
//           <br />
//           <div id="collapsiblecontainer3" class="collapse show">
//             <textarea
//               class="form-control"
//               cols="100"
//               rows="100"
//               style={{
//                 width: "100%",
//                 height: "100px",
//                 margin: "0 0",
//                 "text-align": "center"
//               }}
//               width="100%"
//               id="tp2"
//             />
//           </div>
//         </details>
//       </div>

//    // */}

//    //{// */} */}
