import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/index';
import { ConfigProvider } from 'antd';//在antd里面使用react的context
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
