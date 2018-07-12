import React from 'react';
import {Row, Col, Affix, Button } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"导航",icon:""},
    {href:"/nav/affix",title:"固钉",icon:""},
];

class AffixPage extends React.Component {
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Affix>
                                <Button type="primary">Affix top</Button>
                            </Affix>
                            <br />
                            <Affix offsetBottom={0}>
                                <Button type="primary">Affix bottom</Button>
                            </Affix>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                <Button>120px to affix top</Button>
                            </Affix>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <div className="scrollable-container" ref={(node) => { this.container = node; }}>
                                <div className="background">
                                    <Affix target={() => this.container}>
                                        <Button type="primary">
                                            Fixed at the top of container
                                        </Button>
                                    </Affix>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AffixPage;