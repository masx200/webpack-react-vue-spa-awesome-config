const { merge } = require("webpack-merge");

const { createconfig } = require("./bin/config.js");

module.exports = (env, argv) => {
    const config = createconfig(env, argv);
    const myconf = {
        resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },
    };

    const newconf = merge(config, myconf);
    // console.log(newconf);
    if (process.env.NODE_ENV == "development") {
        config.experiments = {
            ...config.experiments,
            lazyCompilation: true,
        };
    }
    // console.log(config)
    return newconf;
};
