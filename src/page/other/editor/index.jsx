import React from 'react';
import {Row, Col} from 'antd';
import {EditorState, convertToRaw, ContentState, convertFromRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import Bread from '../../../component/bread/index';

import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "其他", icon: ""},
    {href: "/other/editor", title: "富文本编辑器", icon: ""},
];
const content = {
    "entityMap": {},
    "blocks": [{
        "key": "637gr",
        "text": "Initialized from content state.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            contentState: convertFromRaw(content)
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onEditorStateChange2 = (contentState) => {
        this.setState({
            contentState
        });
    };

    render() {
        const {editorState, contentState} = this.state;
        return (
            <div>
                <Bread bread={bread}/>

                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <div className="index_col textLeft">
                            <Editor
                                editorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                localization={{locale: 'zh'}}
                                onEditorStateChange={this.onEditorStateChange}
                                onContentStateChange={this.onEditorStateChange2}
                            />
                        </div>
                    </Col>
                </Row>

                <Row gutter={8} className="index_row">
                    <Col md={8}>
                        <div className="index_col textLeft">
                            <h3>内容转换为HTML</h3>
                            <div className="div-editor">
                                {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="index_col textLeft">
                            <h3>内容转换为JOSN</h3>
                            <div className="div-editor">
                                {JSON.stringify(contentState, null, 4)}
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="index_col textLeft">
                            <h3>内容转换MarkDown</h3>
                            <div className="div-editor">
                                {editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default EditorPage;