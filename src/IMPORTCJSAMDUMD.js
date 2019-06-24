


"use strict";



// import sha256 from "./sha256.min";
/*
更新:
1.可以在一句IMPORTCJSAMDUMD语句中,传入多个模块的url的name了,返回一个数组,相当于promise.all的语法糖,
2.可以尝试乱序加载有依赖更新的模块包了,加载之前,先把模块的url和name信息存入模块配置列表,如果依赖的包还没有加载完成,则多次尝试加载,最终可以加载完成

甚至是这么变态的依赖关系,这么乱序加载,都可以!

IMPORTCJSAMDUMD(["https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js","bootstrap"],["https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js","jquery"],["https://cdn.staticfile.org/mui/3.7.1/js/mui.min.js","mui"],["https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js","clipboard"],["https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js","popper.js"],["https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js","react-dom"],["https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js","react-router-dom"],["https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js","react"]).then(console.log).catch(console.warn)



 */
//由于使用了async函数所以需要regeneratorRuntime//
// import regeneratorRuntime from "regenerator-runtime";

//包装cjs和amd和umd模块为异步加载promise方法
/**
 *动态异步加载commonjs和umd和amd模块
 *
 *动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和 amd 和 umd 模块为异步加载 promise 方法,使用 fetch 方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的 require 函数需要，则在模块仓库中引入需要的模块包

定义了模块包的 define 方法，require 方法，module.exports 对象和 exports 对象

加载有依赖关系的模块包的方法

(async () => {

  const [jquery, popper] = await Promise.all([

    IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),

    IMPORTCJSAMDUMD(

      "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",

      "popper.js"

    )

  ]);

  const bootstrap = await IMPORTCJSAMDUMD(

    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js",

    "bootstrap"

  );

  console.log(jquery, popper, bootstrap);

})();

如果要动态异步加载 es6 模块,加载 es6 模块的方法:

import(url).then(console.log);

动态异步加载 cjs,amd,umd 模块用法:

主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module，module.default 的模块的默认输出

IMPORTCJSAMDUMD(url, name);

IMPORTCJSAMDUMD(url).then(m => console.log(m.default));

次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象

IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name];

次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串

IMPORTCJSAMDUMD.REQUIREPACKAGE(name);

IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name]和 IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的

示例
 *
 * 用法:
 *
 * IMPORTCJSAMDUMD('https://cdn.staticfile.org/jquery/3.4.1/jquery.js').then((m)=>{console.log(m.default.fn.jquery)})
 *
 * var jquery=IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.jquery
 *
 *  Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")]).then(console.log)
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js").then(console.log)
 *
 *
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js","underscore").then(console.log).catch(console.error)
 *
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js",).then(console.log).catch(console.error)
 *
 *var jquery= IMPORTCJSAMDUMD.REQUIREPACKAGE("jquery")
 *
 *
 * var underscore=IMPORTCJSAMDUMD.REQUIREPACKAGE("underscore")
 *
 * Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js","jquery"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js","react"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js","vue")]).then(console.log)
 *
 *
 * 如果要加载es6模块
 * import("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js").then(console.log)
 *
 *  */
//就像es6模块的import函数返回promise对象一样
// window . importcjsamdumd= importcjsamdumd
(global => {
  "use strict";
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  }
  //   try {
  //     console.log(global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE);
  //   } catch (error) {}

  global.IMPORTCJSAMDUMD = global.IMPORTCJSAMDUMD || importcjsamdumd;
  global.IMPORTCJSAMDUMD.REQUIREPACKAGE =
    global.IMPORTCJSAMDUMD.REQUIREPACKAGE || require;
  global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE =
    global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE || {};
  //   global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST =
  //     global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST || {};

  // console.log(eval(`(async function(){return await})`))
  /* 为了不要把全局的模块仓库覆盖 */
  //   try {
  //     console.log(global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE);
  //   } catch (error) {}
  //   if (typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.sha256 === "undefined") {
  //     importcjsamdumd(
  //       "https://cdn.staticfile.org/js-sha256/0.9.0/sha256.min.js",
  //       "sha256"
  //     );
  //   }
  // reqiregenerator=require()
  function require(packagename = undefined) {
    var findpackage = global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename];
    if (findpackage) {
      console.log("在模块仓库中找到了", packagename);
      return findpackage.default;
    }
    // else if (global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[packagename]) {
    //   //  sleep(50)
    //   //   console.warn("模块仓库中没有找到,但是模块列表中存在" + packagename);
    // //   throw new Error("模块仓库中没有找到,但是模块列表中存在  " + packagename);
    //   /*  //   console.log(global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[packagename].url);
    // //   var urltoload = global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[packagename].url;
    // //   var stingtoeval = `(async ()=>{moduletoload=(await window.IMPORTCJSAMDUMD('${urltoload}'))})()`;
    // //   //   console.log(stingtoeval);
    // //   var moduletoload;
    // //   eval(stingtoeval);
    // //   //   (async () => {
    // //   //     moduletoload = await window.IMPORTCJSAMDUMD(urltoload);
    // //   //   })()
    // //   //   yield
    // //   /* 如果不存在则多次尝试 */
    //   //   try {
    //   //     return moduletoload.default;
    //   //   } catch (error) {
    //   //     return moduletoload.default;
    //   //   } finally {
    //   //     return moduletoload.default;
    //   //   }
    //   //   // return moduletoload.default;
    //   //   //   throw new Error("模块仓库中没有找到,但是模块列表中存在");
    //   //   //   return  require(packagename) */
    // }
    else {
      throw new Error(
        "Cannot find module in packagestore, 模块仓库中没有找到,  " +
          packagename
      );
    }
  }
  /* 同步等待函数 */
  //导致浏览器卡死
  // function sleep(ms) {
  //     var start = Date.now();
  //     while ((Date.now() - start) < ms) {
  //     }
  //   }

  //   }

  function importcjsamdumd(url, packagename = undefined) {
    console.log("输入的参数为", Array(...arguments));
    if (typeof url === "object" || typeof packagename === "object") {
      var 已经加载过的模块数量 = 0;
      for (var canshuinput of Array(...arguments)) {
        var inputpackagename = canshuinput[1];
        var inputurl = canshuinput[0];

        if (
          typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename] !==
            "undefined" &&
          typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename]
            .default !== "undefined" &&
          global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[inputpackagename].url ===
            inputurl
        ) {
          console.log(
            "模块仓库中已经存在模块,不会重新加载",
            inputurl,
            inputpackagename
          );
          已经加载过的模块数量++;
        }
      }
      if (已经加载过的模块数量 >= Array(...arguments).length) {
        console.log("输入的所有模块都已经加载过了,不会再次加载");
        return Promise.all(
          Array(...arguments).map(inputarray => {
            var packagename = inputarray[1];
            return new Promise(resolve => {
              resolve(
                /* 返回的是模块不是模块的默认输出 */

                global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename]
              );
            });
          })
        );
      }
      /*新的写法,同时加载多个 (["",""],["",""]) */
      //   console.log(
      //     Array(...arguments).map(e => {
      //       e[0]+ e[1];
      //     })
      //   );
      /* IMPORTCJSAMDUMD(["https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js","jquery"],["https://cdn.staticfile.org/mui/3.7.1/js/mui.min.js","mui"],["https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js","clipboard"]) */
      /* 先把传入的模块列表信息放到 IMPORTCJSAMDUMD.PACKAGECONFIGLIST中*/
      Array(...arguments).forEach(e => {
        var url = e[0],
          packagename = e[1];
        if (typeof url === "undefined" || url === "" || packagename === "") {
          throw new Error(
            "输入的类型错误,输入的字符串不能为空,url不能为undefined"
          );
        }
        if (typeof packagename === "undefined") {
          packagename = new URL(url).href;
        }
        // global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[packagename] = {
        //   name: packagename,
        // //   sha256: sha256(url),
        //   url: url
        // };
      });

      /* 如果不存在则多次尝试 */
      var suoyouimportpromise;
      try {
        // console.log("第一次尝试批量加载模块");
        suoyouimportpromise = Promise.all(
          Array(...arguments).map(e => {
            //   try {
            return IMPORTCJSAMDUMD(e[0], e[1]);
            //   } catch (error) {
            //     return IMPORTCJSAMDUMD(e[0], e[1]);
            //   }finally{
            //     return IMPORTCJSAMDUMD(e[0], e[1]);
            //   }
          })
        );
        // return suoyouimportpromise;
        /* 这里return无效,因为有finally */
      } catch (error) {
        console.error(error);
      } finally {
        suoyouimportpromise = Promise.all(
          Array(...arguments).map(e => {
            //   try {
            return IMPORTCJSAMDUMD(e[0], e[1]);
            //   } catch (error) {
            //     return IMPORTCJSAMDUMD(e[0], e[1]);
            //   }finally{
            //     return IMPORTCJSAMDUMD(e[0], e[1]);
            //   }
          })
        );
        return suoyouimportpromise;
      }

      /* 尝试第二次 */
      //   try {
      //     // console.log("第一次尝试批量加载模块");
      //     suoyouimportpromise = Promise.all(
      //       Array(...arguments).map(e => {
      //         //   try {
      //         return IMPORTCJSAMDUMD(e[0], e[1]);
      //         //   } catch (error) {
      //         //     return IMPORTCJSAMDUMD(e[0], e[1]);
      //         //   }finally{
      //         //     return IMPORTCJSAMDUMD(e[0], e[1]);
      //         //   }
      //       })
      //     );
      //     return suoyouimportpromise;
      //   } catch (error) {
      //     console.error(error);
      //   }
      // suoyouimportpromise = Promise.all(
      //   Array(...arguments).map(e => {
      //     // try {
      //     return IMPORTCJSAMDUMD(e[0], e[1]);
      //     // } catch (error) {
      //     //   return IMPORTCJSAMDUMD(e[0], e[1]);
      //     // }finally{
      //     //   return IMPORTCJSAMDUMD(e[0], e[1]);
      //     // }
      //   })
      // );
      // return suoyouimportpromise;
      // console.log("第二次尝试批量加载模块");
      // suoyouimportpromise = Promise.all(
      //   Array(...arguments).map(e => {
      //     return IMPORTCJSAMDUMD(e[0], e[1]);
      //   })
      // );
      // return suoyouimportpromise;
      //   }
      //   finally {
      //     // console.log("最后一次尝试批量加载模块");
      //     suoyouimportpromise = Promise.all(
      //       Array(...arguments).map(e => {
      //         return IMPORTCJSAMDUMD(e[0], e[1]);
      //       })
      //     );
      //     return suoyouimportpromise;
      //   }

      //   suoyouimportpromise.then(console.log)
      //   console.log("suoyouimportpromise",suoyouimportpromise);
    } else if (typeof url === "string" || typeof packagename === "string") {
      /* 输入空字符串报错 */
      if (typeof url === "undefined" || url === "" || packagename === "") {
        throw new Error(
          "输入的类型错误,输入的字符串不能为空,url不能为undefined"
        );
      }
      //   window.GLOBALPACKAGESTORE = window.GLOBALPACKAGESTORE || [];
      //   if (typeof packagename === "undefined") {
      //     packagename = sha256(url);
      //   }
      if (typeof packagename === "undefined") {
        packagename = new URL(url).href;
      }
      url = new URL(url);
      url = url.href;

      //   global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[packagename] = {
      //     name: packagename,
      //     // sha256: sha256(url),
      //     url: url
      //   };
      //   console.log(
      //     " IMPORTCJSAMDUMD.PACKAGECONFIGLIST",
      //     global.IMPORTCJSAMDUMD.PACKAGECONFIGLIST
      //   );
      function define(name, deps, callback) {
        define.amd = true;
        define.globalDefQueue = [];
        //   window.globalDefQueue = globalDefQueue;
        var op = Object.prototype;
        var ostring = op.toString;
        var useInteractive = false;
        function isArray(it) {
          return ostring.call(it) === "[object Array]";
        }
        function isFunction(it) {
          return ostring.call(it) === "[object Function]";
        }
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== "string") {
          //Adjust args appropriately
          callback = deps;
          deps = name;
          name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
          callback = deps;
          deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
          deps = [];
          //Remove comments from the callback string,
          //look for require calls, and pull them into the dependencies,
          //but only if there are function args.
          if (callback.length) {
            callback
              .toString()
              .replace(commentRegExp, commentReplace)
              .replace(cjsRequireRegExp, function(match, dep) {
                deps.push(dep);
              });

            //May be a CommonJS thing even without require calls, but still
            //could use exports, and module. Avoid doing exports and module
            //work though if it just needs require.
            //REQUIRES the function to expect the CommonJS variables in the
            //order listed below.
            deps = (callback.length === 1
              ? ["require"]
              : ["require", "exports", "module"]
            ).concat(deps);
          }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
          node = currentlyAddingScript || getInteractiveScript();
          if (node) {
            if (!name) {
              name = node.getAttribute("data-requiremodule");
            }
            context = contexts[node.getAttribute("data-requirecontext")];
          }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
          context.defQueue.push([name, deps, callback]);
          context.defQueueMap[name] = true;
        } else {
          define.globalDefQueue.push([name, deps, callback]);
        }
        console.log("检测到amd模块", define.globalDefQueue[0]);
        if (
          typeof define.globalDefQueue[0][0] === "string" &&
          typeof packagename === "undefined"
        ) {
          packagename = define.globalDefQueue[0][0];
        }
        var canshu = define.globalDefQueue[0][1].map(e => require(e));
        //   console.log(canshu);
        define.exports = define.globalDefQueue[0][2](...canshu);
      }

      define.amd = true;
      /* 如果模块仓库中存在所需要的模块则不会重新加载,减少性能消耗 */

      if (
        typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename] !==
          "undefined" &&
        typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename]
          .default !== "undefined" &&
        global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename].url === url
      ) {
        console.log("模块仓库中已经存在模块,不会重新加载", packagename);

        return new Promise(resolve => {
          resolve(
            /* 返回的是模块不是模块的默认输出 */

            global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename]
          );
        });
      } else {
        // importcjsamdumd.packagename = packagename;

        return new Promise((resolve, reject) => {
          try {
            (() => {
              //   (async () => {
              var fetchpromise;
              try {
                try {
                  fetchpromise = fetch(url).then(response => {
                    if (!response.ok) {
                      throw new Error("fetch failed " + url);
                    }

                    return response.text();
                  });
                } catch (e) {
                  console.error(e);
                  reject(e);
                  return;
                }

                //   .catch(e => {
                //     console.error(e);
                //     reject(e);
                //     return;
                //   })
                try {
                  fetchpromise.then(scripttext => {
                    var exports = {};
                    var module = {
                      exports: {}
                    };
                    define.exports = {};
                    // var globalDefQueue = [];
                    var exportmodule = [{}, {}, {}];
                    try {
                      exportmodule = (function(
                        require,
                        define,
                        module,
                        exports,
                        scripttext
                      ) {
                        //   console.log(
                        //     Function(
                        //         "require",
                        //         "define",
                        //         "module",
                        //         "exports",
                        //         scripttext + `; return [exports, module.exports];`
                        //       ).toString()
                        //   );
                        //   eval(scripttext);
                        /* 有的网站安全考虑不能运行eval */
                        return Function(
                          "require",
                          "define",
                          "module",
                          "exports",

                          `\/\* ${url} \*\/;
                          \n
                          ${scripttext};
                          \n
                          \/\* ${url} \*\/;
                          
                          return [exports, module.exports, define.exports]; `
                          /* 这里必须换行因为如果遇到最后一行是注释的话,这句return也被注释了 */
                          //  +
                          // `;\n return [exports, module.exports, define.exports]; \n` +
                          // ` \/\* ${url} \*\/`
                        )(require, define, module, exports);
                        // for (let __key__ in module.exports ){
                        //     module[__key__]=module.exports[__key__]
                        // }

                        //   var moduleexport = {};
                        //   console.log("exports", exports, "module.exports", module.exports);
                        //   //   console.log()
                        //   if (Object.keys(exports).length) {
                        //     moduleexport.default = exports;
                        //   } else if (Object.keys(module.exports).length) {
                        //     moduleexport.default = module.exports;
                        //   }

                        //   console.log(
                        //     "exports",
                        //     exports,
                        //     "module.exports",
                        //     module.exports,
                        //     // "globalDefQueue[2]",
                        //     // globalDefQueue[2]
                        //   );

                        //   return [exports, module.exports];
                      })(require, define, module, exports, scripttext);
                    } catch (e) {
                      console.error(e);
                      reject(e);
                      return;
                    }

                    // console.log(define.exports);
                    // console.log(exportmodule);
                    // exports = exportmodule[0];
                    // module.exports = exportmodule[1];
                    var moduleexport = {
                      name: undefined,
                      default: undefined,
                      url: undefined
                    };
                    // console.log(
                    //   "exports",
                    //   exports,
                    //   "module.exports",
                    //   module.exports,
                    // //   "globalDefQueue[2]",
                    // //   globalDefQueue[2]
                    // );
                    /* console.log(exportmodule[0], exportmodule[1], define.exports);
console.log(
  Object.keys(exportmodule[0]).length,
  Object.keys(exportmodule[1]).length,
  Object.keys(define.exports).length
); */
                    //   if(){
                    //   console.log(typeof exportmodule);
                    //   }
                    if (typeof exportmodule === "undefined") {
                      var exportmodule = [{}, {}, {}];
                    }
                    if (typeof define.exports === "undefined") {
                      define.exports = {};
                    }
                    console.log("模块的输出为", [
                      exportmodule[0],
                      exportmodule[1],
                      // define.exports
                      exportmodule[2]
                    ]);
                    if (
                      typeof exportmodule[0] !== "object" ||
                      Object.keys(exportmodule[0]).length ||
                      JSON.stringify(exportmodule[0]) !== "{}"
                    ) {
                      console.log("检测到umd模块", url, packagename);
                      moduleexport.default = exportmodule[0];
                    } else if (
                      typeof exportmodule[1] !== "object" ||
                      Object.keys(exportmodule[1]).length ||
                      JSON.stringify(exportmodule[1]) !== "{}"
                    ) {
                      console.log("检测到cjs模块", url, packagename);
                      moduleexport.default = exportmodule[1];
                    } else if (
                      typeof exportmodule[2] !== "object" ||
                      Object.keys(exportmodule[2]).length ||
                      JSON.stringify(exportmodule[2]) !== "{}"

                      // typeof define.exports !== "object" ||
                      // Object.keys(define.exports).length ||
                      // JSON.stringify(define.exports) !== "{}"
                    ) {
                      console.log("检测到amd模块", url, packagename);
                      // moduleexport.default = define.exports;
                      moduleexport.default = exportmodule[2];
                    } else {
                      console.warn("加载的模块没有输出", url, packagename);
                      resolve(moduleexport);
                      return;
                    }

                    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                      Object.defineProperty(moduleexport, Symbol.toStringTag, {
                        value: "Module"
                      });
                    }
                    // moduleexport.sha256 = sha256(url);
                    if (typeof moduleexport.default !== "undefined") {
                      if (typeof packagename !== "undefined") {
                        /* 修改模块仓库里面存放模块,而不是模块的默认输出 */
                        moduleexport.name = packagename;
                        //   global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename] =
                        //     moduleexport.default;

                        global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
                          packagename
                        ] = moduleexport;
                      } else {
                        /* 如果存在不要重复加载了sha256 */
                        //   moduleexport.name = sha256(url);
                        packagename = url;
                        global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
                          packagename
                          // sha256(url)
                        ] = moduleexport;
                        /* 如果没有指定模块的名字则把url转成Sha256作为名字 */
                        //   moduleexport.name = undefined;
                      }
                    }

                    moduleexport.url = url;
                    if (typeof moduleexport.default !== "undefined") {
                      if (typeof moduleexport.name !== "undefined") {
                        console.log(
                          "IMPORTCJSAMDUMD.GLOBALPACKAGESTORE",
                          global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE
                        );
                      }
                    } else {
                      console.warn("加载的模块没有输出", url);
                      resolve(moduleexport);
                      return;
                    }

                    resolve(moduleexport);
                    return;
                  });
                } catch (e) {
                  console.error(e);
                  reject(e);
                  return;
                }

                //   .catch(e => {
                //     console.error(e);
                //     reject(e);
                //     return;
                //   });

                /*    var response = await fetch(url);
            if (!response.ok) {
              throw new Error("fetch failed " + url);
            }
            var scripttext = await response.text();
          } catch (e) {
            console.error(e);
            reject(e);
            return;
          }
*/
              } catch (e) {
                console.error(e);
                reject(e);
                return;
              }
            })();
          } catch (e) {
            console.error(e);
            reject(e);
            return;
          }
        });
      }
    } else {
      throw new Error("输入的类型错误,输入的类型必须是字符串或者数组");
    }
  }
})(
  (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this
);

// define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';

// });
/*(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
        typeof define === 'function' && define.amd ? define(['react'], factory) :
        (global.ReactDOM = factory(global.React));
    }(this, (function (React) { 'use strict';
    
    
    
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
      typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
      (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
    }(this, function (exports, $, Popper) { 'use strict';
    
    
    
    
    (function( factory ) {
        if ( typeof define === "function" && define.amd ) {
    
            // AMD. Register as an anonymous module.
            define([ "jquery" ], factory );
        } else {
    
            // Browser globals
            factory( jQuery );
        }
    }(function( $ ) {
    
    
    
    */
/*define( "jquery", [], function() {
            return jQuery;
        } );*
    
    
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.VueRouter = factory());
    }(this, (function () { 'use strict';
    
    
    */
