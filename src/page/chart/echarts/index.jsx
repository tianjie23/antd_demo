import React from 'react';
import { Row,Col,Card,message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china.js';

import Bread from '../../../component/bread/index';


const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"图表",icon:""},
    {href:"/chart/echarts",title:"echarts",icon:""},
];

class Echarts extends React.Component{
    state={
        option:{
            title: {
                text: "iphone销量",
                subtext: "纯属虚构",
                left: "center"
            },
            tooltip: {
                trigger: "item"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: ["iphone3", "iphone4", "iphone5"]
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: "left",
                top: "bottom",
                text: ["高", "低"],
                calculable: !0
            },
            toolbox: {
                show: !0,
                orient: "vertical",
                left: "right",
                top: "center",
                feature: {
                    dataView: {
                        readOnly: !1
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                name: "iphone3",
                type: "map",
                mapType: "china",
                roam: !1,
                label: {
                    normal: {
                        show: !0
                    },
                    emphasis: {
                        show: !0
                    }
                },
                data: [{
                    name: "北京",
                    value: this.randomData()
                }, {
                    name: "天津",
                    value: this.randomData()
                }, {
                    name: "上海",
                    value: this.randomData()
                }, {
                    name: "重庆",
                    value: this.randomData()
                }, {
                    name: "河北",
                    value: this.randomData()
                }, {
                    name: "河南",
                    value: this.randomData()
                }, {
                    name: "云南",
                    value: this.randomData()
                }, {
                    name: "辽宁",
                    value: this.randomData()
                }, {
                    name: "黑龙江",
                    value: this.randomData()
                }, {
                    name: "湖南",
                    value: this.randomData()
                }, {
                    name: "安徽",
                    value: this.randomData()
                }, {
                    name: "山东",
                    value: this.randomData()
                }, {
                    name: "新疆",
                    value: this.randomData()
                }, {
                    name: "江苏",
                    value: this.randomData()
                }, {
                    name: "浙江",
                    value: this.randomData()
                }, {
                    name: "江西",
                    value: this.randomData()
                }, {
                    name: "湖北",
                    value: this.randomData()
                }, {
                    name: "广西",
                    value: this.randomData()
                }, {
                    name: "甘肃",
                    value: this.randomData()
                }, {
                    name: "山西",
                    value: this.randomData()
                }, {
                    name: "内蒙古",
                    value: this.randomData()
                }, {
                    name: "陕西",
                    value: this.randomData()
                }, {
                    name: "吉林",
                    value: this.randomData()
                }, {
                    name: "福建",
                    value: this.randomData()
                }, {
                    name: "贵州",
                    value: this.randomData()
                }, {
                    name: "广东",
                    value: this.randomData()
                }, {
                    name: "青海",
                    value: this.randomData()
                }, {
                    name: "西藏",
                    value: this.randomData()
                }, {
                    name: "四川",
                    value: this.randomData()
                }, {
                    name: "宁夏",
                    value: this.randomData()
                }, {
                    name: "海南",
                    value: this.randomData()
                }, {
                    name: "台湾",
                    value: this.randomData()
                }, {
                    name: "香港",
                    value: this.randomData()
                }, {
                    name: "澳门",
                    value: this.randomData()
                }]
            }, {
                name: "iphone4",
                type: "map",
                mapType: "china",
                label: {
                    normal: {
                        show: !0
                    },
                    emphasis: {
                        show: !0
                    }
                },
                data: [{
                    name: "北京",
                    value: this.randomData()
                }, {
                    name: "天津",
                    value: this.randomData()
                }, {
                    name: "上海",
                    value: this.randomData()
                }, {
                    name: "重庆",
                    value: this.randomData()
                }, {
                    name: "河北",
                    value: this.randomData()
                }, {
                    name: "安徽",
                    value: this.randomData()
                }, {
                    name: "新疆",
                    value: this.randomData()
                }, {
                    name: "浙江",
                    value: this.randomData()
                }, {
                    name: "江西",
                    value: this.randomData()
                }, {
                    name: "山西",
                    value: this.randomData()
                }, {
                    name: "内蒙古",
                    value: this.randomData()
                }, {
                    name: "吉林",
                    value: this.randomData()
                }, {
                    name: "福建",
                    value: this.randomData()
                }, {
                    name: "广东",
                    value: this.randomData()
                }, {
                    name: "西藏",
                    value: this.randomData()
                }, {
                    name: "四川",
                    value: this.randomData()
                }, {
                    name: "宁夏",
                    value: this.randomData()
                }, {
                    name: "香港",
                    value: this.randomData()
                }, {
                    name: "澳门",
                    value: this.randomData()
                }]
            }, {
                name: "iphone5",
                type: "map",
                mapType: "china",
                label: {
                    normal: {
                        show: !0
                    },
                    emphasis: {
                        show: !0
                    }
                },
                data: [{
                    name: "北京",
                    value: this.randomData()
                }, {
                    name: "天津",
                    value: this.randomData()
                }, {
                    name: "上海",
                    value: this.randomData()
                }, {
                    name: "广东",
                    value: this.randomData()
                }, {
                    name: "台湾",
                    value: this.randomData()
                }, {
                    name: "香港",
                    value: this.randomData()
                }, {
                    name: "澳门",
                    value: this.randomData()
                }]
            }]
        }
    };
    randomData(){
        return Math.round(1e3 * Math.random());
    }
    getOtion3(){
        return {
            title: {
                text: "某站点用户访问来源",
                subtext: "纯属虚构",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
            },
            series: [{
                name: "访问来源",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [{
                    value: 335,
                    name: "直接访问"
                }, {
                    value: 310,
                    name: "邮件营销"
                }, {
                    value: 234,
                    name: "联盟广告"
                }, {
                    value: 135,
                    name: "视频广告"
                }, {
                    value: 1548,
                    name: "搜索引擎"
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }]
        }
    }
    getOtion2(){
        return {
            title: {
                text: "基础雷达图"
            },
            tooltip: {},
            legend: {
                data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
            },
            radar: {
                indicator: [{
                    name: "销售（sales）",
                    max: 6500
                }, {
                    name: "管理（Administration）",
                    max: 16e3
                }, {
                    name: "信息技术（Information Techology）",
                    max: 3e4
                }, {
                    name: "客服（Customer Support）",
                    max: 38e3
                }, {
                    name: "研发（Development）",
                    max: 52e3
                }, {
                    name: "市场（Marketing）",
                    max: 25e3
                }]
            },
            series: [{
                name: "预算 vs 开销（Budget vs spending）",
                type: "radar",
                data: [{
                    value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                    name: "预算分配（Allocated Budget）"
                }, {
                    value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                    name: "实际开销（Actual Spending）"
                }]
            }]
        }
    }
    getOtion = ()=>{
        return {
            title: {
                text: "堆叠区域图"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["邮件营销", "联盟广告", "视频广告"]
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: !0
            },
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "邮件营销",
                type: "line",
                stack: "总量",
                areaStyle: {
                    normal: {}
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "联盟广告",
                type: "line",
                stack: "总量",
                areaStyle: {
                    normal: {}
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "视频广告",
                type: "line",
                stack: "总量",
                areaStyle: {
                    normal: {}
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }]
        }
    };
    onChartReady(chart) {
        chart.hideLoading();
    }
    getLoadingOption() {
        return {
            text: "加载中...",
            color: "#4413c2",
            textColor: "#270240",
            maskColor: "rgba(194, 88, 86, 0.3)",
            zlevel: 0
        }
    }
    onChartClick(value){
        message.info("点击");
    }
    render(){
        let onEvents = {
            'click': this.onChartClick,
            //'legendselectchanged': this.onChartLegendselectchanged
        }
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Card title="折叠区域图">
                                <ReactEcharts
                                    option={this.getOtion()}
                                    style={{height: '350px', width: '100%'}}
                                    className='react_for_echarts' />
                            </Card>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Card title="基本雷达图">
                            <ReactEcharts
                                option={this.getOtion2()}
                                onChartReady={this.onChartReady}
                                loadingOption={this.getLoadingOption()}
                                showLoading={true} />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Card title="网站用户访问来源">
                                <ReactEcharts
                                    option={this.getOtion3()}
                                    style={{height: 300}}
                                    onChartReady={this.onChartReady}
                                    onEvents={onEvents} />
                            </Card>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Card title="iphone销量">
                                <ReactEcharts
                                    option={this.state.option || {}}
                                    style={{height: '350px', width: '100%'}}
                                    className='react_for_echarts' />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;