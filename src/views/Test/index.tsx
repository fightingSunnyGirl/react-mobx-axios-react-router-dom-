import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const AA = ()=>{
  // 这些方法只能用在函数组建里面。。。
  const h = useHistory();
  const p = useParams();
  const l = useLocation();
  // console.log(h,p,l)
  return (
    <div>测试</div>
  )
}

export interface IAppState {
}

// const params = useParams();

@inject('Test')
@observer
export default class Test extends React.Component<any, IAppState> {
  static propTypes = {
    Test: PropTypes.object.isRequired
  };

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {
    const { Test, match } = this.props;
    console.log(this.props)
    const url = match.url;
    Test.getPathName(url);
    // 参数获取
    const id = match.params.id;
  }

  goHome = () => {
    const { history } = this.props;
    history.push('/')
  }

  public render() {
    const { pathName } = this.props.Test;
    return (
      <div>
        我是测试页面
        <p>我是状态管理里面获取到的路径"{pathName}"</p>
        <Button type="link">
          <Link to="/" >前往首页</Link>
        </Button>

        <Button type="primary" onClick={this.goHome}>通过事件返回首页</Button>
        <AA></AA>

        <Button href="/useHook">前往函数组建</Button>
      </div>
    );
  }
}
