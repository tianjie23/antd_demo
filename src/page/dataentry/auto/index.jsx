import React from 'react';
import { Row, Col,Icon,Input, AutoComplete, message } from 'antd';

import Bread from '../../../component/bread/index';

const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"数据录入",icon:""},
    {href:"/dataentry/auto",title:"自动完成",icon:""},
];
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
    title: '话题',
    children: [{
        title: 'AntDesign',
        count: 10000,
    }, {
        title: 'AntDesign UI',
        count: 10600,
    }],
}, {
    title: '问题',
    children: [{
        title: 'AntDesign UI 有多好',
        count: 60100,
    }, {
        title: 'AntDesign 是啥',
        count: 30010,
    }],
}, {
    title: '文章',
    children: [{
        title: 'AntDesign 是一个设计语言',
        count: 100000,
    }],
}];

class AutoPage extends React.Component {
    state = {
        dataSource: [],
        result: [],
    };
    onSelect(value) {
        message.info('onSelect：'+value);
    };
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    };
    handleSearch2 = (value) => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
    }
    renderTitle(title) {
        return (
            <span>
      {title}
                <a
                    style={{ float: 'right' }}
                    href="https://www.google.com/search?q=antd"
                    target="_blank"
                    rel="noopener noreferrer"
                >更多
      </a>
    </span>
        );
    }
    options = dataSource.map(group => (
        <OptGroup
            key={group.title}
            label={this.renderTitle(group.title)}
        >
            {group.children.map(opt => (
                <Option key={opt.title} value={opt.title}>
                    {opt.title}
                    <span className="certain-search-item-count">{opt.count} 人 关注</span>
                </Option>
            ))}
        </OptGroup>
    )).concat([
        <Option disabled key="all" className="show-all">
            <a
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                查看所有结果
            </a>
        </Option>,
    ]);
    render() {
        const { dataSource } = this.state;
        const { result } = this.state;
        const children = result.map((email) => {
            return <Option key={email}>{email}</Option>;
        });
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <AutoComplete
                                dataSource={dataSource}
                                style={{ width: 200 }}
                                onSelect={this.onSelect}
                                onSearch={this.handleSearch}
                                placeholder="input here"
                            />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <AutoComplete
                                style={{ width: 200 }}
                                onSearch={this.handleSearch2}
                                placeholder="input here"
                            >
                                {children}
                            </AutoComplete>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <AutoComplete
                                className="certain-category-search"
                                dropdownClassName="certain-category-search-dropdown"
                                dropdownMatchSelectWidth={false}
                                dropdownStyle={{ width: 300 }}
                                size="large"
                                style={{ width: '100%' }}
                                dataSource={this.options}
                                placeholder="input here"
                                optionLabelProp="value"
                            >
                                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                            </AutoComplete>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AutoPage;