import React from 'react';
import { Row, Col, Menu, Dropdown, Icon,Button,message } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"导航",icon:""},
    {href:"/nav/dropdown",title:"下拉菜单",icon:""},
];

const SubMenu = Menu.SubMenu;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
    </Menu>
);

const menu3 = (
    <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
    </Menu>
);


class DropDownPage extends React.Component {
    handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    menu4 = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    );
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#">
                                    Hover me <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown overlay={menu} placement="bottomLeft">
                                <Button>bottomLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>bottomCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button>bottomRight</Button>
                            </Dropdown>
                            <br />
                            <Dropdown overlay={menu} placement="topLeft">
                                <Button>topLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={menu} placement="topCenter">
                                <Button>topCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={menu} placement="topRight">
                                <Button>topRight</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown overlay={menu2}>
                                <a className="ant-dropdown-link" href="#">
                                    Hover me <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown overlay={menu2} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                    Click me <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown overlay={menu3}>
                                <a className="ant-dropdown-link" href="#">
                                    Cascading menu <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menu4}>
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                onClick={this.handleButtonClick}
                                overlay={menu}
                                disabled
                                style={{ marginLeft: 8 }}
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown overlay={this.menu4}>
                                <Button style={{ marginLeft: 8 }}>
                                    Button <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DropDownPage;