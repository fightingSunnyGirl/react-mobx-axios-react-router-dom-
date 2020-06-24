import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import {Provider} from 'mobx-react';
import stores from '@store/index';
// 解决日期组建 中英文夹杂问题
import { ConfigProvider } from 'antd';// 解决日期组建 中英文夹杂问题
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider  {...stores}>
  <ConfigProvider>
    <App />
  </ConfigProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
