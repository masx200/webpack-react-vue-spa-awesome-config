import React from "react";
import { add } from "./add.ts";
import { html } from "./index.jsx";
function h(type, props, ...children) {
    console.log({ type, props, children });
    return React.createElement(type, props, ...children);
}
console.log(h);
export const msg = "Welcome to Your html App";
export function App2() {
    const vdom = html`<div>
        <a>Hello!html App2</a>

        <div>
            typescript test
            <br />
            add 1+2=${add(1, 2)}
        </div>
        <div>hello world html</div>
        <div>${msg}</div>
    </div> `;
    console.log(vdom);
    return vdom;
}
