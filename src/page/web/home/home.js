import React from "react";
import lazy from '../../../config/lazy'
// import { List, Card, Divider, Icon, Tag } from "antd";
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
import { DatePicker } from 'antd-mobile';
import "./home.css";

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
      <div className="mainPage">
        <div className="mainContent">
            
        </div>
        
      </div>
    );
  }
}

export default withRouter(App);
