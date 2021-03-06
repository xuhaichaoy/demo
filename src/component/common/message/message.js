import React from "react";
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
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
        const sidebar = (<List>
            {[0, 1, 2, 3].map((i, index) => {
              if (index === 0) {
                return (<List.Item key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >Category</List.Item>);
              }
              return (<List.Item key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >Category{index}</List.Item>);
            })}
          </List>);
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