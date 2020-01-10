const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const name = defaultSettings.title || '营商路路通商事一体机';

const port = process.env.port || process.env.npm_config_port || 8080;

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port,
        overlay: {
            warnings: true,
            errors: true,
        },
        proxy: {
            // change xxx-api/login => mock/login
            [process.env.VUE_APP_BASE_API]: {
                target: `http://192.168.2.16:${port}/mock`,
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_BASE_API}`]: '',
                },
            },
        },
        // after: require('./mock/mock-server.js'),
    },
    configureWebpack: {
        name,
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
    chainWebpack(config) {
        // config.plugin.delete('preload');
        // config.plugin.delete('prefetch');

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end();

        // set preserveWhitespace
        // config.module
        //     .rule('vue')
        //     .use('vue-loader')
        //     .loader('vue-loader')
        //     .tap((options) => {
        //         options.compilerOptions.preserveWhitespace = true;
        //         return options;
        //     })
        // .end();
        // config
        //     .when(process.env.NODE_ENV === 'development',
        //         config => config.devtool('cheap-source-map'));
        // config
        //     .when(process.env.NODE_ENV !== 'development',
        //         (config) => {
        //             config
        //                 .plugin('ScriptExtHtmlWebpackPlugin')
        //                 .after('html')
        //                 .use('script-ext-html-webpack-plugin', [{
        //                     // runtime must same as runtimeChunk name.default is runtime
        //                     inline: /runtime\..*\.js$/,
        //                 }])
        //                 .end();
        //             config.optimization.splitChunks({
        //                 chunks: 'all',
        //                 cacheGroups: {
        //                     libs: {
        //                         name: 'chunk-libs',
        //                         test: /[\\/]node_modules[\\/]/,
        //                         priority: 10,
        // only package third parties that are initially dependent
        //                         chunks: 'initial',
        //                     },
        //                     elementUI: {
        //                         name: 'chunk-commons',
        //                         test: resolve('src/components'), // can customize your rules
        //                         minChunks: 3, // minimum common number
        //                         priority: 5,
        //                         reuseExistingChunk: true,
        //                     },
        //                 },
        //             });
        //             config.optimization.runtimeChunk('single');
        //         });
    },
};
