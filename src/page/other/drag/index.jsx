import React from 'react';
import {Row, Col} from 'antd';
import Draggable from 'react-draggable';

import Bread from '../../../component/bread/index';

import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "其他", icon: ""},
    {href: "/other/drag", title: "拖拽", icon: ""},
];

class DragPage extends React.Component {
    handleStart(event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    }

    handleDrag(event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    }

    handleStop(event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    }
    render() {
        return (
            <div>
                <Bread bread={bread}/>
                    <Row gutter={8} className="index_row">
                        <Col md={8}>
                            <Draggable
                                defaultPosition={{x: 0, y: 0}}
                                position={null}
                                grid={[25, 25]}
                                onStart={this.handleStart}
                                onDrag={this.handleDrag}
                                onStop={this.handleStop}
                                >
                                <div className="drag-div">
                                    <div>可以进行拖拽的div</div>
                                </div>
                            </Draggable>
                        </Col>
                        <Col md={8}>
                            <Draggable
                                defaultPosition={{x: 0, y: 0}}
                                position={null}
                                grid={[25, 25]}
                                onStart={this.handleStart}
                                onDrag={this.handleDrag}
                                onStop={this.handleStop}
                                >
                                <div className="drag-div">
                                    <div>可以进行拖拽的div</div>
                                </div>
                            </Draggable>
                        </Col>
                        <Col md={8}>
                            <Draggable
                                handle=".handle"
                                defaultPosition={{x: 0, y: 0}}
                                position={null}
                                grid={[25, 25]}
                                onStart={this.handleStart}
                                onDrag={this.handleDrag}
                                onStop={this.handleStop}
                                >
                                <div className="drag-div">
                                    <div className="handle">请拖拽这里</div>
                                    <div>可以进行拖拽的div</div>
                                </div>
                            </Draggable>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default DragPage;