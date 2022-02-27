import { WebpackPluginInstance, ModuleOptions, RuleSetRule } from "webpack";
type Configuration = import("webpack").Configuration & {
    entry: string[];
    plugins: WebpackPluginInstance[];
    module: ModuleOptions & {
        rules: RuleSetRule[];
    };
} & {
    devServer: import("webpack-dev-server").Configuration;
} & {
    optimization: NonNullable<import("webpack").Configuration["optimization"]> & {
        splitChunks: Nonfalseable<NonNullable<import("webpack").Configuration["optimization"]>["splitChunks"]>;
    };
};
type Nonfalseable<T> = T extends false ? never : T;
declare function createconfig(env: Record<string, any>, argv: Record<string, any>): Configuration;
export { createconfig };
