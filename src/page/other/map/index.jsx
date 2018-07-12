import React from 'react';
import {Row, Col, Card} from 'antd';
import {Map, Circle, NavigationControl, InfoWindow} from 'react-bmap';
import ReactQMap from 'react-qmap';

import Bread from '../../../component/bread/index';

import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
    {href: "", title: "其他", icon: ""},
    {href: "/other/map", title: "地图", icon: ""},
];

class MapPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title="西安钟楼",
              content="西安钟楼位于西安市中心，明城墙内东西南北四条大街的交汇处，是中国现存钟楼中形制最大、保存最完整的一座。建于明太祖洪武十七年（1384年），初建于今广济街口，与鼓楼相对，明神宗万历十年（1582年）整体迁移于今址。",
              getContianer = dom => {
            const middleControl = document.createElement('div');
            middleControl.style.cssText = 'width: 22px;height: 30px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -23px;margin-top: -23px;';
            middleControl.innerHTML = `<img src="${require("../../../assets/imgs/spot_location.png")}" style="width: 100%;height: 100%;" />`;
            dom.appendChild(middleControl);
        }
        return (
            <div>
                <Bread bread={bread}/>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <Card title="百度地图" bordered={false}>
                            <Map center={{lng: 108.9533980162, lat: 34.2657127681}} zoom="18">
                                {/*<Marker position={{lng: 108.953469, lat: 34.265725}}/>*/}
                                <Circle
                                    center={{lng: 108.953469, lat: 34.265725}}
                                    fillColor='red'
                                    strokeColor='white'
                                    radius="10"
                                />
                                <NavigationControl/>
                                <InfoWindow position={{lng: 108.953469, lat: 34.265725}} text={content} title={title}/>
                            </Map>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={24}>
                        <Card title="腾讯地图" bordered={false}>
                            <ReactQMap
                                center={{latitude: 34.2594300000, longitude: 108.9470370000}}
                                initialOptions={{zoomControl: true, mapTypeControl: true,zoom: 18}}
                                apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
                                mySpot={{latitude: 34.2594300000, longitude: 108.9470370000}}
                                style={{height: 300}}    // 高度和宽度默认占父元素的100%
                                getContainer={getContianer}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MapPage;