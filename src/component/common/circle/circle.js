import React from "react";
import { List } from 'antd-mobile';
import "./circle.css";
const Item = List.Item;

class Comment extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className = "circleLatestBox">
                <div className = "circleLatestItem">
                    <div className = "circleLatestItemContent">
                        <div className="circleLatestComment">
                            <div className="latestIcon">
                                
                            </div>
                            <div className="latestNum">
                                3
                            </div>
                        </div>
                        <div className="circleLatestContent">
                            <div className ="circleLatestName">
                                asdasdasdasd
                            </div>
                            <div className ="circleLatestCBox">
                                <div className="circleLatestcLeft">
                                    <img src= "//pic.cgyouxi.com/orange/upload/202012/79031351_730e30a97d622308c637df4271bbdbfd.jpg!n300" />
                                </div>
                                <div className="circleLatestcCenter">
                                    asdasdhk
                                </div>
                                <div className="circleLatestcRight">
                                    更新于2021-02-28
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "circleLatestImage">
                        <img src = "//pic.cgyouxi.com/orange/title/1606757715_1823.gif!n600"/>
                    </div>
                </div>
                <div className = "circleLatestItem">
                    <div className = "circleLatestItemContent">
                        <div className="circleLatestComment">
                            <div className="latestIcon">
                                
                            </div>
                            <div className="latestNum">
                                3
                            </div>
                        </div>
                        <div className="circleLatestContent">
                            <div className ="circleLatestName">
                                asdasdasdasd
                            </div>
                            <div className ="circleLatestCBox">
                                <div className="circleLatestcLeft">
                                    <img src= "//pic.cgyouxi.com/orange/upload/202012/79031351_730e30a97d622308c637df4271bbdbfd.jpg!n300" />
                                </div>
                                <div className="circleLatestcCenter">
                                    asdasdhk
                                </div>
                                <div className="circleLatestcRight">
                                    更新于2021-02-28
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "circleLatestImage">
                        <img src = "//pic.cgyouxi.com/orange/title/1606757715_1823.gif!n600"/>
                    </div>
                </div>
                <div className = "circleLatestItem">
                    <div className = "circleLatestItemContent">
                        <div className="circleLatestComment">
                            <div className="latestIcon">
                                
                            </div>
                            <div className="latestNum">
                                3
                            </div>
                        </div>
                        <div className="circleLatestContent">
                            <div className ="circleLatestName">
                                asdasdasdasd
                            </div>
                            <div className ="circleLatestCBox">
                                <div className="circleLatestcLeft">
                                    <img src= "//pic.cgyouxi.com/orange/upload/202012/79031351_730e30a97d622308c637df4271bbdbfd.jpg!n300" />
                                </div>
                                <div className="circleLatestcCenter">
                                    asdasdhk
                                </div>
                                <div className="circleLatestcRight">
                                    更新于2021-02-28
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "circleLatestImage">
                        <img src = "//pic.cgyouxi.com/orange/title/1606757715_1823.gif!n600"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment