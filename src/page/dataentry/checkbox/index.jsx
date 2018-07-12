import React from 'react';
import {Row, Col, Checkbox, message,Button } from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "数据录入", icon: ""},
    {href: "/dataentry/checkbox", title: "多选框", icon: ""},
];
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];
const defaultCheckedList = ['Apple', 'Orange'];

class CheckBoxPage extends React.Component {
    state = {
    checked: true,
    disabled: false,
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
};
    onChange(e) {
        message.info(`checked = ${e.target.checked}`);
    }

    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }
    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    }
    onChange2 = (e) => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    }
    onChange3(checkedValues) {
        message.info('checked = ,' +checkedValues);
    }
    onChange4 = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <Checkbox defaultChecked={false} disabled />
                            <br />
                            <Checkbox defaultChecked disabled />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <p style={{ marginBottom: '20px' }}>
                                <Checkbox
                                    checked={this.state.checked}
                                    disabled={this.state.disabled}
                                    onChange={this.onChange2}
                                >
                                    {label}
                                </Checkbox>
                            </p>
                            <p>
                                <Button
                                    type="primary"
                                    size="small"
                                    onClick={this.toggleChecked}
                                >
                                    {!this.state.checked ? 'Check' : 'Uncheck'}
                                </Button>
                                <Button
                                    style={{ marginLeft: '10px' }}
                                    type="primary"
                                    size="small"
                                    onClick={this.toggleDisable}
                                >
                                    {!this.state.disabled ? 'Disable' : 'Enable'}
                                </Button>
                            </p>
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange3} />
                            <br /><br />
                            <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange3} />
                            <br /><br />
                            <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange3} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    Check all
                                </Checkbox>
                            </div>
                            <br />
                            <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange4} />

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CheckBoxPage;