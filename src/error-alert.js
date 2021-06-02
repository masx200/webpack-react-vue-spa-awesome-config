"use strict";
window.addEventListener("error", fn1);
window.addEventListener("unhandledrejection", fn2);
function fn1(e) {
    const { error } = e;
    alert(
        [String(e), String(error), e.message, e.filename, error?.stack].join(
            "\n"
        )
    );
}
function fn2(e) {
    const { reason } = e;
    alert([String(e), String(reason), reason?.stack].join("\n"));
}
