import React from 'react';
import { Row, Col, Spin, Switch, Alert, Icon, Button } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Bread from '../../../component/bread/index';
import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/spin", title: "加载中", icon: ""},
];
const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;

class SpinPage extends React.Component {
    state = {loading: false}
    toggle = (value) => {
        this.setState({loading: value});
    };
    nprogressStart(){
        NProgress.start();
    }

    nprogressDone(){
        NProgress.done();
    }

    render() {
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Spin size="small"/>
                            <Spin/>
                            <Spin size="large"/>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <div className="example">
                                <Spin/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Spin spinning={this.state.loading}>
                                <Alert
                                    message="消息标题"
                                    description="消息的内容"
                                    type="info"
                                />
                            </Spin>
                            <div style={{marginTop: 16}}>
                                加载：<Switch checked={this.state.loading} onChange={this.toggle}/>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Spin indicator={antIcon}/>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Button onClick={()=>this.nprogressStart()}>
                                <Icon type="caret-right" />
                            </Button> 显示顶部进度条
                            <br />
                            <Button onClick={()=>this.nprogressDone()}>
                                <Icon type="caret-right" />
                            </Button> 进度条完成
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SpinPage;