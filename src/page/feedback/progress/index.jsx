import React from 'react';
import {Row, Col, Progress,Button } from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/progress", title: "进度条", icon: ""},
];
const ButtonGroup = Button.Group;

class ProgressPage extends React.Component {
    state = {
        percent: 0,
    }
    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }
    render() {
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress percent={30} size="small" />
                            <Progress percent={50} size="small" status="active" />
                            <Progress percent={70} size="small" status="exception" />
                            <Progress percent={100} size="small" />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress type="circle" percent={30} width={80} />
                            <Progress type="circle" percent={70} width={80} status="exception" />
                            <Progress type="circle" percent={100} width={80} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress percent={this.state.percent} />
                            <Progress type="circle" percent={this.state.percent} />
                            <ButtonGroup>
                                <Button onClick={this.decline} icon="minus" />
                                <Button onClick={this.increase} icon="plus" />
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                            <Progress type="circle" percent={100} format={() => 'Done'} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Progress type="dashboard" percent={75} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProgressPage;