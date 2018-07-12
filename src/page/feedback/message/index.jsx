import React from 'react';
import {Row, Col, message, Button} from 'antd';

import Bread from '../../../component/bread/index';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/message", title: "全局提示", icon: ""},
];

class MessagePage extends React.Component {
    info = () => {
        message.info('信息提醒反馈。');
    };
    success = () => {
        message.success('成功提示');
    };

    error = () => {
        message.error('错误提示');
    };

    warning = () => {
        message.warning('警告提示');
    };

    infoTime = () =>{
        message.success('延时10秒关闭', 10);
    }
    loadinfo = () => {
        const hide = message.loading('加载中...', 0);
        setTimeout(hide, 2500);
    };

    promisesuccess = () => {
        message.loading('加载中...', 2.5)
            .then(() => message.success('加载完成', 2.5))
            .then(() => message.info('加载已经完成', 2.5));
    };

    render() {
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={24} className="gutter-row">
                        <div className="index_col textLeft">
                            <div>
                                <Button type="primary" onClick={this.info}>普通提示</Button>
                            </div>
                            <div>
                                <Button onClick={this.success}>成功</Button>
                                <Button onClick={this.error}>错误</Button>
                                <Button onClick={this.warning}>警告</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.infoTime}>延时10秒关闭</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.loadinfo}>加载中</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.promisesuccess}>Promise接口</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MessagePage;