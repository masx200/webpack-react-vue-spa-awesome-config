/* 测试vue-loader */

import $ from "jquery";
// $("<div id='root'/>").appendTo(document.body);
import Vue from "vue/dist/vue.esm.browser";
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.devtools = true;
import testvue from "./test-vue.vue";
import vueimg from "./vue.png";
import reactimg from "./react.png";
(function() {
  $("<div id='vueapp'/>").prependTo(document.body);
  //   Vue.component("testvue", testvue);
  //   console.log(testvue);

  new Vue({
    components: {
      testvue
    },
    template: ` 
      <div id='vueapp'>
      <img :src="vueimg" class="App-logo">
      <img :src="reactimg" class="App-logo">
      <testvue/>
    
      
      <h1>
      {{ msg }}Vue
      </h1>
      </div>`,
    data() {
      return {
        vueimg,
        reactimg,
        msg: "Hello world!"
      };
    },
    el: "#vueapp"
  });
  //   console.log(vuevm);
})();
