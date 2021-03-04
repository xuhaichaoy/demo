import React from "react";
import { SearchBar  } from 'antd-mobile';
import "./search.css";

class Search extends React.Component {
    state = {
      value: '美食',
    };
    componentDidMount() {
    }
  
    render() {
      return (<div>
        <SearchBar placeholder="Search" maxLength={8} className="topSearch"/>
      </div>);
    }
}
  
  
export default Search