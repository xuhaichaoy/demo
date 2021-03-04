import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./home.css";

import { Tabs, Badge, PullToRefresh, Icon } from 'antd-mobile';

const tabs = [
  { title: <Badge>关注</Badge> },
  { title: <Badge>推荐</Badge> },
];

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    }
  };

  componentDidMount() {
    const hei = this.state.height - 137.5;

    console.log(hei, ReactDOM.findDOMNode(this.ptr).offsetTop, ReactDOM.findDOMNode(this.ptr))
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);

  }

  componentWillReceiveProps(prevProps, prevState) {

  }


  detail = (i) => {
    console.log(i)
    console.log(this.props)
    this.props.history.push("/detail/" + i);
  };  

  render() {
    return (
      <div className="tabsIndex">
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className="tabItem" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
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
              <div className="attentBox">
                <div className="attention">
                  <div className="attentionBox">
                    <div className="attentionIcons">

                    </div>
                    <div className="attentionTips">
                      当前还没有关注的相关内容号、圈子等
                    </div>
                    <div className="addAttentionBtn">
                      添加关注
                    </div>
                  </div>
                </div>

                <div className="attentionListBox">
                  <div className="attentionListTips">
                    <div className="attentTips">
                      您可能感兴趣
                  </div>
                    <div className="attentBtns">
                      <i></i>
                      <span>换一批</span>
                    </div>
                  </div>
                  {this.state.data.map(i => (
                    <div key={i} className="attentionListItem">
                      1111111111111111111111111111111111111111
                    </div>
                  ))}
                </div>
              </div>


            </PullToRefresh>
          </div>
          <div className="tabItem" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
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
              <div className="cardBox">
                {this.state.data.map(i => (
                  <div key={i} className="cardItem" onClick={this.detail.bind(this, i)}>
                    <div className="cardTopBox">
                      <div className="cardImg">
                        <img src="//wcdn1.cgyouxi.com/avatar/55865771_1594108289_middle.jpg" />
                        <div className="cardNameBox">
                          <div className="cardName">
                            橙子🍊
                        </div>
                          <div className="cardSchool">
                            北京大学2018级
                        </div>
                        </div>

                        <div className="collectBtn">
                          <Icon type="ellipsis" />
                        </div>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardWords">
                        魔教少主如何追杀正道？
                        “大家好，我叫枕玉，因为偷偷修魔被师尊推下山崖结束了罪e的一生。但是我不会就这样轻易地狗带！现征集好心人给我打999999灵力让我一刀9999999，一拳一个小朋友，事成之后我给你个天蓬元帅当当。”（划掉）
                        本片又名《如何看待魔教少主被一群正道包围不知所措》
                        枕玉大难不死，为了拿到藏在秘密禁地的力量，化名青禾与自己带着“正道buff”的仇人一起走上了寻秘之路。在这次意料之外的旅途之中，枕玉找到了杀死“正道”的办法……
                    </div>
                      <div className="cardContentImgBox">
                        <img src="//pic.cgyouxi.com/orange/upload/202012/79031554_2fa4ff1e09657db2a72f3d4f3b2ef859.jpg!n300" className="cardContentImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="cardContentImgItem" />
                        <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="cardContentImgItem" />
                      </div>
                    </div>
                    <div className="cardBtnsBox">
                      <div className="cardBtnsItem">
                        <i className="zan"></i>
                        <span>6</span>
                      </div>
                      <div className="cardBtnsItem">
                        <i className="comment"></i>
                        <span>2</span>
                      </div>
                      <div className="cardBtnsItem">
                        <i className="face"></i>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </PullToRefresh>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default (HomePage);
