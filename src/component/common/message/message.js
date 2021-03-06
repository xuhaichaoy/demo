import React from "react";
import { Drawer } from 'antd-mobile';
import "./message.css";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            open: false,
        }
    };
    componentDidMount() {
        console.log(111111111111)
        
    }

    onOpenChange = (flag) => {
        if(flag) {
            this.setState({ show: !this.state.show });
            console.log(this.state.open)
            setTimeout(() => {
                this.setState({ open: !this.state.open })
            }, 0)
        }else {
            this.setState({ open: !this.state.open });
            setTimeout(() => {
                this.setState({ show: !this.state.show })
            }, 200)
        }
       
    }
    render() {
        const sidebar = (
            <div className = "messageItemBox">
                <div className = "messageItem">
                    <div className = "messageIcons">
                        
                    </div>
                    <div className = "messageTitle">
                        说说
                    </div>
                </div>
                <div className = "messageItem">
                    <div className = "messageIcons">
                        
                    </div>
                    <div className = "messageTitle">
                        问问
                    </div>
                </div>
            </div>
        );
        let drawerDom = ''
        if(this.state.show) {
            drawerDom = (
                <Drawer
                    className="my-drawer messageDrawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    position="bottom"
                    onOpenChange={this.onOpenChange.bind(this, false)}
                >
                </Drawer>
            )
        }
        return (
            <div className = "message">
                <div className="MessageBox">
                    <div className = "messageIcon" onClick={this.onOpenChange.bind(this, true)}>
                        
                    </div>
                </div>
                {drawerDom}
            </div>
        );
    }
}

export default Message