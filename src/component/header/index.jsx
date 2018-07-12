import React from 'react';
import {Layout, } from 'antd';
const {Header} = Layout;
import { Layout, Menu, Icon } from 'antd';

class Header extends React.Component{
    render(){
        return (
            <Header className="header">
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </Header>
        )
    }
}

export default Header;