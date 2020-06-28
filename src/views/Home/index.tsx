import * as React from 'react';
import {Link} from 'react-router-dom';
import {DatePicker,Button} from 'antd';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import './index.less';
const { RangePicker } = DatePicker;

export interface IAppState {
}

// 注入状态机
@inject('Home')
@observer
export default class Home extends React.Component<any, IAppState> {
  static propTypes = {
    Home: PropTypes.object.isRequired
  };

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }


  
  componentDidMount(){
  const { Home } = this.props;
   Home.getNews(2121);
  };

  public render() {
    const { todayNews,testParams } = this.props.Home;
    return (
      <div className="main">
        我是home 页面
        <h3>我是通过请求获取的值{todayNews}</h3>
        <p>
          我是这边传过去的值{testParams}
        </p>
        <RangePicker locale={zhCN}/>
        <div style={{color:'red'}}>测试样式</div>
        <Button type="primary">
           <Link to="/test/1">前往测试页</Link>
        </Button>
      </div>
    );
  }
}
