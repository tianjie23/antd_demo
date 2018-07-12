import React from 'react';
import {Row, Col, Modal, Button} from 'antd';

import Bread from '../../../component/bread/index';
import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "反馈", icon: ""},
    {href: "/feedback/modal", title: "对话框", icon: ""},
];


const confirm = Modal.confirm;

class ModalPage extends React.Component {
    state = {
        visible: false,
        visibleAsync: false,
        ModalText: 'Content of the modal',
        confirmLoading: false,
        loading: false,
        visibleCustom: false,
        modal1Visible: false,
        modal2Visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    showModal2 = () => {
        this.setState({
            visibleAsync: true,
        });
    }
    handleOk2 = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visibleAsync: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel2 = () => {
        console.log('Clicked cancel button');
        this.setState({
            visibleAsync: false,
        });
    }
    showModal3 = () => {
        this.setState({
            visibleCustom: true,
        });
    }
    handleOk3 = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visibleCustom: false});
        }, 3000);
    }
    handleCancel3 = () => {
        this.setState({visibleCustom: false});
    }

    showConfirm() {
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showDeleteConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    info() {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    }

    success() {
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
        });
    }

    error() {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    }

    warning() {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        const {visibleAsync, confirmLoading, ModalText, visibleCustom, loading} = this.state;
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={24} className="gutter-row">
                        <div className="index_col textLeft">
                            <div>
                                <Button type="primary" onClick={this.showModal}>基本</Button>
                                <Modal
                                    title="Basic Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.showModal2}>异步关闭</Button>
                                <Modal title="Title"
                                       visible={visibleAsync}
                                       onOk={this.handleOk2}
                                       confirmLoading={confirmLoading}
                                       onCancel={this.handleCancel2}
                                >
                                    <p>{ModalText}</p>
                                </Modal>
                            </div>
                            <div>
                                <Button type="primary" onClick={this.showModal3}>
                                    自定义页脚
                                </Button>
                                <Modal
                                    visible={visibleCustom}
                                    title="Title"
                                    onOk={this.handleOk3}
                                    onCancel={this.handleCancel3}
                                    footer={[
                                        <Button key="back" onClick={this.handleCancel3}>Return</Button>,
                                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk3}>
                                            Submit
                                        </Button>,
                                    ]}
                                >
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                            </div>
                            <div>
                                <Button onClick={this.showConfirm}>
                                    Confirm
                                </Button>
                                <Button onClick={this.showDeleteConfirm} type="dashed">
                                    Delete
                                </Button>
                            </div>
                            <div>
                                <Button onClick={this.info}>Info</Button>
                                <Button onClick={this.success}>Success</Button>
                                <Button onClick={this.error}>Error</Button>
                                <Button onClick={this.warning}>Warning</Button>
                            </div>
                            <div>
                                <Button type="primary" onClick={() => this.setModal1Visible(true)}>离顶部20px</Button>
                                <Modal
                                    title="20px to Top"
                                    style={{ top: 20 }}
                                    visible={this.state.modal1Visible}
                                    onOk={() => this.setModal1Visible(false)}
                                    onCancel={() => this.setModal1Visible(false)}
                                >
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                </Modal>
                                <Button type="primary" onClick={() => this.setModal2Visible(true)}>屏幕中间</Button>
                                <Modal
                                    title="Vertically centered modal dialog"
                                    wrapClassName="vertical-center-modal"
                                    visible={this.state.modal2Visible}
                                    onOk={() => this.setModal2Visible(false)}
                                    onCancel={() => this.setModal2Visible(false)}
                                >
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ModalPage;