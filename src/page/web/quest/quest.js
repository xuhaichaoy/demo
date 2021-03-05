import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./quest.css";
import "swiper/swiper-bundle.css"

import { PullToRefresh } from 'antd-mobile';



function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class CirclePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            newlist: [1,1,1,1,1,1,1],
        }
    };

    componentDidMount() {
        const hei = this.state.height - 94;

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);

    }

    componentWillReceiveProps(prevProps, prevState) {

    }

    detail = () => {
        this.props.history.push("/circledetail/1");
    }; 
    
    allCircle = () => {
        this.props.history.push("/allcircle");
    }

    manageCircle = () => {
        this.props.history.push("/managecircle");
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
                    <div className = "questionBox">
                        <div className="hotQuestBox">
                            <div className="hotQuestTitle">
                                <div className = "hotQuestLeft">
                                    热门问题
                                </div>
                                <div className = "hotQuestRight">
                                    查看更多
                                </div>
                            </div>
                            <div className = "hotItemBox">
                                <div className = "hotItemBoxTitle">
                                    <div className="hotItemLeft">
                                        <div className="hotItemIcon">
                                            
                                        </div>
                                        <div className="hotItemMiddle">
                                            阿萨的贺卡上的框架和阿萨
                                        </div>
                                    </div>
                                  
                                    <div className="hotItemRight">
                                        
                                    </div>
                                </div>
                                <div className = "hotItemBoxContent">
                                    <div className="hotAnswerBox">
                                        <span className = "answerSpan">热门回答</span>
                                        <i>123</i>
                                    </div>
                                    <div className = "hotAnswerFirst">
                                        <div className="hotUser">
                                            那么:
                                        </div>
                                        <div className="hotContent">
                                            啊水水水水水水水水水水水水水水水水水水
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "hotItemBox">
                                <div className = "hotItemBoxTitle">
                                    <div className="hotItemLeft">
                                        <div className="hotItemIcon">
                                            
                                        </div>
                                        <div className="hotItemMiddle">
                                            阿萨的贺卡上的框架和阿萨
                                        </div>
                                    </div>
                                  
                                    <div className="hotItemRight">
                                        
                                    </div>
                                </div>
                                <div className = "hotItemBoxContent">
                                    <div className="hotAnswerBox">
                                        <span className = "answerSpan">热门回答</span>
                                        <i>123</i>
                                    </div>
                                    <div className = "hotAnswerFirst">
                                        <div className="hotUser">
                                            那么:
                                        </div>
                                        <div className="hotContent">
                                            啊水水水水水水水水水水水水水水水水水水
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "hotItemBox">
                                <div className = "hotItemBoxTitle">
                                    <div className="hotItemLeft">
                                        <div className="hotItemIcon">
                                            
                                        </div>
                                        <div className="hotItemMiddle">
                                            阿萨的贺卡上的框架和阿萨
                                        </div>
                                    </div>
                                  
                                    <div className="hotItemRight">
                                        
                                    </div>
                                </div>
                                <div className = "hotItemBoxContent">
                                    <div className="hotAnswerBox">
                                        <span className = "answerSpan">热门回答</span>
                                        <i>123</i>
                                    </div>
                                    <div className = "hotAnswerFirst">
                                        <div className="hotUser">
                                            那么:
                                        </div>
                                        <div className="hotContent">
                                            啊水水水水水水水水水水水水水水水水水水
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className = "newQuestBox">
                            <div className="newQuestBoxTitle">
                                最新问题
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "newItemBox">
                                <div className = "newItemTopBox">
                                    <div className = "newItemTitle">
                                        按时间快点哈教科书的接口?
                                    </div>
                                    <div className="newItemIcon">
                                        
                                    </div>
                                </div>
                                <div className ="newAnswerNumBox">
                                    <span className="newSpan">回答</span>
                                    <i>22</i>
                                </div>
                                <div className = "newUserBox">
                                    <div className="newUserBoxLeft">
                                        <div className= "newUserImg">
                                            <img src = "//wcdn1.cgyouxi.com/avatar/12835282_1592221708_big.jpg" />
                                        </div>
                                        <div className= "newUserName">
                                            阿斯顿觉得:
                                        </div>
                                        <div className="newUserContent">
                                            打卡工商局的嘎江户时代
                                        </div>
                                    </div>
                                    <div className = "newUserBoxRight">
                                        <div className ="newUserTime">
                                            2小时前
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </div>



                    </div>

                    
                    

                </PullToRefresh>
                
            </div>
        );
    }
}

export default (CirclePage);
