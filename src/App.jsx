import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Main from './component/main/index';

import Index from './page/index/index';
import About from './page/about/index';
import Error from './page/error/index';
import ButtonPage from './page/general/button/index';
import ImgTablePage from './page/general/imgtable/index';
import CarouselPage from './page/general/carousel/index';
import AffixPage from './page/nav/affix/index';
import BreadPage from './page/nav/bread/index';
import DropDownPage from './page/nav/dropdown/index';
import MenuPage from './page/nav/menu/index';
import PaginPage from './page/nav/pagin/index';
import StepsPage from './page/nav/steps/index';

import AutoPage from './page/dataentry/auto/index';
import CascaderPage from './page/dataentry/cascader/index';
import CheckBoxPage from './page/dataentry/checkbox/index';
import DatepickerPage from "./page/dataentry/datepicker/index";
import FormPage from "./page/dataentry/form/index";
import InputPage from "./page/dataentry/input/index";

import ModalPage from "./page/feedback/modal/index";
import MessagePage from "./page/feedback/message/index";
import InfoPage from "./page/feedback/info/index";
import ProgressPage from "./page/feedback/progress/index";
import PopconfirmPage from "./page/feedback/popconfirm/index";
import SpinPage from "./page/feedback/spin/index";

import EditorPage from "./page/other/editor/index";
import DragPage from "./page/other/drag/index";
import PhotoPage from "./page/other/photo/index";
import MapPage from "./page/other/map/index";

import Echarts from "./page/chart/echarts/index";
import Recharts from "./page/chart/recharts/index";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <LocaleProvider locale={zh_CN}>
                    <Main>
                        <Switch>
                            {/*<Route exact path="/" component={Index}/>*/}
                            <Redirect exact from="/" to="/index"/>
                            <Route path="/index" component={Index}/>
                            <Route path="/about" component={About}/>
                            <Route path="/general/button" component={ButtonPage}/>
                            <Route path="/general/imgtable" component={ImgTablePage}/>
                            <Route path="/general/carousel" component={CarouselPage}/>
                            <Route path="/nav/affix" component={AffixPage}/>
                            <Route path="/nav/bread" component={BreadPage}/>
                            <Route path="/nav/dropdown" component={DropDownPage}/>
                            <Route path="/nav/menu" component={MenuPage}/>
                            <Route path="/nav/pagin" component={PaginPage}/>
                            <Route path="/nav/steps" component={StepsPage}/>
                            <Route path="/dataentry/auto" component={AutoPage}/>
                            <Route path="/dataentry/cascader" component={CascaderPage}/>
                            <Route path="/dataentry/checkbox" component={CheckBoxPage}/>
                            <Route path="/dataentry/datepicker" component={DatepickerPage}/>
                            <Route path="/dataentry/form" component={FormPage}/>
                            <Route path="/dataentry/input" component={InputPage}/>

                            <Route path="/feedback/modal" component={ModalPage}/>
                            <Route path="/feedback/message" component={MessagePage}/>
                            <Route path="/feedback/info" component={InfoPage}/>
                            <Route path="/feedback/progress" component={ProgressPage}/>
                            <Route path="/feedback/popconfirm" component={PopconfirmPage}/>
                            <Route path="/feedback/spin" component={SpinPage}/>

                            <Route path="/other/editor" component={EditorPage}/>
                            <Route path="/other/drag" component={DragPage}/>
                            <Route path="/other/photo" component={PhotoPage}/>
                            <Route path="/other/map" component={MapPage}/>

                            <Route path="/chart/echarts" component={Echarts}/>
                            <Route path="/chart/recharts" component={Recharts}/>
                            <Route component={Error}/>
                        </Switch>
                    </Main>
                </LocaleProvider>
            </BrowserRouter>
        )
    }
}

export default App;