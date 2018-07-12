import React from 'react';
import { Row,Col,Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,RadialBarChart,RadialBar } from 'recharts';

import Bread from '../../../component/bread/index';


const bread =[
    {href:"/index",title:"首页",icon:"home"},
    {href:"",title:"图表",icon:""},
    {href:"/chart/recharts",title:"recharts",icon:""},
];
const data = [
    {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
    {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
    {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
    {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
    {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
    {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
    {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
];
class Recharts extends React.Component{
    render(){
        return (
            <div>
                <Bread bread={bread} />
                <Row gutter={8} className="index_row">
                    <Col md={12}>
                        <Card title="Demo1">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={data}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                                >

                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <div className="index_col textLeft">
                            <Card title="Demo2">
                                <ResponsiveContainer width="100%" height={300} >
                                    <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data}>
                                        <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise dataKey="uv" />
                                        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
                                        <Tooltip />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;