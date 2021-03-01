import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./personal.css";

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
            <div className="personal">
               <div className ="personalTopBox">
                   <div className ="personalTop">
                       
                   </div>
               </div>
               <div className="personalInfoBox">
                   <div className="personalInfoImage">
                       <img src = "//wcdn1.cgyouxi.com/avatar/women_big.jpg"/>
                   </div>
                   <div className="personalInfoEditBtn">
                       <i></i>
                       <span>编辑资料</span>
                   </div>
                   <div className="personInfoUser">
                       <div className="personalName">
                           <span>海超</span>
                           <i></i>
                       </div>
                       <div className="personalSchool">
                           北京大学bliabliablia
                       </div>
                   </div>
                   <div className="personalWord">
                       个性签名个性签名个性签名个性签名个性签名个性签名个性签名
                   </div>
               </div>
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
                <TabExample />
            </div>
        );
    }
}

export default withRouter(App);
