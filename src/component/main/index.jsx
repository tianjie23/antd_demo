import React from 'react';
import { Layout, Icon, Avatar, Badge, Row, Col,Menu } from 'antd';

import '../../assets/css/index.less'
import MenuCustom from '../menu/index';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Sider, Content,Footer } = Layout;


class Main extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    logout(){

    }

    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    breakpoint="lg"
                    collapsed={this.state.collapsed}
                    className="slider"
                >
                    <div className="logo" />
                    <MenuCustom />
                </Sider>
                <Layout>
                    <Header className="header">
                        <Row>
                            <Col span={4}>
                                <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                />
                            </Col>
                            <Col span={4} offset={16} className="textRight">
                                {/*<Badge count={1}><Avatar size="large" src="http://www.qqzhi.com/uploadpic/2015-01-09/212742941.jpg" /></Badge>*/}
                                <Menu
                                    mode="horizontal"
                                    style={{ lineHeight: '64px', float: 'right' }}
                                    onClick={this.menuClick}
                                >
                                <Menu.Item key="1">
                                    <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                                        <Icon type="notification" />
                                    </Badge>
                                </Menu.Item>
                                <SubMenu title={<Badge count={1}><Avatar size="large" src="http://www.qqzhi.com/uploadpic/2015-01-09/212742941.jpg" /></Badge>}>
                                    <MenuItemGroup title="用户中心">
                                        <Menu.Item key="setting:1">你好 - </Menu.Item>
                                        <Menu.Item key="setting:2">个人信息</Menu.Item>
                                        <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="设置中心">
                                        <Menu.Item key="setting:3">个人设置</Menu.Item>
                                        <Menu.Item key="setting:4">系统设置</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                </Menu>
                            </Col>
                        </Row>


                    </Header>
                    <Content className="content">
                        {this.props.children}
                    </Content>
                    <Footer className="footer">
                        Ant Demo ©2018 Created by Chenlly
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Main;