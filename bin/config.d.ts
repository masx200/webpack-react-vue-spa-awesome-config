import { WebpackPluginInstance, ModuleOptions, RuleSetRule } from "webpack";
type Configuration = import("webpack").Configuration & {
    entry: string[];
    plugins: WebpackPluginInstance[];
    module: ModuleOptions & {
        rules: RuleSetRule[];
    };
} & {
    devServer: import("webpack-dev-server").Configuration;
};
declare function createconfig(env: Record<string, any>, argv: Record<string, any>): Configuration;
export { createconfig };
