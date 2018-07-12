import React from 'react';
import { Row, Col, Pagination,message } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"导航",icon:""},
    {href:"/nav/pagin",title:"分页",icon:""},
];

class PaginPage extends React.Component {
    onShowSizeChange(current, pageSize) {
        message.info(`${current}, ${pageSize}`);
    }
    onChange(pageNumber) {
        message.info(pageNumber);
    }
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Pagination defaultCurrent={6} total={500} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PaginPage;