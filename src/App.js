import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './router/index'
import './App.css';
import { Layout, Menu, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>选项</span>
                  </span>
                }>
                <Menu.Item key="3">
                  <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/login">登录</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/404">404</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <TeamOutlined />
                    <span>Team</span>
                  </span>
                }>
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <FileOutlined />
              </Menu.Item>
            </Menu>
          </Sider>
          {/* 路由 */}
          <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              <Routes></Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;