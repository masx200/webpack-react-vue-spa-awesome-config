import htm from "htm";
import React from "react";
import { render } from "react-dom";
import "../registerserviceworker.js";
import "./error-alert.js";
import "./index.css";
function html(...args){
return Reflect.apply(htm,React.createElement,args)
}

console.log(html);
window.addEventListener(
    "load",
    () => {
        alert("hello world");
    },
    { once: true }
);

function App1() {
    return <div>hello world react</div>;
}

const msg = "Welcome to Your html App";
function h(type, props, ...children) {
    console.log({ type, props, children });
    return React.createElement(type, props, ...children);
}
console.log(h);
const vdom = html`<div>
    <a href="/">Hello!html</a>

    <div>hello world html</div>
    <div>${msg}</div>
</div> `;
console.log(vdom);

render(
    <App1 />,

    document.getElementById("root")
);

render(
    vdom,

    document.body.appendChild(document.createElement("div"))
);
(async () => {
    const Vue = (await import("vue/dist/vue.esm.js")).default;
    console.log(Vue);
    Vue.config.errorHandler = function (err, vm, info) {
        console.error(err, vm, info);
        throw err;
    };

    const App2 = Vue.extend({
        template: `<div>
    <div>
    
    {{msg}}
    </div>
    <div>
    
    hello world vue
    </div>
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
