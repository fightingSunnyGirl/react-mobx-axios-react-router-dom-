// 配置本地代理
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/laqu',
    createProxyMiddleware({
      target: 'http://master.laqu.com',
      changeOrigin: true,
      pathRewrite: {
        "^/laqu": ""
      }
    })
  );
};
