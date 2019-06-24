"use strict";
// import { async } from "q";
// import regeneratorRuntime from "regenerator-runtime";

// eslint-disable-next-line
/* eslint-disable */
// import React from 'react';
//在react的jsx文件中这句话能删除!
// import "parcel-bundler/src/builtins/bundle-url.js"
import IMPORTCJSAMDUMD from "./IMPORTCJSAMDUMD";
(() => {
  // console.log(regeneratorRuntime)
  $(window).one("load", () => {
    function onhashchange() {
      // refreshall();
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
    }
    $(window).on("hashchange", onhashchange);
    var haverun = 0;
    herewindowonload();
    function herewindowonload() {
      if (haverun == 0) {
        haverun = 1;
        console.log("开始运行此onload函数");
        // myonloadfunc();
        // IMPORTCJSAMDUMD(
        //     "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
        //     "react"
        //   ).then(

        //     reactmodule=>{

        //     }
        //   )
        // Promise.all([

        //   IMPORTCJSAMDUMD(
        //     "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
        //     "react-dom"
        //   ),
        //   IMPORTCJSAMDUMD(
        //     "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
        //     "react-router-dom"
        //   )
        // ]).then(myonloadfunc);

        /* react模块加载有依赖顺序 */

        /*   (async () => {
          const react = await IMPORTCJSAMDUMD(
            "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
            "react"
          );
          const [reactdom, reactrouterdom] = await Promise.all([
            IMPORTCJSAMDUMD(
              "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
              "react-dom"
            ),
            IMPORTCJSAMDUMD(
              "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
              "react-router-dom"
            )
          ]);
          //   resolve([])
          // console.log(jquery, popper, bootstrap);
          var reactmodulearray = [react, reactdom, reactrouterdom];
          myonloadfunc(reactmodulearray);
        })(); */
        /*  IMPORTCJSAMDUMD已经升级,乱序依赖的模块可以自动加载了 */
        IMPORTCJSAMDUMD(
          [
            "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
            "react"
          ],
          [
            "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
            "react-dom"
          ],
          [
            "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
            "react-router-dom"
          ]
        ).then(myonloadfunc);
      } else {
        console.log("不要重复运行此onload函数");
      }
    }
    // $(window).one(herewindowonload);
    /* 不要写两次window onload */
    // var xmlDoc, x, onetitle, onelink, description;

    //   setTimeout(() => {
    //     herewindowonload();
    //   }, 1000);

    function myonloadfunc(reactmodulearray) {
      //   window.React = IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
      console.log(reactmodulearray);
      const React = reactmodulearray[0].default;
      const ReactDOM = reactmodulearray[1].default;
      const ReactRouterDOM = reactmodulearray[2].default;
      const render = ReactDOM.render;
      const { Link, Switch, BrowserRouter, Route, Redirect } = ReactRouterDOM;
      const { Suspense, lazy } = React;
      const home = lazy(() => import("./react-module-home.js"));
      const rssreader = lazy(() => import("./react-module-rssreader.js"));
      const about = lazy(() => import("./react-module-about.js"));
      // hashchangehandler();
      var lasthash;
      /* var about = (app = rssreader = "undefined");
    var allcomponent = {
      about,
      app,
      rssreader
    }; */
      // var about, App, rssreader;
      $(window).on("hashchange", hashchangehandler);
      function hashchangehandler() {
        if (lasthash === window.location.hash) {
          console.log("hash不改变");
          return;
        }
        lasthash = window.location.hash;
        console.log("hash", window.location.hash);
        // if ("" == window.location.hash) {
        //   window.location.hash = "#/";
        //   return;
        // }

        /*  try {
        异步按需加载外部组件("#/", import("./module-app.js"), "app");
        异步按需加载外部组件("#/about", import("./module-about.js"), "about");
        异步按需加载外部组件(
            "#/rssreader",
            import("./module-rssreader.js"),
            "rssreader"
          );
      } catch (e) {
        console.error(e);
      } */
        /* 
      try {
        异步按需加载外部组件("#/about", import("./module-about.js"), "about");
      } catch (e) {
        console.error(e);
      }
      try {
        异步按需加载外部组件(
          "#/rssreader",
          import("./module-rssreader.js"),
          "rssreader"
        );
      } catch (e) {
        console.error(e);
      } */
        //   } catch (e) {
        //     console.warn(e);
        //     try {
        //         $("#allnavbar").click();
        //     } catch (e) {
        //       console.warn(e);
        //     }
        //   }

        //   refreshall();
        //   console.log("about", about);
        //   console.log("app", App);
        //   console.log("rssreader", rssreader);
        /*   if ("#/about" == window.location.hash) {
        if (undefined === about) {
          console.log("加载外部组件about");
          //   console.log(require("./module-about.js"))
          //   about =require("./module-about.js").default
          //   console.log("about", about);

          import("./module-about").then(m => {
            about = m.default;
            console.log("about", about);
            refreshall();
          });
        }
      } */

        /*  function 异步按需加载外部组件(hash, lazypromise, name) {
        // console.log(hash, lazypromise, name);
        if (hash == window.location.hash) {
          if ("undefined" === allcomponent[name]) {
            console.log("加载外部组件" + name);
            //   console.log(require("./module-about.js"))
            //   about =require("./module-about.js").default
            //   console.log("about", about);

            lazypromise.then(m => {
              var componentname = (allcomponent[name] = m.default);
              console.log(name, componentname);
              refreshall();
            });
          } else {
            lazypromise = null;
            // console.log(hash, lazypromise, name);
          }
        } else {
          lazypromise = null;
          //   console.log(hash, lazypromise, name);
        }
        // console.log(hash, lazypromise, name);
      } */
      }
      //   refreshall();
      /* import("./module-about").then(m => {
            about = m.default;
            console.log("about", about);

            refreshall();
          });
        }
      }

      if ("#/" == window.location.hash) {
        if (undefined === App) {
          console.log("加载外部组件App");
          import("./module-app").then(m => {
            App = m.default;
            console.log("app", App);

            refreshall();
          });
        }
      }

    //   if ("#/rssreader" == window.location.hash) {
    //     if (undefined === rssreader) {
    //       console.log("加载外部组件rssreader");
    //       import("./module-rssreader").then(m => {
    //         rssreader = m.default;
    //         console.log("rssreader", rssreader);

    //         refreshall();
    //       });
    //     }
    //   } */
      // }
      /*  function jiazaiload(myid, eid) {
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
            console.log(myxmlstrcontent);
            var data = parser.parse(str);
            console.log(data);
            myrsscontent.title = data.rss.channel.title;
            myrsscontent.description = data.rss.channel.description;
            myrsscontent.push(...data.rss.channel.item);
            console.log(myrsscontent);
            refreshall();
            mui(document.getElementById(eid)).button("reset");
            tanchu弹出消息通用("success");
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
      //   }
      // } */
      // var mybuttonids = {};
      function guid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
          c
        ) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      }
      /* function tanchu弹出消息通用(infotype) {
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
    } */
      // window.myrsscontent = []
      // let myrsscontent = [];
      // var myxmlstrcontent = [];
      // const { render } = ReactDOM;

      //   let  hcreate = React.createElement

      /* class App extends React.Component {
      componentWillMount() {}
      componentDidMount() {
        window.location.hash = "#/";
        refreshall();
        document.title = "React router App-" + "home";
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
            <header className="">
              <div class="container">
                <div class="jumbotron">
                  <h1>欢迎登陆页面！</h1>
                  <p>
                    <a target="_blank" href="https://weibo.com/2174458781?">
                      一生忽而得一夏当司掌好年华的微博
                    </a>
                  </p>
                  <p>
                    <a target="_blank" href="https://github.com/masx200">
                      masx200的github仓库
                    </a>
                  </p>
                </div>
              </div>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                >
                  入门教程: 认识 React – React
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/getting-started.html"
                >
                  开始 – React文档
                </a>
              </p>
              <h1>react-router测试</h1>
              <h1>Hello, world!</h1>
              <h2>欢迎来到主页</h2>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <p className="App-intro">
                你可以在 <code>src/App.js</code> 文件中修改。
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <h1>Hello, world!</h1>
              <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
            </header>
          </div>
        );
      }
    } */
      //    var about = function() {
      //       return import("./module-about");
      //     // };
      /*   class about extends React.Component {
      componentWillMount() {}
      componentDidMount() {
        refreshall();
        document.title = "React router App-" + "about";
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
            <header className="App-header">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                className="App-logo"
                alt="logo"
              />
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                >
                  入门教程: 认识 React – React
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/getting-started.html"
                >
                  开始 – React文档
                </a>
              </p>
              <h1>react-router测试</h1>
              <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
              <h3>
                React 是一个用于构建用户界面的 JAVASCRIPT 库。
                <br />
                React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
                <br />
                React 起源于 Facebook 的内部项目，用来架设 Instagram
                的网站，并于 2013 年 5 月开源。
                <br />
                React
                拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
                <br />
                React 特点
                <br />
                1.声明式设计 −React采用声明范式，可以轻松描述应用。
                <br />
                2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
                <br />
                3.灵活 −React可以与已知的库或框架很好地配合。
                <br />
                4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX
                ，但我们建议使用它。
                <br />
                5.组件 − 通过 React
                构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
                <br />
                6.单向响应的数据流 − React
                实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
              </h3>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            </header>
          </div>
        );
      }
    } */
      // class rssreader extends React.Component {
      // //   /*  constructor() {
      // //     super()
      // //     this.buttonid1 = this.buttonid2 =this. buttonid3 =this. buttonid4 = this.buttonid5 =this. buttonid6 = 'undefined';
      // //   } */
      // //   // buttonid1=buttonid2=buttonid3=buttonid4=buttonid5=buttonid6=undefined
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
      //     var myselectorid = "#xml1";
      //     jiazaiload(myselectorid, mybuttonids.buttonid1);
      //   }
      //   jiazairss2() {
      //     mui(document.getElementById(mybuttonids.buttonid2)).button("loading");
      //     var myselectorid = "#xml2";
      //     jiazaiload(myselectorid, mybuttonids.buttonid2);
      //   }
      //   jiazairss3() {
      //     mui(document.getElementById(mybuttonids.buttonid3)).button("loading");
      //     var myselectorid = "#xml3";
      //     jiazaiload(myselectorid, mybuttonids.buttonid3);
      //   }
      //   jiazairss4() {
      //     mui(document.getElementById(mybuttonids.buttonid4)).button("loading");
      //     var myselectorid = "#xml4";
      //     jiazaiload(myselectorid, mybuttonids.buttonid4);
      //   }
      //   jiazairss5() {
      //     mui(document.getElementById(mybuttonids.buttonid5)).button("loading");
      //     var myselectorid = "#xml5";
      //     jiazaiload(myselectorid, mybuttonids.buttonid5);
      //   }
      //   jiazairss6() {
      //     mui(document.getElementById(mybuttonids.buttonid6)).button("loading");
      //     var myselectorid = "#xml6";
      //     jiazaiload(myselectorid, mybuttonids.buttonid6);
      //   }
      //   componentDidMount() {
      //     document.title = "React router App-" + "rssreader";
      //     refreshall();
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
      //               onClick={this.jiazairss1}
      //             >
      //               加载tmtpost
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid2}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-primary mui-btn-outlined"
      //               onClick={this.jiazairss2}
      //             >
      //               加载iplaysoft
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid3}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-warning mui-btn-outlined"
      //               onClick={this.jiazairss3}
      //             >
      //               加载landiannews
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid4}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-danger mui-btn-outlined"
      //               onClick={this.jiazairss4}
      //             >
      //               加载ithome
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid5}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-success mui-btn-outlined"
      //               onClick={this.jiazairss5}
      //             >
      //               加载ifanr
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid6}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-primary mui-btn-outlined"
      //               onClick={this.jiazairss6}
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
      //               myrsscontent.map(e => (
      //                 <li class="mui-table-view-cell mui-media">
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

      class Apphome extends React.Component {
        constructor(props) {
          super(props);
          this.pathnamestate = window.location.pathname + "#/";
          this.locationpath = window.location.pathname;
        }
        shouqi收起折叠的导航栏菜单() {
          $("#my主体").css("padding-top", $("#my导航栏").height());
          $("#example-navbar-collapse").removeClass("show");
          hashchangehandler();
          refreshall();
        }
        render() {
          return (
            <BrowserRouter
              //   basename={window.location.pathname + "#/"}
              basename={this.pathnamestate}
              forceRefresh={false}
              keyLength={12}
            >
              <div>
                <div class="container-fluid fixed-top" id="my导航栏">
                  <nav
                    id="allnavbar"
                    onClick={this.shouqi收起折叠的导航栏菜单}
                    class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                    role="navigation"
                  >
                    {/* <div class="navbar-header"> */}
                    <div>
                      <a class="navbar-brand " href="../index.html">
                        masx200的github主页
                      </a>
                      {/* <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#example-navbar-collapse"
                    >
                      <span class="sr-only">切换导航</span>
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                    </button> */}
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#example-navbar-collapse"
                      >
                        <span class="navbar-toggler-icon" />
                      </button>
                    </div>
                    <div
                      class="collapse navbar-collapse"
                      id="example-navbar-collapse"
                    >
                      <ul class="nav navbar-nav">
                        <li
                          id="mynav1"
                          class={window.location.hash == "#/" ? "active" : ""}
                        >
                          <Link to="/" class="nav-link">
                            基于REACT的主页
                          </Link>
                        </li>
                        <li
                          class={
                            window.location.hash == "#/rssreader"
                              ? "active"
                              : ""
                          }
                        >
                          <Link to="/rssreader" class="nav-link">
                            rss阅读
                          </Link>
                        </li>
                        <li
                          id="mynav2"
                          class={
                            window.location.hash == "#/about" ? "active" : ""
                          }
                        >
                          <Link to="/about" class="nav-link">
                            关于REACT
                          </Link>
                        </li>
                        <li>
                          <a
                            href="../my-vue-router-project/index.html"
                            class="nav-link"
                          >
                            基于vue的主页
                          </a>
                        </li>
                        <li class="">
                          <a
                            href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html"
                            class="nav-link"
                          >
                            圆周率计算多线程
                          </a>
                        </li>
                        <li>
                          <a
                            href="../花密网页版-完善修改版-响应式的导航栏/index.html"
                            class="nav-link"
                          >
                            花密网页版
                          </a>
                        </li>
                        <li>
                          <a
                            href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html"
                            class="nav-link"
                          >
                            JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div
                  class="container"
                  id="my主体"
                  //   style={"min-width: 100%;padding-top: 53px;"}
                >
                  {/* <Suspense fallback={<div>Loading...</div>}> */}
                  <Suspense fallback={<div>loading</div>}>
                    <Switch>
                      <Route
                        exact
                        path="/"
                        // component={allcomponent.app}
                        component={home}
                        //    component={require("./module-app.js").default}
                      />
                      <Route
                        path="/rssreader"
                        // component={allcomponent.rssreader}
                        component={rssreader}
                        // component={require("./module-rssreader.js").default}
                      />
                      <Route
                        path="/about"
                        // component={allcomponent.about}
                        component={about}
                        // component={require("./module-about.js").default}
                        // component={()=>i}
                      />
                      <Route
                        exact
                        path=""
                        // component={allcomponent.app}
                        component={home}
                        //    component={require("./module-app.js").default}
                      />
                      {/* <Redirect from="*" to="/" /> */}
                      {
                        // 如果当前路径变化则不启用路由
                        //    if( this.locationpath===window.location.pathname)
                        //    {<Redirect from="*" to="/" />}}
                      }
                    </Switch>
                  </Suspense>
                  {/* </Suspense> */}
                </div>
              </div>

              {/* </Suspense> */}
            </BrowserRouter>
          );
        }
        componentWillMount() {}
        componentDidMount() {
          $("#my主体").css("padding-top", $("#my导航栏").height());

          hashchangehandler();
          refreshall();
        }
        componentWillReceiveProps(newProps) {}
        shouldComponentUpdate(newProps, newState) {
          return true;
        }
        componentWillUpdate(nextProps, nextState) {}
        componentDidUpdate(prevProps, prevState) {}
        componentWillUnmount() {}
      }

      function refreshall() {
        render(<Apphome />, document.getElementById("root"));
      }
      refreshall();
      // ReactDOM.render(<Apphome />, document.getElementById("root"));
      //    /*  {
      //       /* window.refreshall = refreshall */
      //     }
      //     {
      //       /* let refreshall =()=> myrefreshall */
      //     } */
    }
  });
})();
