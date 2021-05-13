import flat from "core-js-pure/features/array/flat";
if (typeof Array.prototype.flat !== "function") {
    Array.prototype.flat = function (depth = 1) {
        return flat(this, depth);
    };
}
