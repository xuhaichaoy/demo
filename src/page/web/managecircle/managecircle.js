import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import CircleItem from '../../../component/common/circleItem/circleItem';
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./managecircle.css";

import { SearchBar, Tabs, Button, WingBlank, WhiteSpace, Badge, PullToRefresh, Icon } from 'antd-mobile';

const tabs = [
    { title: <Badge>圈子</Badge> },
    { title: <Badge>发布</Badge> },
    { title: <Badge>回复</Badge> },
];


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
        const hei = this.state.height - 44;
        console.log(hei)

        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    render() {
        return (
            <div className="manageCircle">
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
                    <Tabs tabs={tabs}
                        initialPage={1}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'block', backgroundColor: '#fff' }}>
                            <CircleItem />
                            <div className="createBtnBox">
                                <div className ="createBtn">
                                    <i></i>
                                    <span>创建圈子</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'block', backgroundColor: '#fff' }}>
                            <CircleItem />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of fourth tab
                        </div>
                    </Tabs>

                    
                    
                  
                    

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
