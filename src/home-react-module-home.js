/* import picture1 from "./babeljs.png";

import picture2 from "./parcel.jpg";
import picture3 from "./bootstrap.png";
import picture4 from "./logo-jquery.png";
import picture5 from "./react.svg";
import picture6 from "./vue.png";
import picture7 from "./webpack.svg"; */
// import myindexrender from "./myindexrender";
import React from "react";
import $ from "jquery";
const jQuery = $;
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// function guid() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
//     var r = (Math.random() * 16) | 0,
//       v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }
const location = window.location;
var { useEffect } = React;

export default function() {
  function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
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
      })
    );
  }

  //   const mybuttonidsbuttonid1 = useRef();
  //   const mybuttonidsbuttonid2 = useRef();
  //   const mybuttonidsbuttonid3 = useRef();
  //   const mybuttonidsbuttonid4 = useRef();
  useEffect(() => {
    /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
    location.hash = "#/";
    document.title = "masx200的github主页-" + "首页";
    // console.log(mybuttonidsbuttonid1)
    // myindexrender(
    //   mybuttonidsbuttonid1.current,
    //   mybuttonidsbuttonid2.current,
    //   mybuttonidsbuttonid3.current,
    //   mybuttonidsbuttonid4.current
    // );
  });
  return (
    <div>
      <div class="jumbotron">
        <h1>欢迎登陆页面！</h1>
        <p>
          <b>
            <a target="_blank" href="https://weibo.com/2174458781?">
              一生忽而得一夏当司掌好年华的微博
            </a>
          </b>
        </p>
        <p>
          <b>
            <a target="_blank" href="https://github.com/masx200">
              masx200的github仓库
            </a>
          </b>
        </p>
        <p>
          <b>
            <a target="_blank" href="https://masx200.github.io/ditto/">
              masx200的ditto: 轻量级markdown文档系统阅读器
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              target="_blank"
              href="https://masx200.github.io/javascript-tutorial/"
            >
              javascript教程,基于ditto的markdown阅读器
            </a>
          </b>
        </p>
        <p>
          <b>
            <a target="_blank" href="https://masx200.github.io/es6tutorial/">
              ecmascript6教程,基于ditto的markdown阅读器
            </a>
          </b>
        </p>
      </div>
      <div>
        <button
          class="btn btn-outline-primary btn-lg"
          //   ref={mybuttonidsbuttonid1}
          onClick={() => {
            tanchu弹出消息通用("primary");
          }}
        >
          弹出首选提示框
        </button>
        <button
          class="btn btn-outline-success btn-lg"
          //   ref={mybuttonidsbuttonid2}
          onClick={() => {
            tanchu弹出消息通用("success");
          }}
        >
          弹出成功提示框
        </button>
        <button
          class="btn btn-outline-danger btn-lg"
          //   ref={mybuttonidsbuttonid3}
          onClick={() => {
            tanchu弹出消息通用("danger");
          }}
        >
          弹出失败提示框
        </button>
        <button
          class="btn btn-outline-warning btn-lg"
          //   ref={mybuttonidsbuttonid4}
          onClick={() => {
            tanchu弹出消息通用("warning");
          }}
        >
          弹出警告提示框
        </button>
      </div>
      {/*  <div id="图片列表200">
            <hr />
            <img loading="lazy" src={picture1} />
            <hr />
            <img loading="lazy" src={picture2} />
            <hr />
            <img loading="lazy" src={picture3} />
            <hr />
            <img loading="lazy" src={picture4} />
            <hr />
            <img loading="lazy" src={picture5} />
            <hr />
            <img loading="lazy" src={picture6} />
            <hr />
            <img loading="lazy" src={picture7} />
          </div> */}
      <div
        id="readme"
        class="Box Box--condensed instapaper_body md js-code-block-container"
      >
        <div class="Box-header d-flex flex-items-center flex-justify-between px-2">
          <h3 class="Box-title pr-3">
            <svg
              class="octicon octicon-book"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
              />
            </svg>
            README.md
          </h3>
          <div>
            <a
              href="https://github.com/masx200/masx200.github.io/edit/master/README.md"
              class="Box-btn-octicon btn-octicon float-right"
              aria-label="Edit this file"
            >
              <svg
                class="octicon octicon-pencil"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="Box-body" style={{ padding: " 0px" }}>
          <article
            class="markdown-body entry-content p-5"
            itemprop="text"
            style={{ padding: " 0px" }}
          >
            <h1>
              <a
                id="user-content-masx200githubio"
                class="anchor"
                aria-hidden="true"
                href="#masx200githubio"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              masx200.github.io
            </h1>
            <p>masx200 的 github</p>
            <p>
              <a href="https://masx200.github.io/" rel="nofollow">
                https://masx200.github.io/
              </a>
            </p>
            <h1>
              <a
                id="user-content-查看源代码"
                class="anchor"
                aria-hidden="true"
                href="#查看源代码"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              查看源代码
            </h1>
            <p>
              <a href="https://github.com/masx200/masx200.github.io/tree/master/src">
                https://github.com/masx200/masx200.github.io/tree/master/src
              </a>
            </p>
            <hr />
            <h1>
              <a
                id="user-content-点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新-脚本"
                class="anchor"
                aria-hidden="true"
                href="#点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新-脚本"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新 脚本
            </h1>
            <p>
              <a href="https://github.com/masx200/masx200.github.io/blob/master/src/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.js">
                https://github.com/masx200/masx200.github.io/blob/master/src/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.js
              </a>
            </p>
            <h2>
              <a
                id="user-content-介绍大概和注意"
                class="anchor"
                aria-hidden="true"
                href="#介绍大概和注意"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              介绍大概和注意
            </h2>
            <p>点击链接不跳转修改当前的网页地址动态加载网页内容不刷新</p>
            <p>
              这个脚本能够通过异步 fetch 加载 html 页面,动态替换当前的页面内容
            </p>
            <p>
              注意 不能跨域 ,history.pushState 函数是改变地址栏的 url,有同源限制
            </p>
            <p>
              注意:对于使用了 document.write 的网站,
              加载会出错,因为脚本都是异步加载的,网页内容会被覆盖,所以 修改了
              document.write 方法
            </p>
            <hr />
            <h2>
              <a
                id="user-content-importcjsamdumd"
                class="anchor"
                aria-hidden="true"
                href="#importcjsamdumd"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              IMPORTCJSAMDUMD
            </h2>
            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md">
                https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md
              </a>
            </p>
            <p>
              动态异步加载" commonjs "和 "umd "和 "amd" 模块 ,包装" cjs "和 "amd
              "和 "umd" 模块为异步加载" promise" 方法,使用" fetch
              "方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，
            </p>
            <p>
              并且解决了包之间的依赖关系，如果依赖包当中的 "require"
              函数需要，则在模块仓库中引入需要的模块包
            </p>
            <p>
              定义了模块包的" define "方法，"require "方法，"module.exports
              "对象和 "exports "对象
            </p>
            <p>
              "IMPORTCJSAMDUMD" 的函数功能类似于"systemjs"的 "system.import"
              函数，
            </p>
            <p>
              "IMPORTCJSAMDUMD "的定义的"define"函数基于"requirejs"的
              "define"函数
            </p>
            <h1>
              <a
                id="user-content-相比systemjs和requirejs的优势"
                class="anchor"
                aria-hidden="true"
                href="#相比systemjs和requirejs的优势"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              相比systemjs和requirejs的优势:
            </h1>
            <p>
              1.跟systemjs的import函数的全局运行模块的代码,会修改全局变量,相比,
            </p>
            <p>IMPORTCJSAMDUMD中所有模块的代码全部放在函数闭包中执行,</p>
            <p>
              2.systemjs不支持在模块代码中的require函数来加载依赖包,也不支持识别amd模块中的define函数的定义模块的名称的功能,导致这些有依赖关系的模块都会到全局变量中寻找需要的模块,否则加载失败,
            </p>
            <p>
              IMPORTCJSAMDUMD支持在模块内部使用require函数和define函数定义依赖关系,并在模块仓库中查找需要的模块
            </p>
            <p>
              比如说jquery和jquery-ui都是amd模块定义方式,jquery-ui依赖于jquery
            </p>
            <p>
              比如说bootstrap是umd模块定义方式,bootstrap依赖于jquery和popper.js
            </p>
            <p>3.requriejs不支持cjs和umd模块的定义方式,使用比较麻烦,</p>
            <hr />
            <h1>
              <a
                id="user-content-圆周率计算多线程使用-bigintegerjs-和浏览器原生的-bigint-之后速度得到巨大提升"
                class="anchor"
                aria-hidden="true"
                href="#圆周率计算多线程使用-bigintegerjs-和浏览器原生的-bigint-之后速度得到巨大提升"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              圆周率计算多线程,使用 BigInteger.js 和浏览器原生的 BigInt
              之后速度得到巨大提升!
            </h1>
            <p>
              优化了圆周率计算的多线程方式,开启一次 webworker
              后,不再关闭它,每一个线程一个 webworker,也不重复创建过多
              webweorker,并给按钮添加 mui 的 loading 效果,全局加上 mui 的支持
            </p>
            <p>
              优化了圆周率的界面显示效果,使用 bootstrap4
              的折叠按钮效果,可以收起或展开某些特别占空间的组件
            </p>
            <p>需要浏览器 chrome68 以上,才原生支持 BigInt</p>
            <div>
              <h3>
                <a
                  id="user-content-bigintegerjs"
                  class="anchor"
                  aria-hidden="true"
                  href="#bigintegerjs"
                >
                  <svg
                    class="octicon octicon-link"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>
                </a>
                BigInteger.js
              </h3>
              <p>
                BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。
                <br />
                更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。
                <br />
                此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
                <br />
                建议升级浏览器到chrome68以上,才可支持原生BigInt.
                <br />
                <b>如果浏览器原生支持BigInt,则运行速度有巨大提升!</b>
              </p>
              <p>
                <a
                  href="https://masx200.github.io/%E5%9C%86%E5%91%A8%E7%8E%87%E8%AE%A1%E7%AE%97-%E5%8F%AF%E8%AE%BE%E7%BD%AE%E5%9C%86%E5%91%A8%E7%8E%87%E4%BD%8D%E6%95%B0-%E5%8F%AF%E9%80%89%E6%8B%A9%E7%BA%BF%E7%A8%8B%E4%B8%AA%E6%95%B0-%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%A4%A7%E6%95%B0%E6%A1%86%E6%9E%B6webworker%E8%BE%93%E5%87%BAuseragent%E5%A4%A7%E6%95%B0%E6%A1%86%E6%9E%B6/index.html"
                  rel="nofollow"
                >
                  圆周率计算多线程
                </a>
              </p>
              <h3>
                <a
                  id="user-content-计算运行速度排行"
                  class="anchor"
                  aria-hidden="true"
                  href="#计算运行速度排行"
                >
                  <svg
                    class="octicon octicon-link"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>
                </a>
                计算运行速度排行:
              </h3>
              <br />
              1.原生BigInt最快,
              <br />
              2.BigInteger.js中速,
              <br />
              3.Decimal.js最慢。
              <hr />
              <br />
              <details>
                <summary>测试结果对比</summary>
                <h4>
                  <a
                    id="user-content--线程数为4-圆周率计算6000位测试结果"
                    class="anchor"
                    aria-hidden="true"
                    href="#-线程数为4-圆周率计算6000位测试结果"
                  >
                    <svg
                      class="octicon octicon-link"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      />
                    </svg>
                  </a>
                  线程数为4 圆周率计算6000位测试结果
                </h4>
                <br />
                firefox 66 测试 decimal.js 达到1倍速度
                <br />
                firefox 66 测试 BigInteger.js 达到2.163倍速度
                <br />
                chrome 75 测试 decimal.js 达到3.4375倍速度
                <br />
                chrome 75 测试 原生BigInt 达到74.038倍速度
                <p />
                <hr />
                <h4>
                  <a
                    id="user-content--线程数为4-圆周率计算10000位测试结果"
                    class="anchor"
                    aria-hidden="true"
                    href="#-线程数为4-圆周率计算10000位测试结果"
                  >
                    <svg
                      class="octicon octicon-link"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      />
                    </svg>
                  </a>
                  线程数为4 圆周率计算10000位测试结果
                </h4>
                <br />
                firefox 66 测试 decimal.js 达到1倍速度
                <br />
                firefox 66 测试 BigInteger.js 达到2.066倍速度
                <br />
                chrome 75 测试 decimal.js 达到3.688倍速度
                <br />
                chrome 75 测试 原生BigInt 达到100.773倍速度
                <p />
                <hr />
                <h4>
                  <a
                    id="user-content--线程数为8-圆周率计算10000位测试结果"
                    class="anchor"
                    aria-hidden="true"
                    href="#-线程数为8-圆周率计算10000位测试结果"
                  >
                    <svg
                      class="octicon octicon-link"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      />
                    </svg>
                  </a>
                  线程数为8 圆周率计算10000位测试结果
                </h4>
                <br />
                firefox 66 测试 BigInteger.js 达到1倍速度
                <br />
                chrome 62 测试 BigInteger.js 达到6.688倍速度
                <br />
                chrome 74 测试 原生BigInt 达到49.710倍速度
                <p />
                <hr />
                <h4>
                  <a
                    id="user-content--线程数为8-圆周率计算15000位测试结果"
                    class="anchor"
                    aria-hidden="true"
                    href="#-线程数为8-圆周率计算15000位测试结果"
                  >
                    <svg
                      class="octicon octicon-link"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      />
                    </svg>
                  </a>
                  线程数为8 圆周率计算15000位测试结果
                </h4>
                <br />
                chrome 62 测试 BigInteger.js 达到1倍速度
                <br />
                chrome 74 测试 原生BigInt 达到11.16倍速度
                <p />
              </details>
              <hr />
            </div>
            <hr />
            <h3>
              <a
                id="user-content-使用-babel-standalone-代替本地-node-模块"
                class="anchor"
                aria-hidden="true"
                href="#使用-babel-standalone-代替本地-node-模块"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              使用 babel-standalone 代替本地 node 模块
            </h3>
            <p>使用 babel 在线解析 jsx 语法和 es6 以上的语法</p>
            <p>不使用本地 node 模块,大大减小了生成的文件大小</p>
            <p>Babel · The compiler for next generation JavaScript</p>
            <p>
              <a href="https://babeljs.io/" rel="nofollow">
                https://babeljs.io/
              </a>
            </p>
            <hr />
            <h2>
              <a
                id="user-content-使用-parcel-bundler-代替-webpcak-成功"
                class="anchor"
                aria-hidden="true"
                href="#使用-parcel-bundler-代替-webpcak-成功"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              使用 parcel bundler 代替 webpcak 成功
            </h2>
            <p>避免 webpack 繁琐的配置,快速解决打包问题</p>
            <p>
              <g-emoji
                class="g-emoji"
                alias="package"
                fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e6.png"
              >
                📦
              </g-emoji>
              Parcel 中文文档 | Parcel 中文网
            </p>
            <p>
              <a href="https://www.parceljs.cn/" rel="nofollow">
                https://www.parceljs.cn/
              </a>
            </p>
            <p>
              Parcel 是一个 web 应用打包工具,
              与其他工具的区别在于开发者的使用体验。它利用多核处理器提供了极快的速度,
              并且不需要任何配置。
            </p>
            <p>首先通过 Yarn 或者 npm 安装 Parcel :</p>
            <p>Yarn:</p>
            <p>yarn global add parcel-bundler cssnano</p>
            <p>npm:</p>
            <p>npm install -g parcel-bundler cssnano</p>
            <p>
              Parcel
              内置了一个开发服务器，当文件改变时能够自动重新构建，而且为了实现快速开发，该开发服务器支持模块热替换。只需要在入口文件指出：
            </p>
            <p>parcel index.html</p>
            <p>
              现在在浏览器中打开
              <a href="http://localhost:1234/" rel="nofollow">
                http://localhost:1234/
              </a>
              地址。
            </p>
            <p>
              当需要打包应用程序用于生产环境时，你可以让 Parcel
              在生产模式下打包。
            </p>
            <p>parcel build index.html</p>
            <p>parcel build entry.js</p>
            <hr />
            <h1>
              <a
                id="user-content-使用-cdn-加载依赖包加快速度"
                class="anchor"
                aria-hidden="true"
                href="#使用-cdn-加载依赖包加快速度"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              使用 cdn 加载依赖包,加快速度
            </h1>
            <pre>
              <code>
                {`https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css
               
               https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js
               
               https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js
               
               https://img.cdn.aliyun.dcloud.net.cn/mui/dist/css/mui.min.css
               
               https://img.cdn.aliyun.dcloud.net.cn/mui/dist/js/mui.min.js
               
               https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js
               
               https://cdn.staticfile.org/twitter-bootstrap/3.4.1/css/bootstrap-theme.css
               
               https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css
               
               https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
               
               https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js
               
               https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js
               
               https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js
               
               https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js
               
               https://cdn.staticfile.org/babel-standalone/7.0.0-beta.3/babel.min.js
               
               https://cdn.staticfile.org/vue/2.6.10/vue.min.js
               
               https://cdn.staticfile.org/vue-router/3.0.6/vue-router.min.js
               
               https://cdn.staticfile.org/decimal.js/10.1.1/decimal.min.js`}
              </code>
            </pre>
            <hr />
            <h1>
              <a
                id="user-content-网站结构介绍"
                class="anchor"
                aria-hidden="true"
                href="#网站结构介绍"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              网站结构介绍
            </h1>
            <h2>
              <a
                id="user-content-首页"
                class="anchor"
                aria-hidden="true"
                href="#首页"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              首页
            </h2>
            <p>在图片中添加 loading="lazy"实现图片懒加载</p>
            <p>css中使用@import实现全部模块化</p>
            <p>js中使用import实现全部模块化</p>
            <p>按钮弹出式 Bootstrap4 信息提示框测试</p>
            <h2>
              <a
                id="user-content-花密网页版"
                class="anchor"
                aria-hidden="true"
                href="#花密网页版"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              花密网页版
            </h2>
            <p>
              <a
                href="https://masx200.github.io/%E8%8A%B1%E5%AF%86%E7%BD%91%E9%A1%B5%E7%89%88-%E5%AE%8C%E5%96%84%E4%BF%AE%E6%94%B9%E7%89%88-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html"
                rel="nofollow"
              >
                https://masx200.github.io/%E8%8A%B1%E5%AF%86%E7%BD%91%E9%A1%B5%E7%89%88-%E5%AE%8C%E5%96%84%E4%BF%AE%E6%94%B9%E7%89%88-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html
              </a>
            </p>
            <h2>
              <a
                id="user-content-包含-vue-router-和-react-router-的单页面应用测试"
                class="anchor"
                aria-hidden="true"
                href="#包含-vue-router-和-react-router-的单页面应用测试"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              包含 vue-router 和 react-router 的单页面应用测试
            </h2>
            <p>
              <a
                href="https://masx200.github.io/my-vue-router-project/"
                rel="nofollow"
              >
                https://masx200.github.io/my-vue-router-project/
              </a>
            </p>
            <p>
              <a
                href="https://masx200.github.io/my-react-router-test/"
                rel="nofollow"
              >
                https://masx200.github.io/my-react-router-test/
              </a>
            </p>
            <h2>
              <a
                id="user-content-importcjsamdumd-1"
                class="anchor"
                aria-hidden="true"
                href="#importcjsamdumd-1"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              IMPORTCJSAMDUMD
            </h2>
            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md">
                https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md
              </a>
            </p>
            <p>
              Dynamically asynchronously load commonjs and umd and amd modules,
              wrap cjs and amd and umd modules to load the promise method
              asynchronously, use the fetch method to get the specified module
              package source code, and put the module into the module
              repository.
            </p>
            <p>
              And solve the dependencies between the packages, if the "require"
              function in the dependent package needs, then introduce the
              required module package in the module repository
            </p>
            <p>
              Defines the "define" method of the module package, the "require"
              method, the "module.exports" object, and the "exports" object
            </p>
            <p>
              The function of IMPORTCJSAMDUMD is similar to the "system.import"
              function of "systemjs".
            </p>
            <p>
              The "define" function defined by IMPORTCJSAMDUMD is based on the
              "define" function of requirejs.
            </p>
            <hr />
            <h2>
              <a
                id="user-content-react-router-的单页面应用"
                class="anchor"
                aria-hidden="true"
                href="#react-router-的单页面应用"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              react-router 的单页面应用
            </h2>
            <p>异步动态加载UMD的依赖包方法</p>
            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md">
                https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md
              </a>
            </p>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `
                                        <span class="pl-k">import</span> <span class="pl-smi">IMPORTCJSAMDUMD</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>../IMPORTCJSAMDUMD<span class="pl-pds">"</span></span>;
                                        (<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
                                                  <span class="pl-k">const</span> <span class="pl-c1">react</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">IMPORTCJSAMDUMD</span>(
                                                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,
                                                    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>
                                                  );
                                                  <span class="pl-k">const</span> [<span class="pl-c1">reactdom</span>, <span class="pl-c1">reactrouterdom</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
                                                    <span class="pl-en">IMPORTCJSAMDUMD</span>(
                                                      <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js<span class="pl-pds">"</span></span>,
                                                      <span class="pl-s"><span class="pl-pds">"</span>react-dom<span class="pl-pds">"</span></span>
                                                    ),
                                                    <span class="pl-en">IMPORTCJSAMDUMD</span>(
                                                      <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js<span class="pl-pds">"</span></span>,
                                                      <span class="pl-s"><span class="pl-pds">"</span>react-router-dom<span class="pl-pds">"</span></span>
                                                    )
                                                  ]);
                                                  
                                                  <span class="pl-k">var</span> reactmodulearray <span class="pl-k">=</span> [react, reactdom, reactrouterdom];
                                                  <span class="pl-en">myonloadfunc</span>(reactmodulearray);
                                                  })();
                                        <span class="pl-k">function</span> <span class="pl-en">myonloadfunc</span>(<span class="pl-smi">reactmodulearray</span>) {
                                            
                                              <span class="pl-en">console</span>.<span class="pl-c1">log</span>(reactmodulearray);
                                              <span class="pl-k">const</span> <span class="pl-c1">React</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">0</span>].<span class="pl-smi">default</span>;
                                              <span class="pl-k">const</span> <span class="pl-c1">ReactDOM</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">1</span>].<span class="pl-smi">default</span>;
                                              <span class="pl-k">const</span> <span class="pl-c1">ReactRouterDOM</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">2</span>].<span class="pl-smi">default</span>;
                                              <span class="pl-c"><span class="pl-c">//</span>............................</span>
                                              
                                              }
                             `
                  }}
                />
              </pre>
            </div>
            <p>按需异步动态加载组件方法</p>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: ` <span class="pl-k">const</span> { <span class="pl-c1">Link</span>, <span class="pl-c1">Switch</span>, <span class="pl-c1">BrowserRouter</span>, <span class="pl-c1">Route</span>, <span class="pl-c1">Redirect</span> } <span class="pl-k">=</span> ReactRouterDOM;
               <span class="pl-k">const</span> { <span class="pl-c1">Suspense</span>, <span class="pl-c1">lazy</span> } <span class="pl-k">=</span> React;
               <span class="pl-k">const</span> <span class="pl-c1">home</span> <span class="pl-k">=</span> <span class="pl-en">lazy</span>(() <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./module-home<span class="pl-pds">"</span></span>));
               <span class="pl-k">const</span> <span class="pl-c1">rssreader</span> <span class="pl-k">=</span> <span class="pl-en">lazy</span>(() <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./module-rssreader<span class="pl-pds">"</span></span>));
               <span class="pl-k">const</span> <span class="pl-c1">about</span> <span class="pl-k">=</span> <span class="pl-en">lazy</span>(() <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./module-about<span class="pl-pds">"</span></span>));
               
               <span class="pl-k">&lt;</span>BrowserRouter
                 basename<span class="pl-k">=</span>{<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">pathname</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>#/<span class="pl-pds">"</span></span>}
                 forceRefresh<span class="pl-k">=</span>{<span class="pl-c1">false</span>}
                 keyLength<span class="pl-k">=</span>{<span class="pl-c1">12</span>}
               <span class="pl-k">&gt;</span>
                 <span class="pl-k">&lt;</span>Suspense fallback<span class="pl-k">=</span>{<span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span>loading<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>}<span class="pl-k">&gt;</span>
                   <span class="pl-k">&lt;</span>Switch<span class="pl-k">&gt;</span>
                     <span class="pl-k">&lt;</span>Route exact path<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> component<span class="pl-k">=</span>{home} <span class="pl-k">/</span><span class="pl-k">&gt;</span>
                     <span class="pl-k">&lt;</span>Route path<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/rssreader<span class="pl-pds">"</span></span> component<span class="pl-k">=</span>{rssreader} <span class="pl-k">/</span><span class="pl-k">&gt;</span>
                     <span class="pl-k">&lt;</span>Route path<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span> component<span class="pl-k">=</span>{about} <span class="pl-k">/</span><span class="pl-k">&gt;</span>
                     <span class="pl-k">&lt;</span>Redirect from<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>*<span class="pl-pds">"</span></span> to<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span>
                   <span class="pl-k">&lt;</span><span class="pl-k">/</span>Switch<span class="pl-k">&gt;</span>
                 <span class="pl-k">&lt;</span><span class="pl-k">/</span>Suspense<span class="pl-k">&gt;</span>
               <span class="pl-k">&lt;</span><span class="pl-k">/</span>BrowserRouter<span class="pl-k">&gt;</span>;
               
               `
                  }}
                />
              </pre>
            </div>
            <p>
              新版:按照路由组件分包加载,不使用本地 node
              模块,大大减小了生成的文件大小,依赖包从cdn加载
            </p>
            <p>
              新版:升级到 bootsrtap4 的导航栏和使用 fetch 的 rss
              阅读器演示的消息成功加载通知框效果
            </p>
            <p>
              旧版:把 react 相关所有代码都合并放在 index.jsx 文件中,除了 css
              文件
            </p>
            <hr />
            <h2>
              <a
                id="user-content-vue-router-的单页面应用"
                class="anchor"
                aria-hidden="true"
                href="#vue-router-的单页面应用"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              vue-router 的单页面应用
            </h2>
            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md">
                https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md
              </a>
            </p>
            <p>异步动态加载es6模块的依赖包方法</p>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `
                              
                              <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
                                  <span class="pl-k">import</span>(
                                    <span class="pl-s"><span class="pl-pds">\`</span>https://cdn.staticfile.org/vue-router/3.0.6/vue-router.esm.browser.min.js<span class="pl-pds">\`</span></span>
                                  ),
                                  <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">\`</span>https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js<span class="pl-pds">\`</span></span>)
                                ]).<span class="pl-c1">then</span>(myonloadfunc);
                        
                        <span class="pl-k">function</span> <span class="pl-en">myonloadfunc</span>(<span class="pl-smi">modulearray</span>) {
                                <span class="pl-en">console</span>.<span class="pl-c1">log</span>(modulearray)
                          <span class="pl-k">var</span>    VueRouter <span class="pl-k">=</span> modulearray[<span class="pl-c1">0</span>].<span class="pl-smi">default</span>;
                           <span class="pl-k">var</span>   Vue <span class="pl-k">=</span> modulearray[<span class="pl-c1">1</span>].<span class="pl-smi">default</span>;
                        <span class="pl-c"><span class="pl-c">//</span>.................................</span>
                        }
                        
                           `
                  }}
                />
              </pre>
            </div>
            <p>按需异步动态加载组件方法</p>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `         <span class="pl-k">const</span> <span class="pl-c1">about</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./vue-component-about<span class="pl-pds">"</span></span>);
               <span class="pl-k">const</span> <span class="pl-c1">home</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./vue-component-home<span class="pl-pds">"</span></span>);
               <span class="pl-k">const</span> <span class="pl-c1">huami</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>./vue-component-huami<span class="pl-pds">"</span></span>);
               <span class="pl-k">const</span> <span class="pl-c1">router</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">VueRouter</span>({
                 routes<span class="pl-k">:</span> [
                   {
                     path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>/about<span class="pl-pds">"</span></span>,
                     name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>about<span class="pl-pds">"</span></span>,
               
                     component<span class="pl-k">:</span> about
                   },
                   {
                     path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span>,
                     name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>home<span class="pl-pds">"</span></span>,
                     component<span class="pl-k">:</span> home
                   },
                   {
                     path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>/huami<span class="pl-pds">"</span></span>,
                     name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>huami<span class="pl-pds">"</span></span>,
                     component<span class="pl-k">:</span> huami
                   },
                   {
                     path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>*<span class="pl-pds">"</span></span>,
                     redirect<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span>
                   }
                 ]
               });
               `
                  }}
                />
              </pre>
            </div>
            <p>
              新版:按照路由组件分包加载,不使用本地 node
              模块,大大减小了生成的文件大小,依赖包从cdn加载
            </p>
            <p>旧版:vue 把所有组件全部放在 index.jsx 中,除了 css 文件</p>
            <p>
              旧版:不使用.vue 格式的文件,把 vue 相关的所有 vue
              组件都合并放在一个 index.js 文件中,把 template 组件放在
              template.html 文件中通过 ajax 加载,除了 css 文件
            </p>
            <hr />
            <h2>
              <a
                id="user-content-jsfuck-and-hieroglyphy-decoder-and-encoder"
                class="anchor"
                aria-hidden="true"
                href="#jsfuck-and-hieroglyphy-decoder-and-encoder"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              JSfuck-and-hieroglyphy-Decoder-and-ENCODER
            </h2>
            <p>JSfuck and hieroglyphy Decoder and ENCODER</p>
            <p>
              JSFuck 是一种基于 JavaScript
              原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码
            </p>
            <p>
              hieroglyphy 是一个工具和 javascript
              库，用于将字符串，数字和脚本转换为
              的等效序列！在浏览器中运行的字符
            </p>
            <code>()+[]!</code>和<code>()[]{}+!</code>
            <p>
              在 JSfuck and hieroglyphy ENCODER 中使用
              service-worker,避免编码时的网页卡顿,也解决了 web-worker
              中加载依赖包的问题,速度提升
            </p>
            <p>
              在编码完成后,输出到文本框里面的内容过长,消耗的时间比较长,这段时间网页处于卡顿状态,使用
              requestAnimationFrame 的方法,在网页卡顿结束后,弹出成功消息通知框
            </p>
            <p>
              <a
                href="https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html"
                rel="nofollow"
              >
                https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html
              </a>
            </p>
            <p>
              <a
                href="https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy-encoder.html"
                rel="nofollow"
              >
                https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy-encoder.html
              </a>
            </p>
            <p>
              <a
                href="https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSFuck---Write-any-JavaScript-with-6-Characters_-%5B%5D()!+.html"
                rel="nofollow"
              >
                https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSFuck---Write-any-JavaScript-with-6-Characters_-[]()!+.html
              </a>
            </p>
            <hr />
            <h1>
              <a
                id="user-content-动态加载javascript使用fetch加载xml转换成jsonjs"
                class="anchor"
                aria-hidden="true"
                href="#动态加载javascript使用fetch加载xml转换成jsonjs"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              动态加载javascript,使用fetch加载xml转换成json.js
            </h1>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `             <span class="pl-k">function</span> <span class="pl-en">loadscript</span>(<span class="pl-smi">fileurl</span>,<span class="pl-smi">callback</span>) {
                          <span class="pl-k">var</span> script <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>script<span class="pl-pds">"</span></span>);
                          <span class="pl-smi">script</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span>;
                          <span class="pl-smi">script</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> fileurl;
                          <span class="pl-smi">script</span>.<span class="pl-smi">onload</span><span class="pl-k">=</span>callback
                          <span class="pl-c1">document</span>.<span class="pl-smi">firstElementChild</span>.<span class="pl-smi">firstElementChild</span>.<span class="pl-c1">appendChild</span>(script);
                          
                          <span class="pl-en">console</span>.<span class="pl-c1">log</span>({script})
                      }
                      <span class="pl-en">loadscript</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/fast-xml-parser/3.12.16/parser.min.js<span class="pl-pds">"</span></span>);
                      
                      <span class="pl-en">fetch</span>(<span class="pl-s"><span class="pl-pds">"</span>https://www.pingwest.com/feed<span class="pl-pds">"</span></span>)
                        .<span class="pl-c1">then</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> (<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">r</span>.<span class="pl-c1">statusText</span>, r), <span class="pl-smi">r</span>.<span class="pl-c1">text</span>()))
                        .<span class="pl-c1">then</span>(<span class="pl-smi">str</span> <span class="pl-k">=&gt;</span> <span class="pl-k">new</span> <span class="pl-en">DOMParser</span>().<span class="pl-en">parseFromString</span>(str, <span class="pl-s"><span class="pl-pds">"</span>text/xml<span class="pl-pds">"</span></span>))
                        .<span class="pl-c1">then</span>(<span class="pl-smi">data</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(data));
                      
                      <span class="pl-en">fetch</span>(<span class="pl-s"><span class="pl-pds">"</span>https://www.pingwest.com/feed<span class="pl-pds">"</span></span>)
                        .<span class="pl-c1">then</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> (<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">r</span>.<span class="pl-c1">statusText</span>, r), <span class="pl-smi">r</span>.<span class="pl-c1">text</span>()))
                        .<span class="pl-c1">then</span>(<span class="pl-smi">str</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">parser</span>.<span class="pl-c1">parse</span>(str))
                        .<span class="pl-c1">then</span>(<span class="pl-smi">data</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(data));`
                  }}
                />
              </pre>
            </div>
            <h1>
              <a
                id="user-content-另一种加载外部javascript的方法"
                class="anchor"
                aria-hidden="true"
                href="#另一种加载外部javascript的方法"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              另一种加载外部JavaScript的方法
            </h1>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `            
                              <span class="pl-k">if</span> (<span class="pl-k">!</span>importScripts) {
                           <span class="pl-k">var</span> importScripts <span class="pl-k">=</span> (<span class="pl-k">function</span>(<span class="pl-smi">globalEval</span>) {
                               <span class="pl-k">var</span> xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();
                               <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-en">importScripts</span>() {
                                   <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>),
                                       len <span class="pl-k">=</span> <span class="pl-smi">args</span>.<span class="pl-c1">length</span>,
                                       i <span class="pl-k">=</span> <span class="pl-c1">0</span>,
                                       meta,
                                       data,
                                       content;
                                   <span class="pl-k">for</span> (; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {
                                       <span class="pl-k">if</span> (args[i].<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">5</span>).<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">"</span>data:<span class="pl-pds">"</span></span>) {
                                           data <span class="pl-k">=</span> args[i];
                                           content <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">"</span>,<span class="pl-pds">"</span></span>);
                                           meta <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">5</span>, content).<span class="pl-c1">toLowerCase</span>();
                                           data <span class="pl-k">=</span> <span class="pl-c1">decodeURIComponent</span>(<span class="pl-smi">data</span>.<span class="pl-c1">substr</span>(content <span class="pl-k">+</span> <span class="pl-c1">1</span>));
                                           <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>;<span class="pl-c1">\s</span><span class="pl-k">*</span>base64<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">[;,]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(meta)) {
                                               data <span class="pl-k">=</span> <span class="pl-en">atob</span>(data);
                                           }
                                           <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>;<span class="pl-c1">\s</span><span class="pl-k">*</span>charset=<span class="pl-c1">[uU][tT][fF]</span>-<span class="pl-k">?</span>8<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-c1">[;,]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(meta)) {
                                               data <span class="pl-k">=</span> <span class="pl-c1">decodeURIComponent</span>(<span class="pl-c1">escape</span>(data));
                                           }
                                       } <span class="pl-k">else</span> {
                                           <span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">"</span>GET<span class="pl-pds">"</span></span>, args[i], <span class="pl-c1">false</span>);
                                           <span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>(<span class="pl-c1">null</span>);
                                           data <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">responseText</span>;
                                       }
                                       <span class="pl-en">globalEval</span>(data);
                                   }
                               };
                           })(eval);
                       }
               
                       <span class="pl-en">importScripts</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js<span class="pl-pds">"</span></span>)
  
  `
                  }}
                />
              </pre>
            </div>
            <hr />
            <h1>
              <a
                id="user-content-在vscode中安装npm-scripts插件即可轻松调试"
                class="anchor"
                aria-hidden="true"
                href="#在vscode中安装npm-scripts插件即可轻松调试"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              在vscode中安装npm-scripts插件即可轻松调试
            </h1>
            <p>npm start</p>
            <p>npm run build</p>
            <h1>
              <a
                id="user-content-推荐的vscode插件"
                class="anchor"
                aria-hidden="true"
                href="#推荐的vscode插件"
              >
                <svg
                  class="octicon octicon-link"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              推荐的vscode插件
            </h1>
            <p>
              名称: Beautify id: hookyqr.beautify 说明: Beautify code in place
              for VS Code 版本: 1.5.0 发布者: HookyQR VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
              </a>
            </p>
            <p>
              名称: Bracket Pair Colorizer 2 id:
              coenraads.bracket-pair-colorizer-2 说明: A customizable extension
              for colorizing matching brackets 版本: 0.0.28 发布者: CoenraadS VS
              Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
              </a>
            </p>
            <p>
              名称: Chinese (Simplified) Language Pack for Visual Studio Code
              id: ms-ceintl.vscode-language-pack-zh-hans 说明: Language pack
              extension for Chinese (Simplified) 版本: 1.33.2 发布者: Microsoft
              VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans
              </a>
            </p>
            <p>
              名称: ES7 React/Redux/GraphQL/React-Native snippets id:
              dsznajder.es7-react-js-snippets 说明: Simple extensions for React,
              Redux and Graphql in JS/TS with ES7 syntax 版本: 2.2.2 发布者:
              dsznajder VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
              </a>
            </p>
            <p>
              名称: Minify id: hookyqr.minify 说明: Minify for VS Code. Minify
              with command, and (optionally) re-minify on save. 版本: 0.4.3
              发布者: HookyQR VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=HookyQR.minify"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=HookyQR.minify
              </a>
            </p>
            <p>
              名称: NPM-Scripts id: trabpukcip.vscode-npm-scripts 说明: View and
              run NPM scripts in the sidebar. 版本: 0.2.1 发布者: traBpUkciP VS
              Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts
              </a>
            </p>
            <p>
              名称: PowerShell id: ms-vscode.powershell 说明: Develop PowerShell
              scripts in Visual Studio Code! 版本: 1.12.1 发布者: Microsoft VS
              Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell
              </a>
            </p>
            <p>
              名称: Prettier - Code formatter id: esbenp.prettier-vscode 说明:
              VS Code plugin for prettier/prettier 版本: 1.9.0 发布者: Esben
              Petersen VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
              </a>
            </p>
            <p>
              名称: Vetur id: octref.vetur 说明: Vue tooling for VS Code 版本:
              0.20.0 发布者: Pine Wu VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=octref.vetur
              </a>
            </p>
            <p>
              名称: vscode-icons id: vscode-icons-team.vscode-icons 说明: Icons
              for Visual Studio Code 版本: 8.6.0 发布者: VSCode Icons Team VS
              Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
              </a>
            </p>
            <p>
              名称: XML Tools id: dotjoshjohnson.xml 说明: XML Formatting,
              XQuery, and XPath Tools for Visual Studio Code 版本: 2.4.0 发布者:
              Josh Johnson VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml
              </a>
            </p>
            <p>
              名称: Vue VSCode Snippets id: sdras.vue-vscode-snippets 说明:
              Snippets that will supercharge your Vue workflow 版本: 1.6.0
              发布者: sarah.drasner VS Marketplace 链接:
              <a
                href="https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets"
                rel="nofollow"
              >
                https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
              </a>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
