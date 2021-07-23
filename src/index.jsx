import htm from "htm";
import React, { createElement } from "react";
import { render } from "react-dom";
import Vue from "vue";
import "../registerserviceworker.js";
import { App1 } from "./App1";
import { App2 } from "./App2";
import "./error-alert.js";
import helloworld from "./helloworld.vue";
import "./index.css";
import "./index.less";
console.log(helloworld);
export function html(...args) {
    return Reflect.apply(htm, React.createElement, args);
}

console.log(html);
window.addEventListener(
    "load",
    () => {
        console.log("hello world");
    },
    { once: true }
);

render(
    <App1 />,

    document.getElementById("root")
);

render(
    createElement(App2),

    document.body.appendChild(document.createElement("div"))
);

!(async () => {
    console.log(Vue);
    Vue.component("helloworld", helloworld);
    Vue.config.errorHandler = function (err, vm, info) {
        console.error(err, vm, info);
        throw err;
    };

    const App2 = Vue.extend({
        template: `<div>
    <div>
    
    {{msg}}
    </div>
    <helloworld/>
    </div>
    `,

        name: "App2",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
            };
        },
        methods: {},
        mounted() {},
    });

    const vm = new Vue({
        components: {
            App2,
        },
        template: "<App2/>",
        data() {
            return {};
        },
    });
    vm.$mount(document.body.appendChild(document.createElement("div")));
    console.log(vm);
})();
