import React from 'react';
import {Row, Col, Breadcrumb,Icon } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"导航",icon:""},
    {href:"/nav/bread",title:"面包屑",icon:""},
];

class BreadPage extends React.Component {
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                                <Breadcrumb.Item>An Application</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Breadcrumb>
                                <Breadcrumb.Item href="">
                                    <Icon type="home" />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="">
                                    <Icon type="user" />
                                    <span>Application List</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Application
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BreadPage;