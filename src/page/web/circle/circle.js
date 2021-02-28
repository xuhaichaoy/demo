import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Swiper from "swiper";
import Circle from '../../../component/common/circle/circle';
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./circle.css";
import "swiper/swiper-bundle.css"

import { SearchBar, Button, WingBlank, WhiteSpace, Badge, PullToRefresh, Icon } from 'antd-mobile';


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
            newlist: [1,1,1,1,1,1,1],
        };
       
    }
    componentDidMount() {
        const hei = this.state.height - 87.5;

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
        new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
            virtual: {
              slides: this.state.newlist,
            },
        });

    }
    render() {
        return (
            <div className="circle">
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        minHeight: this.state.height,
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        setTimeout(() => {
                            this.setState({ refreshing: false });
                        }, 1000);
                    }}
                >

                    <div className = "mineCircle">
                        <div className="mineCircleTop">
                            <div className="mineCircleName">
                                我的圈子
                            </div>
                            <div className="mineCircleMore">
                                查看更多
                            </div>
                        </div>
                        <div className = "mineCircleContent">
                            <div className = "mineCircleItemBox">
                                <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                <span>建行卡圣诞开始</span>
                            </div>
                            <div className = "mineCircleItemBox">
                                <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                <span>hhhhhhhh</span>
                            </div>
                            <div className = "mineCircleItemBox">
                                <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                <span>呀呀呀呀呀</span>
                            </div>
                            <div className = "mineCircleItemBox">
                                <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                <span>建行卡圣就开始</span>
                            </div>
                            <div className = "mineCircleItemBox">
                                <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                <span>建行卡圣诞开始</span>
                            </div>
                        </div>
                    </div>

                    <div className="mineCareful">
                        <div className = "mineCarefullyBox">
                            <div className = "mineCareTopBox">
                                <div className = "mineCareTopName">
                                    精选推荐
                                </div>

                                <div className = "mineCareTopMore">
                                    查看更多
                                </div>
                            </div>
                            <div className="mineCareTopTips">
                                最适合你的都在这了
                            </div>
                        </div>
                        <div className="swiper-container swiperContainer">
                            <div className="swiper-wrapper">
                                {this.state.newlist.map((item) => {
                                return (
                                    <div className="swiper-slide" key={item}>
                                        <img
                                            className="swiperImgBox"
                                            src="//pic.cgyouxi.com/orange/title/1606757715_1823.gif!n600"
                                        />
                                        <div className ="swiperTitleBox">
                                            <div className = "swiperTitleName">
                                                BliaBliaBlia
                                            </div>
                                            <div className = "swiperTitleBtn">
                                                立即加入
                                            </div>
                                        </div>
                                        <div className = "swiperBottomBox">
                                            <div className="swiperBottomIcon">
                                                <img src = "//pic.cgyouxi.com/orange/upload/202012/79031351_730e30a97d622308c637df4271bbdbfd.jpg!n300" />
                                            </div>
                                            <div className = "swiperBottomContent">
                                                <div className="swiperBottomCName">
                                                    你怎么知道?
                                                </div>
                                                <div className="swiperBottomCNum">
                                                    成员207人
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                                })}
                            </div>
                        </div>
                    </div>

                    <Circle/>
                    

                </PullToRefresh>
                
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
                <Search />
                <TabExample />
            </div>
        );
    }
}

export default withRouter(App);
