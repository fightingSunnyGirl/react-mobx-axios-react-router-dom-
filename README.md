此项目基于 [Create React App]搭建，详情请参看(https://github.com/facebook/create-react-app).

### 依赖安装 
npm i 

## Available Scripts
In the project directory, you can run:

### 项目本地启动 
`npm start`
 [http://localhost:8082](http://localhost:8082) to view it in the browser

### 项目原始配置外露
`npm run eject`

### 项目包大小分析图 
npm run analyze

### 项目打包 
npm run build

### 配置less
安装依赖 npm i less less-loader -D
需要npm run eject命令暴露原有配置 然后再继续操作
找到node_modules里面的react-scripts=>config=>webpack.config.js
顶部新增引入 
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

rules里面新增一条
  {
    test: lessRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
      },
      'less-loader'
    ),
    sideEffects: true,
  },
  {
      test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
      ),
    },

### 端口号配置
找到node_modules里面的react-scripts=>script=>start.js 
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8082;
或者在package.json启动配置 "start":"set PORT=9000 && react-scripts start",

### 本地代理
配置不支持普通的直接配置webpack.config.js
详情请看setUpProxy

### 关闭eslint
react-scripts=> config => webpack.config.js =>341行 注释掉以下代码
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      enforce: 'pre',
      use: [
         {
           options: {
             cache: true,
             formatter: require.resolve('react-dev-utils/eslintFormatter'),
             eslintPath: require.resolve('eslint'),
             resolvePluginsRelativeTo: __dirname,
             // @remove-on-eject-begin
             ignore: isExtendingEslintConfig,
             baseConfig: isExtendingEslintConfig
               ? undefined
               : {
                   extends: [require.resolve('eslint-config-react-app')],
                 },
             useEslintrc: isExtendingEslintConfig,
             // @remove-on-eject-end
           },
           loader: require.resolve('eslint-loader'),
         },
       ],
       include: paths.appSrc,
     },

### 引入antd
package.json配置 
1."babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ]
  }

2.在APP.css 引入样式，@import '~antd/dist/antd.css';


### react-app-rewired antd定制化解决方案 覆盖之前的
安装 react-app-rewired
根目录 新建文件 config-overrides.js

### 项目启动修改
  "scripts": {
+   "start": "react-app-rewired start",
+   "build": "react-app-rewired build",
+   "test": "react-app-rewired test",
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
    "eject": "react-scripts eject"
}


###  报错.bezierEasingMixin()
将less降级到 2.7.3

