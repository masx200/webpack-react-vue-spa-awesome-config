import process from "process";

export function showhelp() {
    console.log("\n");
    console.log("usage:");
    console.log("\n");
    console.log(`开发模式\n启动 webpack-dev-server`);
    console.log("\n");
    console.log(
        "webpack-react-vue-spa-awesome-config start --mode=development"
    );
    console.log("\n");
    console.log(`生产模式\n启动 webpack`);
    console.log("\n");
    console.log("webpack-react-vue-spa-awesome-config build --mode=production");
    console.log("\n");
    process.exit(1);
}
