import React from 'react';
import {Row, Col, notification, Button,Icon,Select } from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/info", title: "通知提醒框", icon: ""},
];
const { Option } = Select;

class InfoPage extends React.Component {
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    openNotificationNoClose = () => {
        const args = {
            message: 'Notification Title',
            description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0,
        };
        notification.open(args);
    };
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    close = () => {
        console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    };

    openNotificationCustom = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: this.close,
        });
    };

    openNotificationIcon = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        });
    };

    options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    openNotificationDire = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    render() {
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={24} className="gutter-row">
                        <div className="index_col textLeft">
                            <div>
                                <Button type="primary" onClick={this.openNotification}>基本用法-4.5秒后关闭</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.openNotificationNoClose}>取消自动关闭</Button>
                            </div>
                            <div>
                                <Button onClick={() => this.openNotificationWithIcon('success')}>成功</Button>
                                <Button onClick={() => this.openNotificationWithIcon('info')}>信息</Button>
                                <Button onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>
                                <Button onClick={() => this.openNotificationWithIcon('error')}>错误</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.openNotificationCustom}>
                                    自定义提示
                                </Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.openNotificationIcon}>自定义图标</Button>
                            </div>
                            <div>
                                <Select
                                    defaultValue="topRight"
                                    style={{ width: 120, marginRight: 10 }}
                                    onChange={(val) => {
                                        notification.config({
                                            placement: val,
                                        });
                                    }}
                                >
                                    {this.options.map(val => <Option key={val} value={val}>{val}</Option>)}
                                </Select>
                                <Button
                                    type="primary"
                                    onClick={this.openNotificationDire}
                                >
                                    触发提示
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default InfoPage;