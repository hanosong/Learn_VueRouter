const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const lessExtension = /\.module\.less$/;

            const { isFound: lessModuleFound } = getLoader(
                webpackConfig,
                loaderByName('less-loader')
            );

            if (lessModuleFound) {
                const { oneOf } = webpackConfig.module.rules.find(
                    (rule) => typeof rule.oneOf === 'object'
                );

                if (oneOf) {
                    oneOf.unshift({
                        test: lessExtension,
                        use: [
                            {
                                loader: loaderByName('style-loader').loader,
                            },
                            {
                                loader: loaderByName('css-loader').loader,
                                options: {
                                    modules: true,
                                    importLoaders: 2,
                                },
                            },
                            {
                                loader: loaderByName('postcss-loader').loader,
                            },
                            {
                                loader: loaderByName('less-loader').loader,
                                options: {
                                    lessOptions: {
                                        javascriptEnabled: true,
                                    },
                                },
                            },
                        ],
                    });
                }
            }

            return webpackConfig;
        },
    },
    plugins: [
        {
            plugin: require('babel-plugin-import'),
            options: {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
        },
    ],
};