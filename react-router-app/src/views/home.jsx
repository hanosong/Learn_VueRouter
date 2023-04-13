import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { witheRouter } from "../hoc";
class Home extends PureComponent {

  navigateTo = (path) => {
    // 使用增强后传入的useNavigate
    this.props.router.navigate(path);
  }
  render() {
    return (
      <div>
        Home
        <h4>这里是home页</h4>
        <div className="home-nav">
          <Link to="/home/recommend">推荐</Link> | <Link to="/home/ranking">排行榜</Link>
          <div style={{ marginTop: '10px' }}>
            <Button type="primary" icon={<SearchOutlined />} onClick={e => this.navigateTo('/home/songmenu')}>歌单menu</Button>
          </div>
        </div>
        {/* 路由组件的占位组件，决定组件挂载到哪 */}
        <Outlet />
      </div>
    );
  }
};

export default witheRouter(Home);
