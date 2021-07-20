const { merge } = require("webpack-merge");

const config = Object.assign({}, require("./release/config/webpack.config.js"));
const myconf = { resolve: { alias: { vue: "vue/dist/vue.js" } } };

const newconf = merge(config, myconf);
console.log(newconf);
module.exports = newconf;
