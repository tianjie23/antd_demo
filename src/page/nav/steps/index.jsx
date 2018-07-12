import React from 'react';
import { Row, Col, Steps ,message, Icon, Button } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"导航",icon:""},
    {href:"/nav/steps",title:"步骤条",icon:""},
];

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];


class StepsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Steps current={1}>
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Steps>
                                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                            </Steps>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Steps current={current}>
                                {steps.map(item => <Step key={item.title} title={item.title} />)}
                            </Steps>
                            <div className="steps-content">{steps[this.state.current].content}</div>
                            <div className="steps-action">
                                {
                                    this.state.current < steps.length - 1
                                    &&
                                    <Button type="primary" onClick={() => this.next()}>Next</Button>
                                }
                                {
                                    this.state.current === steps.length - 1
                                    &&
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                                }
                                {
                                    this.state.current > 0
                                    &&
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Previous
                                    </Button>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default StepsPage;