import React from "react";
import logo from './logo.svg';
import Router from "./config/router";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ( <
      Router / >
    );
  }
}

export default App;