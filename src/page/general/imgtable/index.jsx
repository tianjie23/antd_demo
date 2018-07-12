import React from 'react';
import {Row, Col, Icon} from 'antd';

import Bread from '../../../component/bread/index';
import './index.less';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"通用",icon:""},
    {href:"/general/imgtable",title:"图标",icon:""},
];

class ImgTablePage extends React.Component {
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <ul className="ul-list">
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                                <li>
                                    <Icon type="step-backward" />
                                    <span>step-backward</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ImgTablePage;