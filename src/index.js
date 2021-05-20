import "./index.css";
alert("hello world");
import "../registerserviceworker.js";

import React from "react";
import { render } from "react-dom";

function App1() {
    return <div>hello world</div>;
}

render(<App1 />, document.getElementById("root"));

import Vue from "vue/dist/vue.esm.browser";
const App2 = Vue.extend({
    template: `
    <div>
    {{msg}}
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

new Vue({
    el: "#root",
    // router,
    components: {
        App2,
    },
    template: "<App2/>",
    data() {
        return {};
    },
});

var msg = "htmlWelcome to Your Vue.js App";
function h(type, props, ...children) {
    return { type, props, children };
}
console.log(html`
    <a href="/">Hello!</a>
    <App />
    <div>hello world</div>
    <div>{{msg}}</div>
`);
