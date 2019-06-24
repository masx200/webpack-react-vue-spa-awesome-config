// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
import React from "react";
var { useEffect } = React;
/* 把class组件改成function组件 */
export default function IMPORTCJSAMDUMD动态异步加载() {
  useEffect(function componentDidMount() {
    document.title =
      "masx200的github主页-" +
      `    IMPORTCJSAMDUMD | 动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和
                amd 和 umd 模块为异步加载 promise 方法,使用 fetch
                方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，
                并且解决了包之间的依赖关系，如果依赖包当中的 require
                函数需要，则在模块仓库中引入需要的模块包 定义了模块包的 define
                方法，require 方法，module.exports 对象和 exports 对象 `;
  });

  return (
    <div
      style={{ "min-width": " 100%" }}
      id="readme"
      class="Box Box--condensed instapaper_body md js-code-block-container"
    >
      <div
        class="Box-header d-flex flex-items-center flex-justify-between px-2"
        style={{ "min-width": " 100%" }}
      >
        <div style={{ "min-width": " 100%" }}>
          <div>
            <h1>
              <a>masx200.github.io</a>
            </h1>
          </div>
          <div class="container-lg px-3 my-5 markdown-body">
            <h1 id="importcjsamdumd">IMPORTCJSAMDUMD</h1>

            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/src/IMPORTCJSAMDUMD.js">
                源代码
              </a>
            </p>

            <p>
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/dist/IMPORTCJSAMDUMD.js">
                发布版本
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
              "IMPORTCJSAMDUMD" 的函数功能类似于
              <a href="https://github.com/systemjs/systemjs">"systemjs"</a>的
              "system.import" 函数，
            </p>
            <p>
              "IMPORTCJSAMDUMD "的定义的"define"函数基于
              <a href="https://github.com/requirejs/requirejs">"requirejs"</a>的
              "define"函数
            </p>
            <p>把未命名的模块以 (url)命名存入模块仓库中</p>
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
            <h1>
              <a
                id="user-content-更新乱序加载有依赖关系的模块包"
                class="anchor"
                aria-hidden="true"
                href="#更新乱序加载有依赖关系的模块包"
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
              更新:乱序加载有依赖关系的模块包
            </h1>
            <p>
              1.可以在一句 IMPORTCJSAMDUMD 语句中,传入多个模块的 url 的 name
              了,返回一个数组,相当于 promise.all 的语法糖,
            </p>
            <p>
              2.可以尝试乱序加载有依赖关系的模块包了,加载之前,先把模块的 url 和
              name
              信息存入模块配置列表,如果依赖的包还没有加载完成,则多次尝试加载,最终可以加载完成
            </p>
            <p>甚至是这么变态的依赖关系,这么乱序加载,都可以!</p>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: ` <span class="pl-en">IMPORTCJSAMDUMD</span>(
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>bootstrap<span class="pl-pds">"</span></span>
                  ],
                  [<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>],
                  [<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/mui/3.7.1/js/mui.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>mui<span class="pl-pds">"</span></span>],
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>clipboard<span class="pl-pds">"</span></span>
                  ],
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>popper.js<span class="pl-pds">"</span></span>
                  ],
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>react-dom<span class="pl-pds">"</span></span>
                  ],
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>react-router-dom<span class="pl-pds">"</span></span>
                  ],
                  [
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>
                  ]
                )
                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)
                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">warn</span>);`
                  }}
                />
              </pre>
            </div>
            <h2>
              <a
                id="user-content-加载有依赖关系的模块包的方法"
                class="anchor"
                aria-hidden="true"
                href="#加载有依赖关系的模块包的方法"
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
              加载有依赖关系的模块包的方法
            </h2>
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
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `
                    
                    
                    (<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
                        <span class="pl-k">const</span> [<span class="pl-c1">jquery</span>, <span class="pl-c1">popper</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
                          <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>),
                          <span class="pl-en">IMPORTCJSAMDUMD</span>(
                            <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js<span class="pl-pds">"</span></span>,
                            <span class="pl-s"><span class="pl-pds">"</span>popper.js<span class="pl-pds">"</span></span>
                          )
                        ]);
                        <span class="pl-k">const</span> <span class="pl-c1">bootstrap</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">IMPORTCJSAMDUMD</span>(
                          <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js<span class="pl-pds">"</span></span>,
                          <span class="pl-s"><span class="pl-pds">"</span>bootstrap<span class="pl-pds">"</span></span>
                        );
                        <span class="pl-en">console</span>.<span class="pl-c1">log</span>(jquery, popper, bootstrap);
                      })();
                    
                    `
                  }}
                />
              </pre>
            </div>
            <h3>
              <a
                id="user-content-如果要动态异步加载-es6-模块加载-es6-模块的方法"
                class="anchor"
                aria-hidden="true"
                href="#如果要动态异步加载-es6-模块加载-es6-模块的方法"
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
              如果要动态异步加载 es6 模块,加载 es6 模块的方法:
            </h3>
            <div class="highlight highlight-source-js">
              <pre>
                <code>
                  <span class="pl-k">import</span>(url).
                  <span class="pl-c1">then</span>(
                  <span class="pl-en">console</span>.
                  <span class="pl-smi">log</span>);
                </code>
              </pre>
            </div>
            <p>
              如果要兼容旧的浏览器，可以使用
              <a href="https://github.com/guybedford/es-module-shims">
                "es-module-shims"
              </a>
              的"importShim"函数替换"import"函数
            </p>
            <div class="highlight highlight-source-js">
              <pre>
                <span class="pl-en">importShim</span>(
                <span class="pl-s">
                  <span class="pl-pds">"</span>/path/to/module.js
                  <span class="pl-pds">"</span>
                </span>
                ).<span class="pl-c1">then</span>(<span class="pl-smi">x</span>{" "}
                <span class="pl-k">=&gt;</span>{" "}
                <span class="pl-en">console</span>.
                <span class="pl-c1">log</span>(x));
              </pre>
            </div>
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
            <h2>
              <a
                id="user-content-动态异步加载-cjsamdumd-模块用法"
                class="anchor"
                aria-hidden="true"
                href="#动态异步加载-cjsamdumd-模块用法"
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
              动态异步加载 cjs,amd,umd 模块用法:
            </h2>
            <p>
              主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name
              都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为
              name，promise 之后的.then 函数的回调函数的参数是
              module，module.default 的模块的默认输出
            </p>
            <div class="highlight highlight-source-js">
              <pre>
                <span class="pl-en">IMPORTCJSAMDUMD</span>(url, name);
                <span class="pl-en">IMPORTCJSAMDUMD</span>(url).
                <span class="pl-c1">then</span>(<span class="pl-smi">m</span>{" "}
                <span class="pl-k">=&gt;</span>{" "}
                <span class="pl-en">console</span>.
                <span class="pl-c1">log</span>(<span class="pl-smi">m</span>.
                <span class="pl-smi">default</span>));
              </pre>
            </div>
            <p>
              次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象
            </p>
            <div class="highlight highlight-source-js">
              <pre>
                <span class="pl-c1">IMPORTCJSAMDUMD</span>.
                <span class="pl-c1">GLOBALPACKAGESTORE</span>[name];
              </pre>
            </div>
            <p>
              次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数
              name 是字符串
            </p>
            <div class="highlight highlight-source-js">
              <pre>
                <span class="pl-c1">IMPORTCJSAMDUMD</span>.
                <span class="pl-en">REQUIREPACKAGE</span>(name);
              </pre>
            </div>
            <p>
              IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name].default 和
              IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的
            </p>
            <h2>
              <a
                id="user-content-示例"
                class="anchor"
                aria-hidden="true"
                href="#示例"
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
              示例
            </h2>
            <div class="highlight highlight-source-js">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `
                    
                       
                    
                    <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>).<span class="pl-c1">then</span>(<span class="pl-smi">m</span> <span class="pl-k">=&gt;</span> {
                  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">m</span>.<span class="pl-smi">default</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">jquery</span>);
                });
                
                <span class="pl-k">var</span> jquery <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-c1">GLOBALPACKAGESTORE</span>.<span class="pl-smi">jquery</span>.<span class="pl-smi">default</span>;
                
                <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>),
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>
                  ),
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.min.js<span class="pl-pds">"</span></span>)
                ]).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);
                
                <span class="pl-en">IMPORTCJSAMDUMD</span>(
                  <span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js<span class="pl-pds">"</span></span>
                ).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);
                
                <span class="pl-en">IMPORTCJSAMDUMD</span>(
                  <span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js<span class="pl-pds">"</span></span>,
                  <span class="pl-s"><span class="pl-pds">"</span>underscore<span class="pl-pds">"</span></span>
                )
                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)
                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">error</span>);
                
                <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>)
                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)
                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">error</span>);
                
                <span class="pl-k">var</span> jquery <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-en">REQUIREPACKAGE</span>(<span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>);
                
                <span class="pl-k">var</span> underscore <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-en">REQUIREPACKAGE</span>(<span class="pl-s"><span class="pl-pds">"</span>underscore<span class="pl-pds">"</span></span>);
                
                <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>),
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(
                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,
                    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>
                  ),
                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>vue<span class="pl-pds">"</span></span>)
                ]).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);
                
                <span class="pl-c"><span class="pl-c">//</span>检测到amd模块 (3)&nbsp;["jquery", Array(0), ƒ]0: "jquery"1: []2: ƒ ()length: 3__proto__: Array(0)</span>
                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js", origin: "https://cdn.bootcss.com", protocol: "https:", username: "", password: "",&nbsp;…}hash: ""host: "cdn.bootcss.com"hostname: "cdn.bootcss.com"href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js"origin: "https://cdn.bootcss.com"password: ""pathname: "/jquery/3.4.1/jquery.js"port: ""protocol: "https:"search: ""searchParams: URLSearchParams&nbsp;{}username: ""__proto__: URL</span>
                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ,&nbsp;…}vue: ƒ wn(e)length: 0__proto__: Array(0)</span>
                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "",&nbsp;…}</span>
                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ, react: {…}]</span>
                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.staticfile.org/vue/2.6.10/vue.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "",&nbsp;…}</span>
                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ, react: {…}, vue: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ,&nbsp;…}vue: ƒ wn(e)length: 0__proto__: Array(0)</span>
                <span class="pl-c"><span class="pl-c">//</span>(3)&nbsp;[{…}, {…}, {…}]0: {name: "jquery", default: ƒ, url: URL}1: {name: "react", default: {…}, url: URL}2: {name: "vue", default: ƒ, url: URL}length: 3__proto__: Array(0)</span>
                
                <span class="pl-c"><span class="pl-c">//</span>加载es6模块的方法</span>
                
                <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js<span class="pl-pds">"</span></span>).<span class="pl-c1">then</span>(
                  <span class="pl-en">console</span>.<span class="pl-smi">log</span>
                );
                    
                    `
                  }}
                />
              </pre>
            </div>
          </div>

          {/*   <div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">
              This site is open source.
              <a href="https://github.com/masx200/IMPORTCJSAMDUMD/edit/master/README.md">
                Improve this page
              </a>
              .
            </div> */}
        </div>
      </div>
    </div>
  );
}
