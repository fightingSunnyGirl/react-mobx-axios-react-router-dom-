// 代理
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/proxy', {
     target: 'http://master.mm.com',
     changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    }));
};