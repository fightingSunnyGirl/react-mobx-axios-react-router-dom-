// 定制化解决方案
const { override, fixBabelImports,addLessLoader} = require('customize-cra');
// 关闭sourceMap
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,//样式按需加载 这里不注释掉就无法使用less修改主题
  }),
   addLessLoader({
         javascriptEnabled: true,
         modifyVars: { 
          // '@primary-color': '#ff2d52', // 全局主色
          },
     }),
);