import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./home.css";

import { SearchBar, Button, WingBlank, Tabs, WhiteSpace, Badge, PullToRefresh } from 'antd-mobile';


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


const tabs = [
  { title: <Badge>关注</Badge> },
  { title: <Badge>推荐</Badge> },
//   { title: <Badge dot>Third Tab</Badge> },
];

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
}

class TabExample extends React.Component{
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
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    render() {
        return (
            <div className="tabsIndex">
                <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div className = "tabItem" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
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
                    {this.state.data.map(i => (
                    <div key={i} style={{ textAlign: 'center', padding: 20 }}>
                        {this.state.down ? 'pull down' : 'pull up'} {i}
                    </div>
                    ))}
                </PullToRefresh>
                </div>
                <div className = "tabItem" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
                </Tabs>
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
