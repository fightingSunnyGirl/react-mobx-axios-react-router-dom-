//  @craco/craco 用于配置主题色
// 修改默认配置
const CracoLessPlugin = require('craco-less');
const path = require('path');
const pathResolve = pathUrl => path.resolve(__dirname, pathUrl);

module.exports = {
  eslint: {
    enable: false,//关闭eslint
  },
  // 别名
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@services': pathResolve('src/services'),
      '@layout': pathResolve('src/layout'),
      '@views': pathResolve('src/views'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
      '@components': pathResolve('src/components')
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',//主题配置
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ]
};