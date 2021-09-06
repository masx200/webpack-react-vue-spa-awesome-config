const { merge } = require("webpack-merge");

const { createconfig } = require("./bin/config.js");

module.exports = (env, argv) => {
    const config = createconfig(env, argv);
    const myconf = { resolve: { alias: { vue: "vue/dist/vue.js" } } };

    const newconf = merge(config, myconf);
    // console.log(newconf);

    return newconf;
};
