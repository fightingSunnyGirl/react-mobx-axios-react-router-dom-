This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` | `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` | `npm run build`
项目打包，发布

### `yarn eject`
命令运行，暴露原始配置，操作不可逆

### 关闭eslint
详见craco.config.js

### 主题色配置  antd按需引入
详见craco.config.js

### 本地代理
详见setupProxy.js

### 配置别名
两个文件一一对应 
详见craco.config.js 
   webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@services': pathResolve('src/services'),
      '@layout': pathResolve('src/layout'),
      '@views': pathResolve('src/views'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
    }
  },

ts.config.json 
新增 "extends": "./paths.json"

新增 path.json文件
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@assets/*": ["assets/*"],
      "@services/*": ["services/*"],
      "@layout/*": ["layout/*"],
      "@views/*": ["views/*"],
      "@pages/*": ["pages/*"],
      "@store/*": ["store/*"]
    }
  }
}

### history模式下 Link跳转路由页面不更新
详见App.tsx  exact={!!route.exact}

### 项目目录概要
![Image text](https://github.com/fightingSunnyGirl/react-mobx-axios-react-router-dom-/blob/master/framework.png)