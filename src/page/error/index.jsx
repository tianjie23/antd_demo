import React from 'react';

import './index.less';

class Error extends React.Component{
    render(){
        return (
            <div className="error-div">
                <div className="title">
                    抱歉，找不到此页面~
                    <span>Sorry, the site now can not be accessed.</span>
                </div>
                <div className="content1">
                    您请求访问的页面暂时找不到，建议您返回首页进行浏览，谢谢！
                </div>
            </div>
        )
    }
}

export default Error;