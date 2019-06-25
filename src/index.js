import "./index.css";
import "bootstrap";
// import "clipboard.js/dist/clipboard";
// import "jquery";
// import "bootstrap/dist/css/bootstrap.css";
// import "./mui.css";
// import "./mui.min.js";
import "./home-react-index-render.js";
// import "./index.src.03a47b71.css.css";
// import "./indexcss.scss";
// import "./my-vue-router-project/huami-fp.scss";
// import "./decoder.index.scss";
// import "./hieroglyphy.index.scss";
// import "./jsfuck.index.scss";
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.scss";

// import "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/indexcss.scss";
/* 模块热替换(hot module replacement)
查看原文|编辑此页
如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。通常，用户先要检查这个接口是否可访问，然后再开始使用它。举个例子，你可以这样 accept 一个更新的模块：

if (module.hot) {
  module.hot.accept('./library.js', function() {
    // 使用更新过的 library 模块执行某些操作...
  })
}
支持以下方法……

accept */

// if (module.hot) {
//   console.log(module.hot.status());
// }
/* 测试vue-loader */

import $ from "jquery";
// $("<div id='root'/>").appendTo(document.body);
import Vue from "vue/dist/vue.esm.browser";
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.devtools = true;
import testvue from "./test-vue.vue";
(function() {
  $("<div id='vueapp'/>").prependTo(document.body);
  Vue.component("testvue", testvue);
  //   console.log(testvue);

  new Vue({
    components: {
      testvue
    },
    template: ` 
      <div id='vueapp'>
      <h1>
      {{ msg }}Vue
      </h1>
      <testvue/>
      <h1>
      {{ msg }}Vue
      </h1>
      </div>`,
    data() {
      return { msg: "Hello world!" };
    },
    el: "#vueapp"
  });
  //   console.log(vuevm);
})();

// import testjson from "./PingWest品玩-https___www.pingwest.com_feed-Sun_Jun_23_2019_16_30_22_GMT+0800_(GMT+08_00).json";
// console.log(testjson);
