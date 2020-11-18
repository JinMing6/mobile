const path = require('path')

module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://m.toutiao.com',
                changeOrigin: true,
                pathReWrite: {
                    '^/api': ''
                },
                logLevel: 'debug'
                // secure: false
            },
            '/test': {
                target: 'http://localhost:8090',
                changeOrigin: true,
                pathReWrite: {
                    '^/test': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'))
    }
}