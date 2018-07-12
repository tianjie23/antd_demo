import React from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';

import { menu } from './menu';
const SubMenu = Menu.SubMenu;


const MenuItems = ({key,title,icon,...props})=>
    <Menu.Item key={key}>
        <Link to={key}>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
        </Link>
    </Menu.Item>;

const SubItems =({key,title,icon,sub,...props})=>
    <SubMenu
        key={key}
        title={<span><Icon type={icon} /><span>{title}</span></span>}
    >
        {sub && sub.map(item=>MenuItems(item))}
    </SubMenu>;


class SliderMenu extends React.Component{
    render(){
        // const url=window.location.pathname;
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/index']}>
                {
                    menu && menu.map((item)=>
                        item.sub && item.sub.length ?
                            SubItems(item):MenuItems(item)
                    )
                }
            </Menu>
        )
    }
}

export default SliderMenu;