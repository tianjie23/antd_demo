export const menu = [
    {key: "/index", title: "首页", icon: "home"},
    {key: "/about", title: "项目介绍", icon: "star-o"},
    {
        key: "/general", title: "通用", icon: "star-o",
        sub: [
            {key: '/general/button', title: "按钮", icon: ""},
            {key: '/general/imgtable', title: "图标", icon: ""},
            {key: '/general/carousel', title: "轮播图", icon: ""},
        ]
    },
    // {
    //     key: "/layout", title: "布局", icon: "layout",
    //     sub: [
    //         {key: '/layout/row', title: "栅格", icon: ""},
    //         {key: '/layout/lay', title: "布局", icon: ""},
    //     ]
    // },
    {
        key: "/nav", title: "导航", icon: "database",
        sub: [
            {key: '/nav/affix', title: "固钉", icon: ""},
            {key: '/nav/bread', title: "面包屑", icon: ""},
            {key: '/nav/dropdown', title: "下拉菜单", icon: ""},
            {key: '/nav/menu', title: "导航菜单", icon: ""},
            {key: '/nav/pagin', title: "分页", icon: ""},
            {key: '/nav/steps', title: "步骤条", icon: ""},
        ]
    },
    {
        key: "/dataentry", title: "数据录入", icon: "exception",
        sub: [
            {key: '/dataentry/auto', title: "自动完成", icon: ""},
            {key: '/dataentry/cascader', title: "级联选择", icon: ""},
            {key: '/dataentry/checkbox', title: "多选框", icon: ""},
            {key: '/dataentry/datepicker', title: "日期选择框", icon: ""},
            {key: '/dataentry/form', title: "表单", icon: ""},
            {key: '/dataentry/input', title: "输入框", icon: ""},
            // {key: '/dataentry/inputnumber', title: "数字输入框", icon: ""},
            // {key: '/dataentry/mention', title: "提及", icon: ""},
            // {key: '/dataentry/rate', title: "评分", icon: ""},
            // {key: '/dataentry/radio', title: "单选框", icon: ""},
            // {key: '/dataentry/select', title: "选择器", icon: ""},
            // {key: '/dataentry/slider', title: "滑动输入条", icon: ""},
            // {key: '/dataentry/switch', title: "开关", icon: ""},
            // {key: '/dataentry/treeselect', title: "树选择", icon: ""},
            // {key: '/dataentry/timepicker', title: "时间选择框", icon: ""},
            // {key: '/dataentry/transfer', title: "穿梭框", icon: ""},
            // {key: '/dataentry/upload', title: "上传", icon: ""},
        ]
    },
    // {
    //     key: "/datashow", title: "数据显示", icon: "scan",
    //     sub: [
    //         {key: '/datashow/avatar', title: "头像", icon: ""},
    //         {key: '/datashow/badge', title: "徽标数", icon: ""},
    //         {key: '/datashow/calendar', title: "日历", icon: ""},
    //         {key: '/datashow/card', title: "卡片", icon: ""},
    //         {key: '/datashow/carousel', title: "走马灯", icon: ""},
    //         {key: '/datashow/collapse', title: "折叠面板", icon: ""},
    //         {key: '/datashow/list', title: "列表", icon: ""},
    //         {key: '/datashow/popover', title: "气泡卡片", icon: ""},
    //         {key: '/datashow/toolip', title: "文字提示", icon: ""},
    //         {key: '/datashow/table', title: "表格", icon: ""},
    //         {key: '/datashow/tabs', title: "标签页", icon: ""},
    //         {key: '/datashow/tabs', title: "标签", icon: ""},
    //         {key: '/datashow/timeline', title: "时间轴", icon: ""},
    //         {key: '/datashow/tree', title: "树形控件", icon: ""},
    //     ]
    // },
    {
        key: "/feedback", title: "反馈", icon: "solution",
        sub: [
            //{key: '/feedback/avatar', title: "警告提示", icon: ""},
            {key: '/feedback/modal', title: "对话框", icon: ""},
            {key: '/feedback/message', title: "全局提示", icon: ""},
            {key: '/feedback/info', title: "通知提示框", icon: ""},
            {key: '/feedback/progress', title: "进度条", icon: ""},
            {key: '/feedback/popconfirm', title: "气泡确认框", icon: ""},
            {key: '/feedback/spin', title: "加载中", icon: ""},
        ]
    },
    {
        key: "/Chart", title: "图表", icon: "area-chart",
        sub: [
            {key: '/Chart/echarts', title: "echarts", icon: ""},
            {key: '/Chart/recharts', title: "recharts", icon: ""},
        ]
    },
    {
        key: "/other", title: "其他", icon: "global",
        sub: [
            {key: '/other/editor', title: "富文本", icon: ""},
            {key: '/other/drag', title: "拖拽", icon: ""},
            {key: '/other/photo', title: "画廊", icon: ""},
            {key: '/other/map', title: "地图", icon: ""},
            {key: '/other/error', title: "错误页面", icon: ""},
        ]
    },
];