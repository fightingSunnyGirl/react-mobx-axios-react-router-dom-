// 头部
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import './index.less';

interface IAppProps {

}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  // 是否登录状态
  const [isLogin, setIsLogin] = useState(true);
  // 是否有头像
  const [hasAvatar, setHasAvatar] = useState(false);
  return <div className="header_box">
    <div className="header_top container1200">
      <span className="header_top_left">您好，欢迎来到XXX</span>
      <div className="header_top_right">
        <Link to="/" className="header_top_right_item">邀请好友</Link>
        <Link to="/" className="header_top_right_item">在线客服</Link>
        <Link to="/" className="header_top_right_item">代发指南</Link>
        <Link to="/" className="header_top_right_item">帮助中心</Link>
      </div>
    </div>

    <div className="header_nav_box">
      <div className="header_nav_main container1200">
        <img src="" alt="logo" className="logo" />
        <div className="header_nav">
          <Link to="/" className="header_nav_item theme">首页</Link>
          <Link to="/" className="header_nav_item">礼品商城</Link>
          <Link to="/" className="header_nav_item" >会员中心</Link>
          <Link to="/" className="header_nav_item">收费标准</Link>
          <Link to="/" className="header_nav_item">分站加盟</Link>
          <Link to="/" className="header_nav_item">API接口</Link>
          <Link to="/" className="header_nav_item">在线客服</Link>
        </div>
        <div className="header_user_box">
          {
            !isLogin ?

              <>
                <span className="logout"><LoginOutlined />登录</span>
                <span className="logout"><UserOutlined />注册</span>
              </> :
              <>
                <div className="avatar_box">
                  {
                    !hasAvatar ? <UserOutlined /> : <img src="" alt="" className="user_avatar" />
                  }
                </div>
                <span className="user_name">欢迎你，<i>小小白</i></span>
                <span className="logout"><LogoutOutlined />退出账户</span>
              </>
          }
        </div>
      </div>
    </div>
  </div>;
};

export default Header;
