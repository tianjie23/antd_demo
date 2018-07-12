import React from 'react';
import { Divider,Tag } from 'antd';

import Bread from '../../component/bread/index';
import './about.less';


const bread = [
    {href: "/about", title: "项目介绍", icon: "book"},
];

class About extends React.Component{
    render(){
        return (
            <div>
                <Bread bread={bread} />
                <div className="index_row divider_content">
                    <Divider orientation="left" style={{fontSize:16, fontWeight:600}}>前言</Divider>
                    <div className="pm">此项目用作学习开发，React+Antd</div>
                    <Divider orientation="left" style={{fontSize:16, fontWeight:600}}>依赖模块</Divider>
                    <div>项目是用create-react-app创建的，主要还是列出新加的功能依赖包</div>
                    <div className="pm">
                        <Tag color="magenta">react@16.4.0</Tag>
                        <Tag color="red">react-router-dom@4.3.1</Tag>
                        <Tag color="volcano">antd@3.6.2</Tag>
                        <Tag color="orange">echarts-for-react@2.0.12-beta.0</Tag>
                        <Tag color="purple">recharts@1.0.0-beta.10</Tag>
                        <Tag color="lime">react-draggable@3.0.5</Tag>
                        <Tag color="green">photoswipe@4.1.2</Tag>
                        <Tag color="cyan">react-qmap@0.1.5</Tag>
                        <Tag color="blue">react-bmap@1.0.71</Tag>
                        <Tag color="geekblue">react-draft-wysiwyg@1.12.13</Tag>
                    </div>
                    <Divider orientation="left" style={{fontSize:16, fontWeight:600}}>功能模块</Divider>
                    <div>备注：项目只引入了ant-design的部分组件，其他的组件antd官网有源码，可以直接复制到项目中使用，后续有时间补上全部组件。 </div>
                    <div className="pm">项目使用了antd的自定义主题功能，若想替换，具体操作请查看antd官网</div>
                </div>
            </div>
        )
    }
}

export default About;