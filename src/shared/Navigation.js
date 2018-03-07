import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
// import Auth from '../helpers/auth';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="avatar">
            <Avatar size="large" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=80" />
          </div>

          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to={'/dashboard/'}>
                <Icon type="home" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to={'/dashboard/admins'}>
                <Icon type="user" />
                <span>Admins</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to={'/dashboard/organisations'}>
                <Icon type="rocket" />
                <span>Organisations</span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={<span><Icon type="global" /><span>Menu</span></span>}
            >
              <Menu.Item key="4">Nested Menu 1</Menu.Item>
              <Menu.Item key="5">
                <Link to={'/dashboard/organisations/3pal-tax-services/businesses'}>
                  Nested Menu 2
                </Link>
              </Menu.Item>
              <Menu.Item key="6">Nested Menu 3</Menu.Item>
              <Menu.Item key="7">Nested Menu 4</Menu.Item>
            </SubMenu>

            { /*
            <Menu.Item key="8">
              <a onClick={(e) => {
                e.preventDefault();
                Auth.signOut();
                window.location.href = '/';
              }}>
                <Icon type="logout" />
                <span>Log Out</span>
              </a>
            </Menu.Item>
            */ }

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Navigation;
