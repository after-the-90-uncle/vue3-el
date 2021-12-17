const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const devconfig = require("./devConfig.json");
module.exports = {
    // devServer: {
    //     inline: true,
    //     hot: true,
    //     stats: 'minimal',
    //     contentBase: __dirname,
    //     overlay: true,
    //     historyApiFallback: true
    // },
    devServer: {
        proxy: devconfig.proxy,
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./"),
            },
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    css: {
        loaderOptions: {
            postcss: {
                // 这里的选项会传递给 postcss-loader
                plugins: () => [
                    require("autoprefixer")({
                        overrideBrowserslist: ["last 2 version", ">1%", "ios 7"],
                    }),
                ],
            },
        },
    },
};
