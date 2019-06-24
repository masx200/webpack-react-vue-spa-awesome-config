import React from "react";
import parser from "fast-xml-parser";
import rssxml1 from "./www.tmtpost.com.rss.xml";
import rssxml2 from "./feed.iplaysoft.com.xml";
import rssxml3 from "./landiannews.com.feed.xml";
import rssxml4 from "./www.ithome.com.rss.xml";
import rssxml5 from "./ifanr.com.feed.xml";
import rssxml6 from "./pingwest.com.feed.xml";
import $ from "jquery";
import mui from "../mui.min.js";
const jQuery = $;
// ("use strict");
/* Hook是React 16.8中的新增功能。它们允许您在不编写类的情况下使用状态和其他React功能。
https://reactjs.org/docs/hooks-overview.html#state-hook
*/
/* // var refreshallsetstate;
// IMPORTCJSAMDUMD(
//     "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
//     "react"
//   ).then(

//     reactmoduleload
//   )

// function reactmoduleload(module){
// console.log(window)
// React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")

// console.log(window.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.react)
 */
/* https://reactjs.org/docs/hooks-reference.html#useref */
// var mybuttonids = {};
var myxmlstrcontent = [];
var myrsscontent = [];
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useRef } = React;
// var{ useState }=React

export default function Rssreader() {
  const [rssstate, setrssState] = useState(myrsscontent);
  //   console.log(setrssState);
  const mybuttonidsbuttonid1 = useRef();
  const mybuttonidsbuttonid2 = useRef();
  const mybuttonidsbuttonid3 = useRef();
  const mybuttonidsbuttonid4 = useRef();
  const mybuttonidsbuttonid5 = useRef();
  const mybuttonidsbuttonid6 = useRef();
  function jiazaiload(xmlurl, element) {
    mui(element).button("loading");
    // window.myrsscontent = []
    var myrsscontent = [];
    console.log(
      "开始加载外部内容",
      xmlurl
      /* $(myselectorid).attr("src") */
    );
    if (typeof /* $(myselectorid).attr("src")  */ xmlurl == "undefined") {
      //   console.log("加载失败");
    } else {
      //使用fetch函数代替$.get
      //使用fast-xml-parser把xml转换为json
      // var xmlurl = $(myselectorid).attr("src");
      fetch(xmlurl)
        .then(r => {
          //   console.log(r.statusText, r);
          return r.text();
        })
        .then(s => {
          var str = s;
          myxmlstrcontent.push(str);
          //   console.log("xml", myxmlstrcontent);
          var data = parser.parse(str);
          console.log("rssjson", data);
          myrsscontent.title = data.rss.channel.title;
          //   myrsscontent.description = $(data.rss.channel.description).text();
          myrsscontent.description = data.rss.channel.description;
          myrsscontent.push(
            /* 提取e.description里面的文字 */
            /* 不要修改原来的rssjson,改成深拷贝 */
            ...JSON.parse(JSON.stringify(data.rss.channel.item)).map(e => {
              //   console.log(e);
              try {
                /* 如果 e.description是以以文字开头则在外面包上一个div*/
                e.description =
                  $("<div/>")
                    .append(e.description)
                    .text() || e.description;
              } catch (error) {
                // e.description = e.description;
              }

              return e;
            })
            // description: $(data.rss.channel.item.description).text()
          );
          console.log("rsscontent", myrsscontent);

          mui(element).button("reset");
          tanchu弹出消息通用("success");
          //   refreshall();
          //   this.forceUpdate();
          setrssState(myrsscontent);
        });
    }
  }
  useEffect(() => {
    document.title = "React router App-" + "rssreader";

    return () => {
      myrsscontent = rssstate;
    };
  });
  return (
    <div className="">
      <h2>异步fetch加载rss阅读器演示</h2>
      <p>使用fast-xml-parser把xml转换成json</p>
      <nav class="navbar navbar-expand-sm bg-light navbar-light ">
        <ul class="demo">
          <button
            // id={mybuttonids.buttonid1}
            ref={mybuttonidsbuttonid1}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss1();
              jiazaiload(rssxml1, mybuttonidsbuttonid1.current);
            }}
          >
            加载tmtpost
          </button>
          <button
            // id={mybuttonids.buttonid2}
            ref={mybuttonidsbuttonid2}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
            //   onClick={this.jiazairss2}
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss2();
              jiazaiload(rssxml2, mybuttonidsbuttonid2.current);
            }}
          >
            加载iplaysoft
          </button>
          <button
            // id={mybuttonids.buttonid3}
            ref={mybuttonidsbuttonid3}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
            //   onClick={this.jiazairss3}
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss3();
              jiazaiload(rssxml3, mybuttonidsbuttonid3.current);
            }}
          >
            加载landiannews
          </button>
          <button
            // id={mybuttonids.buttonid4}
            ref={mybuttonidsbuttonid4}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
            //   onClick={this.jiazairss4}
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss4();
              jiazaiload(rssxml4, mybuttonidsbuttonid4.current);
            }}
          >
            加载ithome
          </button>
          <button
            // id={mybuttonids.buttonid5}
            ref={mybuttonidsbuttonid5}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-success mui-btn-outlined btn-lg"
            //   onClick={this.jiazairss5}
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss5();
              jiazaiload(rssxml5, mybuttonidsbuttonid5.current);
            }}
          >
            加载ifanr
          </button>
          <button
            // id={mybuttonids.buttonid6}
            ref={mybuttonidsbuttonid6}
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
            //   onClick={this.jiazairss6}
            onClick={() => {
              /* 使用箭头函数可以自动绑定this! */
              //   this.jiazairss6();
              jiazaiload(rssxml6, mybuttonidsbuttonid6.current);
            }}
          >
            加载pingwest
          </button>
        </ul>
      </nav>
      <header className="App-header">
        <div>
          <h3>
            <b>{rssstate.title}</b>
          </h3>
          <p>{rssstate.description}</p>

          <ul class="mui-table-view">
            {// window.myrsscontent.map
            rssstate.map((e, index) => (
              <li
                class="mui-table-view-cell mui-media"
                key={index}
                /* style="width: 100%;" */
                /* 每个项目占一行,防止一行多个项目 */
                style={{ width: " 100%" }}
              >
                <div class="mui-media-body">
                  <b> {e.title}</b>
                  <a href={e.link} target="_blank">
                    <p class="mui-ellipsis">{e.link}</p>
                  </a>
                  <p class="mui-ellipsis">{e.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
function tanchu弹出消息通用(infotype) {
  // var id=Math.random()*100000000|0
  var textinfo;
  switch (infotype) {
    case "success":
      textinfo = "成功";
      break;
    case "primary":
      textinfo = "首选";
      break;
    case "danger":
      textinfo = "失败";
      break;
    case "warning":
      textinfo = "警告";
      break;
    default:
      return;
      break;
  }
  var id = guid();
  jQuery("#my导航栏").append(
    jQuery(`<div id="${id}" class="alert alert-${infotype} alert-dismissible fade show">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>${textinfo}!</strong> 操作${textinfo}提示信息。
  </div>`).fadeTo(5000, 0.5, () => {
      console.log(jQuery("#" + id));
      jQuery("#" + id).remove();
      //   refreshall();
    })
  );
}

// function jiazaiload(myid, eid) {
//   var myselectorid = myid;

function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// export default
// class rssreader extends React.Component {
//   constructor() {
//     super();
//     // this.state = { undefined: "undefined" };
//     // refreshallsetstate = this.forceUpdate;
//   }
//   jiazaiload(xmlurl, eid) {
//     // window.myrsscontent = []
//     myrsscontent = [];
//     console.log(
//       "开始加载外部内容",
//       xmlurl
//       /* $(myselectorid).attr("src") */
//     );
//     if (typeof /* $(myselectorid).attr("src")  */ xmlurl == "undefined") {
//       console.log("加载失败");
//     } else {
//       //使用fetch函数代替$.get
//       //使用fast-xml-parser把xml转换为json
//       // var xmlurl = $(myselectorid).attr("src");
//       fetch(xmlurl)
//         .then(r => {
//           console.log(r.statusText, r);
//           return r.text();
//         })
//         .then(s => {
//           var str = s;
//           myxmlstrcontent.push(str);
//           console.log("xml", myxmlstrcontent);
//           var data = parser.parse(str);
//           console.log("json", data);
//           myrsscontent.title = data.rss.channel.title;
//           myrsscontent.description = data.rss.channel.description;
//           myrsscontent.push(...data.rss.channel.item);
//           console.log("rsscontent", myrsscontent);

//           mui(document.getElementById(eid)).button("reset");
//           tanchu弹出消息通用("success");
//           //   refreshall();
//           this.forceUpdate();
//         });
//     }
//   }
//   /*  constructor() {
//       super()
//       this.buttonid1 = this.buttonid2 =this. buttonid3 =this. buttonid4 = this.buttonid5 =this. buttonid6 = 'undefined';
//     } */
//   // buttonid1=buttonid2=buttonid3=buttonid4=buttonid5=buttonid6=undefined
//   componentWillMount() {
//     mybuttonids.buttonid1 = guid();
//     mybuttonids.buttonid2 = guid();
//     mybuttonids.buttonid3 = guid();
//     mybuttonids.buttonid4 = guid();
//     mybuttonids.buttonid5 = guid();
//     mybuttonids.buttonid6 = guid();
//   }
//   jiazairss1() {
//     // console.log(this.buttonid1);
//     mui(document.getElementById(mybuttonids.buttonid1)).button("loading");
//     // var myselectorid = "#xml1";
//     // jiazaiload(myselectorid, mybuttonids.buttonid1);
//     this.jiazaiload(rssxml1, mybuttonids.buttonid1);
//   }
//   jiazairss2() {
//     mui(document.getElementById(mybuttonids.buttonid2)).button("loading");
//     // var myselectorid = "#xml2";
//     this.jiazaiload(rssxml2, mybuttonids.buttonid2);
//   }
//   jiazairss3() {
//     mui(document.getElementById(mybuttonids.buttonid3)).button("loading");
//     // var myselectorid = "#xml3";
//     this.jiazaiload(rssxml3, mybuttonids.buttonid3);
//   }
//   jiazairss4() {
//     mui(document.getElementById(mybuttonids.buttonid4)).button("loading");
//     // var myselectorid = "#xml4";
//     this.jiazaiload(rssxml4, mybuttonids.buttonid4);
//   }
//   jiazairss5() {
//     mui(document.getElementById(mybuttonids.buttonid5)).button("loading");
//     // var myselectorid = "#xml5";
//     this.jiazaiload(rssxml5, mybuttonids.buttonid5);
//   }
//   jiazairss6() {
//     mui(document.getElementById(mybuttonids.buttonid6)).button("loading");
//     // var myselectorid = "#xml6";
//     this.jiazaiload(rssxml6, mybuttonids.buttonid6);
//   }
//   componentDidMount() {
//     document.title = "React router App-" + "rssreader";
//     // refreshall();
//   }
//   componentWillReceiveProps(newProps) {}
//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {}
//   componentDidUpdate(prevProps, prevState) {}
//   componentWillUnmount() {}
//   render() {
//     return (
//       <div className="App">
//         <h1>异步fetch加载rss阅读器演示</h1>
//         <nav class="navbar navbar-expand-sm bg-light navbar-light ">
//           <ul class="demo">
//             <button
//               id={mybuttonids.buttonid1}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-royal mui-btn-outlined"
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss1();
//               }}
//             >
//               加载tmtpost
//             </button>
//             <button
//               id={mybuttonids.buttonid2}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-primary mui-btn-outlined"
//               //   onClick={this.jiazairss2}
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss2();
//               }}
//             >
//               加载iplaysoft
//             </button>
//             <button
//               id={mybuttonids.buttonid3}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-warning mui-btn-outlined"
//               //   onClick={this.jiazairss3}
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss3();
//               }}
//             >
//               加载landiannews
//             </button>
//             <button
//               id={mybuttonids.buttonid4}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-danger mui-btn-outlined"
//               //   onClick={this.jiazairss4}
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss4();
//               }}
//             >
//               加载ithome
//             </button>
//             <button
//               id={mybuttonids.buttonid5}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-success mui-btn-outlined"
//               //   onClick={this.jiazairss5}
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss5();
//               }}
//             >
//               加载ifanr
//             </button>
//             <button
//               id={mybuttonids.buttonid6}
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-primary mui-btn-outlined"
//               //   onClick={this.jiazairss6}
//               onClick={() => {
//                 /* 使用箭头函数可以自动绑定this! */
//                 this.jiazairss6();
//               }}
//             >
//               加载pingwest
//             </button>
//           </ul>
//         </nav>
//         <header className="App-header">
//           <div>
//             <h3>
//               <b>{myrsscontent.title}</b>
//             </h3>
//             <p>{myrsscontent.description}</p>

//             <ul class="mui-table-view">
//               {// window.myrsscontent.map
//               myrsscontent.map((e, index) => (
//                 <li class="mui-table-view-cell mui-media" key={index}>
//                   <div class="mui-media-body">
//                     <b> {e.title}</b>
//                     <a href={e.link} target="_blank">
//                       <p class="mui-ellipsis">{e.link}</p>
//                     </a>
//                     <p class="mui-ellipsis">{e.description}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
/* function refreshall() {
  //   $("#allnavbar").click();
  refreshallsetstate();
} */
// }
