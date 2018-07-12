import React from 'react';
import {Row, Col, Popconfirm,Button,message  } from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/popconfirm", title: "气泡提示框", icon: ""},
];
const text = 'Are you sure delete this task?';

class PopconfirmPage extends React.Component {
    confirm(e) {
        //console.log(e);
        message.success('点击是'+e);
    }

    cancel(e) {
        //console.log(e);
        message.error('点击否'+e);
    }
    render() {
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Popconfirm title="你确定要删除吗？" onConfirm={this.confirm} onCancel={this.cancel} okText="是" cancelText="否">
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                                <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>TL</Button>
                                </Popconfirm>
                                <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>Top</Button>
                                </Popconfirm>
                                <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>TR</Button>
                                </Popconfirm>
                            </div>
                            <div style={{ width: 70, float: 'left' }}>
                                <Popconfirm placement="leftTop" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>LT</Button>
                                </Popconfirm>
                                <Popconfirm placement="left" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>Left</Button>
                                </Popconfirm>
                                <Popconfirm placement="leftBottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>LB</Button>
                                </Popconfirm>
                            </div>
                            <div style={{ width: 70, marginLeft: 304 }}>
                                <Popconfirm placement="rightTop" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>RT</Button>
                                </Popconfirm>
                                <Popconfirm placement="right" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>Right</Button>
                                </Popconfirm>
                                <Popconfirm placement="rightBottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>RB</Button>
                                </Popconfirm>
                            </div>
                            <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                                <Popconfirm placement="bottomLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>BL</Button>
                                </Popconfirm>
                                <Popconfirm placement="bottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>Bottom</Button>
                                </Popconfirm>
                                <Popconfirm placement="bottomRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                                    <Button>BR</Button>
                                </Popconfirm>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PopconfirmPage;