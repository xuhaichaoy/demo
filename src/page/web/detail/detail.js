import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./detail.css";

import { NavBar, SearchBar, Button, WingBlank, Tabs, WhiteSpace, Badge, PullToRefresh, Icon } from 'antd-mobile';


class Search extends React.Component {
    state = {
        value: '美食',
    };
    componentDidMount() {
    }

    render() {
        return (<div>
            <SearchBar placeholder="Search" maxLength={8} />
        </div>);
    }
}


const tabs = [
    { title: <Badge>回复</Badge> },
    { title: <Badge>点赞</Badge> },
    { title: <Badge>转发</Badge> },
    { title: <Badge>收藏</Badge> },
    //   { title: <Badge dot>Third Tab</Badge> },
];

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };
    }
    componentDidMount() {
        // const hei = this.state.height - 87.5;
        // console.log(hei, ReactDOM.findDOMNode(this.ptr).offsetTop, ReactDOM.findDOMNode(this.ptr))
        // setTimeout(() => this.setState({
        //     height: hei,
        //     data: genData(),
        // }), 0);

    }

    handleClick = (e) => {
    };

    render() {
        return (
            <div className="detailIndex">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >Detail详情页</NavBar>
                <div className="detailContent">
                    <div className="detailText">
                        唉，士大夫喀什地方骄傲撒大家看法哈桑雕刻技法合适的卡就发啊是大家看法第三方撒地方撒地方撒地方是的就
                        按时打卡激发函数的肌肤上的飞机哈士大夫喀什地方撒地方速度加快恢复咯技术的发上雕刻技法是大家看法和
                        困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了困了
                    </div>
                    <div className="detailImgs">
                        <img src="//pic.cgyouxi.com/orange/upload/202012/79031554_2fa4ff1e09657db2a72f3d4f3b2ef859.jpg!n300" className="detailImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="detailImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="detailImgItem" />
                    </div>
                </div>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fourth tab
                    </div>
                </Tabs>
                <WhiteSpace />
                <div className="bottomTips">
                    <div className="bottomReplyHidden"  onClick={this.handleClick}>
                        <div className="replyHiddenIcon">
                        </div>
                        <span>写回复...</span>
                    </div>
                    <div className = "bottomLike bottomItem">
                        <i></i>
                    </div>
                    <div className = "bottomForward bottomItem">
                        <i></i>
                    </div>
                    <div className = "bottomFav bottomItem">
                        <i></i>
                    </div>

                </div>

                <div>
                    
                </div>


            </div>
        )
    }
}



// const Anchor = lazy(() => import('../anchor/anchor'))
// const { Meta } = Card;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    componentDidMount() {

    }
    componentWillReceiveProps(prevProps, prevState) {

    }

    
    render() {
        return (
            <div>
                {/* <Search /> */}
                <TabExample />
            </div>
        );
    }
}

export default withRouter(App);
