import echarts from "echarts";

export const columns = [{
    title: '名称',
    dataIndex: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
}, {
    title: '位置',
    dataIndex: 'position',
}, {
    title: '所在俱乐部',
    dataIndex: 'club',
}];
export const playerData = [
    {
        key: '1',
        name: '罗纳尔多',
        age: 32,
        position: '前锋',
        club: '皇家马德里',
    },{
        key: '2',
        name: '罗伯特巴乔',
        age: 33,
        position: '前腰、前锋',
        club: '尤文图斯',
    },{
        key: '3',
        name: '罗纳尔迪尼奥',
        age: 26,
        position: '影锋、边锋、前腰',
        club: '巴塞罗那',
    },{
        key: '4',
        name: '托蒂',
        age: 30,
        position: '前腰、前锋',
        club: '罗马',
    },{
        key: '5',
        name: '卡纳瓦罗',
        age: 30,
        position: '后卫',
        club: '皇家马德里',
    },{
        key: '6',
        name: '马尔蒂尼',
        age: 30,
        position: '后卫',
        club: 'AC米兰',
    },{
        key: '7',
        name: '舍普琴科',
        age: 28,
        position: '前锋',
        club: 'AC米兰',
    },{
        key: '8',
        name: '伊布拉希莫维奇',
        age: 29,
        position: '前锋',
        club: '国际米兰',
    },{
        key: '9',
        name: '舒梅切尔',
        age: 36,
        position: '门将',
        club: '曼彻斯特联',
    },
];

export const Listdata = [
    {
        pic: "http://p2.qhimgs4.com/t016245f1a43c5df071.jpg",
        href: "",
        title: "克鲁伊夫",
        content: "足球很简单。但想要踢得简单很难。"
    },
    {
        pic: "http://www.qqzhi.com/uploadpic/2015-01-09/212742941.jpg",
        href: "",
        title: "梅西",
        content: "为了梦想你必须去奋斗。你不得不为此努力和做出牺牲。"
    },
    {
        pic: "http://pic.qingting.fm/2015/0806/20150806165526947.jpg",
        href: "",
        title: "米卢",
        content: "态度决定一切！"
    },
    {
        pic: "https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4afbfbedab64034ff9329831aac379310a551d0d.jpg",
        href: "",
        title: "弗格森",
        content: "我这辈子最大的成就，就是把利物浦从TM的王座上踢了下来。"
    },
    {
        pic: "http://img1.gtimg.com/edu/pics/hv1/199/28/1077/70039264.jpg",
        href: "",
        title: "巴洛特利",
        content: "进球后我不会庆祝，因为进球是我的工作。邮差送信，你见他庆祝过吗？"
    },
    {
        pic: "http://img1.dongqiudi.com/fastdfs3/M00/09/B2/ChOxM1sY2zGAbr3PAALeZNw-kT4833.jpg",
        href: "",
        title: "罗纳尔迪尼奥",
        content: "我长得不好看。但我踢球很有魅力。"
    },
];

const data = ["罗纳尔多","罗纳尔迪尼奥","博阿滕","齐达内","劳德鲁普","格策","厄齐尔","罗本","里贝里","阿扎尔","布冯","兰帕德"];
const testData = [];
for (let i = 1; i <= 50; i++) {
    testData.push(parseInt(Math.random() * 300,10))
}

export const option = {
    title: {
        left: "center",
        text: "球员训练情况"
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: "cross"
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {},
            myTool1: {
                show: true,
                title: '自定义扩展方法1',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function () {
                    alert('近50天销量情况')
                }
            },
            myTool2: {
                show: true,
                title: '自定义扩展方法',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function () {
                    alert('近50天销量情况')
                }
            }
        }
    },
    xAxis: {
        data: data
    },
    yAxis: {},
    series: [{
        name: '训练增长',
        type: 'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 2, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            }
        },
        //coordinateSystem:"polar",
        data: testData
    }]
};