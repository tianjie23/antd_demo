import React from 'react';
import {Row, Col, Carousel,message } from 'antd';

import Bread from '../../../component/bread/index';
import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "通用", icon: ""},
    {href: "/general/carousel", title: "轮播图", icon: ""}
];

class CarouselPage extends React.Component {
    onChange(a, b, c) {
        message.info(a, b, c);
    }
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Carousel afterChange={this.onChange}>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Carousel vertical>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Carousel effect="fade">
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Carousel autoplay>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default CarouselPage;