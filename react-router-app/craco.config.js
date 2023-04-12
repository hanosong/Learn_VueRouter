module.exports = {
    style: {
        css: {
            loaderOptions: {
                modules: {
                    localIdentName: '[local]_[hash:base64:5]',
                },
            },
        },
        less: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true,
            },
        },
    },
};