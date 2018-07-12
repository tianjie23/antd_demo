import React from 'react';
import {Row, Col, DatePicker , message } from 'antd';
import moment from 'moment';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "数据录入", icon: ""},
    {href: "/dataentry/datepicker", title: "日期选择器", icon: ""},
];
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
class DatepickerPage extends React.Component {
    onChange(date, dateString) {
        message.info(date+", "+dateString);
    }

    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <DatePicker onChange={this.onChange} />
                            <br />
                            <MonthPicker onChange={this.onChange} placeholder="Select month" />
                            <br />
                            <RangePicker onChange={this.onChange} />
                            <br />
                            <WeekPicker onChange={this.onChange} placeholder="Select week" />
                        </div>
                    </Col>
                    <Col md={12} className="gutter-row">
                        <div className="index_col textLeft">
                            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            <br />
                            <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                            <br />
                            <RangePicker
                                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                format={dateFormat}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DatepickerPage;