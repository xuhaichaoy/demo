import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Circle from '../../../component/common/circle/circle';
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./circledetail.css";

import { Button, WingBlank, WhiteSpace, Badge, PullToRefresh, Icon } from 'antd-mobile';
const Search = lazy(() => import('../../../component/common/search/search'))

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        }
    };

    componentDidMount() {
        const hei = this.state.height - 44;

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    componentWillReceiveProps(prevProps, prevState) {

    }

    render() {
        return (
            <div>
                <Search />
                <div className="circledetail">
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
                        <div className="CircleDetail">
                            <div className="detailBanner">
                                <div className="bannerShortIcon">
                                    <img src = "//pic.cgyouxi.com/orange/upload/202102/79135432_724bf8b1a12cc605b504f9a34d4b2fbc.png!n300" />
                                </div>
                            </div>
                            <div className="bannerIntro">
                                <div className="bannerTopBox">
                                    <div className="bannerBoxName">
                                        考研专业哈哈哈哈
                                    </div>
                                    <div className="bannerBoxBtn">
                                        加入
                                    </div>
                                </div>
                                <div className="bannerBoxTips">
                                    <div className="bannerInfor">
                                        <div className="inforSpan">
                                            <span>帖子</span>
                                            <i>13</i>
                                        </div>
                                        <div className="inforSpan">
                                            <span>成员</span>
                                            <i>123</i>
                                        </div>
                                    </div>
                                    <div className="bannerIntroduce">
                                        哈哈哈哈哈哈哈哈哈哈<br />
                                        啊啊啊啊啊啊啊啊啊啊啊啊啊<br />
                                        水水水水水水水水水水水水水水水水水水水<br />
                                        阿斯利康大家卢卡斯就<br />
                                        努力吧           啊啊啊啊<br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <Circle/>
                        

                    </PullToRefresh>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(App);
