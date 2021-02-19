import React from "react";
import { List } from 'antd-mobile';
import "./like.css";
const Item = List.Item;

class Like extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="likeBox">
                <List className="my-list">
                    <Item>
                        <div className = "likeBoxItem">
                            <div className="likeImage">
                                <img src="//wcdn1.cgyouxi.com/avatar/4821709_1604752251_middle.jpg" className="likeUserImage" />
                            </div>
                            <div className = "likeConnent">
                                <div className = "likeUserName">
                                    askasjkdhas
                                </div>
                                <div className = "likeUserTime">
                                    2012-12-12 12:12:12
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div className = "likeBoxItem">
                            <div className="likeImage">
                                <img src="//wcdn1.cgyouxi.com/avatar/4821709_1604752251_middle.jpg" className="likeUserImage" />
                            </div>
                            <div className = "likeConnent">
                                <div className = "likeUserName">
                                    askasjkdhas
                                </div>
                                <div className = "likeUserTime">
                                    2012-12-12 12:12:12
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div className = "likeBoxItem">
                            <div className="likeImage">
                                <img src="//wcdn1.cgyouxi.com/avatar/4821709_1604752251_middle.jpg" className="likeUserImage" />
                            </div>
                            <div className = "likeConnent">
                                <div className = "likeUserName">
                                    askasjkdhas
                                </div>
                                <div className = "likeUserTime">
                                    2012-12-12 12:12:12
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div className = "likeBoxItem">
                            <div className="likeImage">
                                <img src="//wcdn1.cgyouxi.com/avatar/4821709_1604752251_middle.jpg" className="likeUserImage" />
                            </div>
                            <div className = "likeConnent">
                                <div className = "likeUserName">
                                    askasjkdhas
                                </div>
                                <div className = "likeUserTime">
                                    2012-12-12 12:12:12
                                </div>
                            </div>
                        </div>
                    </Item>
                    
                </List>

            </div>
        );
    }
}

export default Like