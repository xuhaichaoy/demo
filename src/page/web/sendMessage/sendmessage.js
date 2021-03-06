import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import { NavBar, Icon, List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import "./sendmessage.css";

class TextareaItemExample extends React.Component {
    componentDidMount() {
    }
    render() {
      const { getFieldProps } = this.props.form;
      return (
        <div>
          <TextareaItem
              {...getFieldProps('count', {
                initialValue: '',
              })}
              className = "textareaSend"
              placeholder="说点什么呢..."
              rows={10}
              count={3000}
            />
          
        </div>
      );
    }
}
  
const TextareaItemExampleWrapper = createForm()(TextareaItemExample);


class CirclePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    };

    componentDidMount() {
        // this.autoFocusInst.focus();

    }

    componentWillReceiveProps(prevProps, prevState) {

    }

    
    

    render() {
        return (
            <div className="sendMessage">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    发布说说
                </NavBar>
                <TextareaItemExampleWrapper />
            </div>
        );
    }
}

export default (CirclePage);
