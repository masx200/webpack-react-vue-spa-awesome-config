import parser from "fast-xml-parser"
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

var React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")

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
    })
  );
}
var myxmlstrcontent = [];
var myrsscontent = [];
function jiazaiload(myid, eid) {
  var myselectorid = myid;
  // window.myrsscontent = []
  myrsscontent = [];
  console.log("开始加载外部内容", $(myselectorid).attr("src"));
  if (typeof $(myselectorid).attr("src") == "undefined") {
    console.log("加载失败");
  } else {
    //使用fetch函数代替$.get
    //使用fast-xml-parser把xml转换为json
    var xmlurl = $(myselectorid).attr("src");
    fetch(xmlurl)
      .then(r => {
        console.log(r.statusText, r);
        return r.text();
      })
      .then(s => {
        var str = s;
        myxmlstrcontent.push(str);
        console.log("xml",myxmlstrcontent);
        var data = parser.parse(str);
        console.log("json",data);
        myrsscontent.title = data.rss.channel.title;
        myrsscontent.description = data.rss.channel.description;
        myrsscontent.push(...data.rss.channel.item);
        console.log("rsscontent",myrsscontent);
        
        mui(document.getElementById(eid)).button("reset");
        tanchu弹出消息通用("success");
        refreshall();
      });

    //   var str = await r.text();

    /*   fetch(xmlurl).then(r => {
        console.log(r.statusText, r);
        // return r.text();

        var str = r.text();
        myxmlstrcontent.push(str);
        console.log(myxmlstrcontent);
        var data = parser.parse(str);
        console.log(data);
        myrsscontent.title = data.rss.channel.title;
        myrsscontent.description = data.rss.channel.description;
        myrsscontent.push(...data.rss.channel.item);
        console.log(myrsscontent);
        refreshall();
      }); */
    //   .then(str => {
    //     myxmlstrcontent.push(str);
    //     console.log(myxmlstrcontent);
    //     return parser.parse(str);
    //   })
    //   .then(data => {
    //     console.log(data);
    //     myrsscontent.title = data.rss.channel.title;
    //     myrsscontent.description = data.rss.channel.description;
    //     myrsscontent.push(...data.rss.channel.item);
    //     console.log(myrsscontent);
    //     refreshall();
    //   });

    // $.get($(myselectorid).attr("src"), function (data, status) {
    //     console.log(status, typeof data, data);
    //     xmlDoc = data;
    //     x = xmlDoc.getElementsByTagName("item");
    //     for (i = 0; i < x.length; i++) {
    //         onetitle = x[i].getElementsByTagName("title")[0].childNodes[0]
    //             .nodeValue;
    //         onelink = x[i].getElementsByTagName("link")[0].childNodes[0]
    //             .nodeValue;
    //         description = "";
    //         for (value of x[i].getElementsByTagName("description")[0]
    //             .childNodes) {
    //             description += value.nodeValue;
    //         }
    //         // window.myrsscontent.push
    //         myrsscontent.push({
    //             title: onetitle,
    //             link: onelink,
    //             description
    //         });
    //     }
    //     console.log(myrsscontent);
    //     // console.log(window.myrsscontent)
    //     refreshall();
    // });
  }
}
function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
var mybuttonids = {};
export default class rssreader extends React.Component {
  /*  constructor() {
      super()
      this.buttonid1 = this.buttonid2 =this. buttonid3 =this. buttonid4 = this.buttonid5 =this. buttonid6 = 'undefined';
    } */
  // buttonid1=buttonid2=buttonid3=buttonid4=buttonid5=buttonid6=undefined
  componentWillMount() {
    mybuttonids.buttonid1 = guid();
    mybuttonids.buttonid2 = guid();
    mybuttonids.buttonid3 = guid();
    mybuttonids.buttonid4 = guid();
    mybuttonids.buttonid5 = guid();
    mybuttonids.buttonid6 = guid();
  }
  jiazairss1() {
    // console.log(this.buttonid1);
    mui(document.getElementById(mybuttonids.buttonid1)).button("loading");
    var myselectorid = "#xml1";
    jiazaiload(myselectorid, mybuttonids.buttonid1);
  }
  jiazairss2() {
    mui(document.getElementById(mybuttonids.buttonid2)).button("loading");
    var myselectorid = "#xml2";
    jiazaiload(myselectorid, mybuttonids.buttonid2);
  }
  jiazairss3() {
    mui(document.getElementById(mybuttonids.buttonid3)).button("loading");
    var myselectorid = "#xml3";
    jiazaiload(myselectorid, mybuttonids.buttonid3);
  }
  jiazairss4() {
    mui(document.getElementById(mybuttonids.buttonid4)).button("loading");
    var myselectorid = "#xml4";
    jiazaiload(myselectorid, mybuttonids.buttonid4);
  }
  jiazairss5() {
    mui(document.getElementById(mybuttonids.buttonid5)).button("loading");
    var myselectorid = "#xml5";
    jiazaiload(myselectorid, mybuttonids.buttonid5);
  }
  jiazairss6() {
    mui(document.getElementById(mybuttonids.buttonid6)).button("loading");
    var myselectorid = "#xml6";
    jiazaiload(myselectorid, mybuttonids.buttonid6);
  }
  componentDidMount() {
    document.title = "React router App-" + "rssreader";
    refreshall();
  }
  componentWillReceiveProps(newProps) {}
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="App">
        <h1>异步fetch加载rss阅读器演示</h1>
        <nav class="navbar navbar-expand-sm bg-light navbar-light ">
          <ul class="demo">
            <button
              id={mybuttonids.buttonid1}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-royal mui-btn-outlined"
              onClick={this.jiazairss1}
            >
              加载tmtpost
            </button>
            <button
              id={mybuttonids.buttonid2}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-primary mui-btn-outlined"
              onClick={this.jiazairss2}
            >
              加载iplaysoft
            </button>
            <button
              id={mybuttonids.buttonid3}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-warning mui-btn-outlined"
              onClick={this.jiazairss3}
            >
              加载landiannews
            </button>
            <button
              id={mybuttonids.buttonid4}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-danger mui-btn-outlined"
              onClick={this.jiazairss4}
            >
              加载ithome
            </button>
            <button
              id={mybuttonids.buttonid5}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-success mui-btn-outlined"
              onClick={this.jiazairss5}
            >
              加载ifanr
            </button>
            <button
              id={mybuttonids.buttonid6}
              data-loading-icon="mui-spinner mui-spinner-custom"
              class="mui-btn mui-btn-primary mui-btn-outlined"
              onClick={this.jiazairss6}
            >
              加载pingwest
            </button>
          </ul>
        </nav>
        <header className="App-header">
          <div>
            <h3>
              <b>{myrsscontent.title}</b>
            </h3>
            <p>{myrsscontent.description}</p>

            <ul class="mui-table-view">
              {// window.myrsscontent.map
              myrsscontent.map(e => (
                <li class="mui-table-view-cell mui-media">
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
}
function refreshall() {
  $("#allnavbar").click();
}
// }