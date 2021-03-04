import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./mine.css";

import { List, SearchBar, Tabs, Button, WingBlank, WhiteSpace, Badge, PullToRefresh, Icon } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            disabled: false,
        };
       
    }
    componentDidMount() {

       
    }
    render() {
        return (
            <div className="mine">
                <div className="mineTopBox">
                    <div className="mineTopBoxBtn">
                        <span>个人主页</span>
                        <i></i>
                    </div>
                    <div className="mineTopUserContent">
                        <div className = "mineUserBox">
                            <img src = "//wcdn1.cgyouxi.com/avatar/women_big.jpg" />
                            <div className = "mineUserName">
                                海超
                            </div>
                        </div>
                        <div className ="mineUserTips">
                            <div className="mineUserItem">
                                <i>2</i>
                                <span>关注</span>
                            </div>
                            <div className="mineUserItem">
                                <i>2</i>
                                <span>粉丝</span>
                            </div>
                            <div className="mineUserItem">
                                <i>2</i>
                                <span>收藏</span>
                            </div>
                            <div className="mineUserItem">
                                <i>2</i>
                                <span>草稿箱</span>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="mineContent">
               
                    <List renderHeader={() => ''} className="my-list">
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            我的消息
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            我的足迹
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            手机通讯录
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            APP分享
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            清理缓存
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            黑名单
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            设置
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            className="myMineItem"
                        >
                            关于
                        </Item>
                    
                    </List>
                    <List renderHeader={() => 'HaiChao 2021'} className="my-list1">
                        
                    
                    </List>
                
                </div>
                
            </div>
        )
    }
}



// const Anchor = lazy(() => import('../anchor/anchor'))
// const { Meta } = Card;

class MinePage extends React.Component {
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
                <TabExample />
            </div>
        );
    }
}

export default (MinePage);
