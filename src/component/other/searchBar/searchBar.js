import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';


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
ReactDOM.render(<Search />, mountNode);