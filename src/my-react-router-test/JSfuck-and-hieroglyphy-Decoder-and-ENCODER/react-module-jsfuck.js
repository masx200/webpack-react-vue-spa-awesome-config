import jsfuckworker from "./service-worker-jsfuck.worker.js";
// import ClipboardJS from "../../clipboard.min.js";
// import("../../clipboard.min.js").then(module => {
//   const ClipboardJS = module.default;
//   new ClipboardJS(".btn").on("success", function(e) {
//     e.clearSelection();
//   });
// });
import mui from "../../mui.min.js";
import $ from "jquery";
import React from "react";
const jQuery = $;
// const clipboard = new ClipboardJS(".btn");

// clipboard.on("success", function(e) {
//   if (!e.text) {
//     console.log("复制内容空");
//   } else {
//     //   console.info("Action:", e.action);
//     //   console.info("Text:", e.text);
//   }
//   /* 不显示选择的区域形式 */
//   e.clearSelection();
// });
//new ClipboardJS(".btn");
// import jsfuckencoderender, { 关闭所有worker } from "./jsfuck-encode-render";
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useRef, useCallback } = React;
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
var outputdivid = "clip" + guid();
function guid() {
  return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
var myservice;
function 关闭所有worker() {
  try {
    myservice.terminate();
    /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
    myservice = undefined;
  } catch (error) {}
}
export default function Jsfuck() {
  const evalcheckbox = useRef();
  function encode(btnencode) {
    console.time("encodescript");
    console.log("encodescript");
    mui(btnencode).button("loading");

    // if (!myservice) {
    myservice = myservice || jsfuckworker();
    // new Worker("./service-worker-jsfuck.worker.js");
    //   console.log("创建新线程", "service-worker-jsfuck.js");
    // }

    myservice.postMessage([
      //   $2("input").value,
      inputcode,
      evalcheckbox.current.checked
      //   $2("eval").checked

      // $("#jsfuckscript").attr("src")
    ]);
    myservice.onmessage = e => {
      var output = e.data;
      console.log("主线程从副线程" + "接收" + "event.data\n");
      console.log(output);
      // $2("output").value = output;
      console.timeEnd("encodescript");
      console.time("requestAnimationFrame");
      setoutputcode(output);
      //   jQuery("#output").val(output);
      setstatstext(output.length + " chars");
      //   $2("stats").innerHTML = output.length + " chars";
      mui(btnencode).button("reset");
      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")

      requestAnimationFrame(() => {
        console.log("弹出消息提示");
        tanchu弹出消息提示();
        console.timeEnd("requestAnimationFrame");
      });
      // tanchu弹出消息提示();
    };
    myservice.onerror = e => {
      //   console.error("Error:", e.message, e.filename);
      throw new Error(e.message + " " + e.filename);
      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")
    };
  }
  //   var lastclick;
  function tanchu弹出消息提示() {
    // var id=Math.random()*100000000|0
    var id = guid();
    jQuery("#my导航栏").append(
      jQuery(`<div id="${id}" class="alert alert-success alert-dismissible fade show">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>成功!</strong> 编码成功提示信息。
                        </div>`).fadeTo(10000, 0.5, () => {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })
    );
    // console.timeEnd('解码JSFUCK 和hieroglyphy')
  }
  const [statstext, setstatstext] = useState(`0 chars`);
  var [outputcode, setoutputcode] = useState("");
  var [inputcode, setinputcode] = useState(
    "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"
  );
  const btnencode = useRef();
  //   const btnencodestring = useRef();
  const inputonchange = useCallback(
    e => {
      setinputcode(e.target.value);
    },
    [inputcode]
  );
  const outputonchange = useCallback(
    e => {
      setoutputcode(e.target.value);
    },
    [outputcode]
  );
  useEffect(() => {
    document.title =
      "React router App-" +
      "JSFuck encoder- Write any JavaScript with 6 Characters: []()!+";
    // jsfuckencoderender();
    return () => {
      关闭所有worker();
    };
  }, []);

  return (
    <div class="jdahd">
      <h1
        style={{ "font-size": "30px" }}
        //       "
        //     font-size: 30px;
        // "
      >
        编码JSFUCK <br />
        encode JSFUCK
      </h1>
      <p>
        JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。
      </p>
      <p>()+[]!</p>
      <p>
        它不依赖于浏览器，因此您甚至可以在Node.js上运行它。
        <br />
        使用下面的表单转换您自己的脚本。取消选中“eval source”以获取纯字符串。
      </p>
      <p>
        浏览器兼容性:
        建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！
      </p>
      <br />
      <textarea
        id="input"
        type="text"
        class="form-control"
        value={inputcode}
        onChange={inputonchange}
      />
      <br />
      <button
        onClick={e => {
          encode(e.target);
        }}
        ref={btnencode}
        class="btn btn-outline-primary btn-lg"
        id="encode"
        type="text"
        data-loading-icon="mui-spinner mui-spinner-custom"
      >
        Encode
      </button>
      <div
        class="checkbox"
        // onClick={() => {
        //   encode(btnencode.current);
        // }}
      >
        <input
          id="eval"
          type="checkbox"
          ref={evalcheckbox}
          onChange={() => {
            encode(btnencode.current);
          }}
          defaultChecked={true}
        />
        <label htmlFor={"eval"}>Eval Source</label>
      </div>
      <div id={"clip" + outputdivid}>
        <textarea
          id="output"
          class="form-control"
          value={outputcode}
          onChange={outputonchange}
        />
      </div>

      <div class="actions">
        <span id="stats">{statstext}</span>
        {/* <span id="stats">0 chars</span> */}
        <button
          class="btn btn-outline-primary btn-lg"
          id="run"
          onClick={function() {
            // var codestring = $2("output").value;
            var codestring = outputcode;
            var value = Function(`return ${codestring}`)();
            //终于找到了uglifyjs压缩混淆失败的原因了!严格模式不能使用eval!
            // eval($2("output").value);

            if (
              evalcheckbox.current.checked
              // !$2("eval").checked
            ) {
              alert('"' + value + '"');
            }
            // return false;
          }}
        >
          Run This
        </button>
        <button
          class="btn btn-outline-success btn-lg"
          data-clipboard-target={"#" + "clip" + outputdivid}
        >
          复制
        </button>
      </div>
      <br />
      <p>
        <a href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER">
          https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER
        </a>
      </p>
      <p>
        <a href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js">
          https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
        </a>
      </p>
    </div>
  );
}
