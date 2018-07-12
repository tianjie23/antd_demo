import React from 'react';
import {Row, Col, Icon, Timeline, List, Avatar, Calendar, Badge, Table} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {Link} from 'react-router-dom';
import zhCN from 'antd/lib/calendar/locale/zh_CN';

import Bread from '../../component/bread/index';
import {columns,playerData,Listdata,option} from './data'

import './index.less';

const bread = [
    {href: "/index", title: "首页", icon: "home"},
];

const Box = props => <div className="index_col">{props.children}</div>;



class Index extends React.Component {
    getListData = value => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    {type: 'warning', content: '射门训练'},
                    {type: 'success', content: '战术训练'},
                ];
                break;
            case 10:
                listData = [
                    {type: 'warning', content: '体能训练'},
                    {type: 'success', content: '技术训练'},
                    {type: 'error', content: '有氧训练'},
                ];
                break;
            case 15:
                listData = [
                    {type: 'warning', content: '放假'},
                ];
                break;
            default:
        }
        return listData || [];
    };
    dateCellRender = value => {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {
                    listData.map((item,index) => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        );
    };

    getMonthData = value => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    monthCellRender = value => {
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    render() {
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={6}>
                        <Box>
                            <Icon type="idcard" className="index_icon car" />
                            <div className="number">0</div>
                            <div>球员总数</div>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Icon type="user" className="index_icon fax" />
                            <div className="number">0</div>
                            <div>我的球员</div>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Icon type="wallet" className="index_icon camera" />
                            <div className="number">0</div>
                            <div>教练员</div>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Icon type="mail" className="index_icon mail" />
                            <div className="number">0</div>
                            <div>消息</div>
                        </Box>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col md={24}>
                        <ReactEcharts className="chartbg" option={option}
                                      notMerge={true}
                                      lazyUpdate={true}
                                      theme={"theme_name"}
                            //onChartReady={this.onChartReadyCallback}
                            //onEvents={EventsDict}
                            //opts={}
                        />
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col md={8}>
                        <div className="antd-list">
                            <div className="antd-list-title">
                                <h3>版本更新</h3>
                                <small>预计下次更新时间为2018年6月12日</small>
                                <a className="sync-bool">
                                    <Icon type="sync" />
                                </a>
                            </div>
                            <Timeline>
                                <Timeline.Item color="green">优化：会员注册时 [密码验证] 提示；</Timeline.Item>
                                <Timeline.Item color="green">修复：后台生成任意文件getshell漏洞；</Timeline.Item>
                                <Timeline.Item color="red">
                                    <p>新增列表页访客按需点击最新、热门、推荐、销量排序功能（需要模板支持）；</p>
                                    <p>新增产品列表页按参数搜索功能（需要模板支持）</p>
                                    <p>新增模板颜色自定义功能；</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <p>新增可视化编辑功能；</p>
                                    <p>新增标签模板制作功能，简化模板制作及修改方法；</p>
                                    <p>项目创建时间2018年6月12日</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <p>新增可视化编辑功能；</p>
                                    <p>新增标签模板制作功能，简化模板制作及修改方法；</p>
                                    <p>新增列表页访客按需点击最新、热门、推荐、销量排序功能（需要模板支持）；</p>
                                </Timeline.Item>
                            </Timeline>

                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="antd-list">
                            <div className="antd-list-title">
                                <h3>消息</h3>
                                <a className="sync-bool">
                                    <Icon type="sync" />
                                </a>
                            </div>
                            <List
                                itemLayout="horizontal"
                                dataSource={Listdata}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar
                                                src={item.pic ? item.pic : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                                                />
                                            }
                                            title={item.href ? <Link>{item.title}</Link> : item.title}
                                            description={item.content}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="antd-list">
                            <div className="antd-list-title">
                                <h3>球员</h3>
                                <a className="sync-bool">
                                    <Icon type="sync" />
                                </a>
                            </div>
                            <Table pagination={false} columns={columns} dataSource={playerData} size="middle" />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col md={24}>
                        <div className="antd-list">
                            <div className="antd-list-title">
                                <h3>日程安排</h3>
                                <a className="sync-bool">
                                    <Icon type="sync" />
                                </a>
                            </div>
                            <Calendar locale={zhCN} dateCellRender={this.dateCellRender}
                                      monthCellRender={this.monthCellRender}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index;