import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Circle from '../../../component/common/circle/circle';
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./allcircle.css";

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
        };
       
    }
    componentDidMount() {
        const hei = this.state.height - 87.5;

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    render() {
        return (
            <div className="allcircle">
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
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>

                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>
                    <div className="allCircleItem">
                        
                        <div className="allCircleItemMiddle">
                            <div className="allCircleItemImg">
                                <img src="//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                            </div>
                            <div className="allCircledetail">
                                <div className="allCircleItemMiddleName">
                                    那么啊实打实的
                                </div>
                                <div className="allCircleTips">
                                    <div className ="allCircleTipsItem">
                                        <span>帖子</span>
                                        <i>1.3k</i>
                                    </div>
                                    <div className ="allCircleTipsItem">
                                        <span>成员</span>
                                        <i>1.1w</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allCircleItemBtn">
                            加入
                        </div>
                    </div>

                    

                  
                    

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
