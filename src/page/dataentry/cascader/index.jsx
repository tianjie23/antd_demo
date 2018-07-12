import React from 'react';
import {Row, Col, Cascader, message} from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "数据录入", icon: ""},
    {href: "/dataentry/cascader", title: "级联选择", icon: ""},
];

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class CascaderPage extends React.Component {
    state = {
        text: 'Unselect',
        options,
    };

    onChange(value) {
        message.info(value);
    }

    onChange2 = (value, selectedOptions) => {
        this.setState({
            text: selectedOptions.map(o => o.label).join(', '),
        });
    };
    onChange3 = (value, selectedOptions) => {
        message.info(value+","+selectedOptions);
    }
    loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        // load options lazily
        setTimeout(() => {
            targetOption.loading = false;
            targetOption.children = [{
                label: `${targetOption.label} Dynamic 1`,
                value: 'dynamic1',
            }, {
                label: `${targetOption.label} Dynamic 2`,
                value: 'dynamic2',
            }];
            this.setState({
                options: [...this.state.options],
            });
        }, 3000);
    };

    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <span>
                                {this.state.text}
                                &nbsp;
                                <Cascader options={options} onChange={this.onChange2}>
                                  <a href="#">Change city</a>
                                </Cascader>
                              </span>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Cascader
                                options={this.state.options}
                                loadData={this.loadData}
                                onChange={this.onChange3}
                                changeOnSelect
                            />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <span>
                                {this.state.text}
                                &nbsp;
                                <Cascader options={options} onChange={this.onChange2}>
                                  <a href="#">Change city</a>
                                </Cascader>
                              </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CascaderPage;