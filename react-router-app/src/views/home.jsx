import React, { memo } from "react";
import { Link, Outlet } from "react-router-dom";
const Home = memo(() => {
  return (
    <div>
      Home
      <h4>这里是home页</h4>
      <div className="home-nav">
        <Link to="/home/recommend">推荐</Link>|
        <Link to="/home/ranking">排行榜</Link>
      </div>
      {/* 路由组件的占位组件，决定组件挂载到哪 */}
      <Outlet />
    </div>
  );
});

export default Home;
