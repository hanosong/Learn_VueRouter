import {
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Button } from 'antd'
import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Recommend from "./views/HomeComponents/Recommend";
import Ranking from "./views/HomeComponents/Ranking";
import Category from "./views/Category";
import Order from "./views/Order";
import SongMenu from "./views/HomeComponents/SongMenu";
function App() {
  const nav = useNavigate();
  const navigateTo = (path) => {
    nav(path);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <span>header</span>
          <div className="nav">
            {/* <Link to="/home">首页</Link> | <Link to="/about">关于</Link> */}
            <NavLink
              to="/home"
              style={({ isActive }) => ({ color: isActive ? "#719CD3" : "" })}
            >
              首页
            </NavLink>{" "}
            | <NavLink to="/about">关于</NavLink>|{" "}
            <NavLink to="/login">登录</NavLink> | {/* 手动路由跳转 */}
            <Button onClick={() => navigateTo("/category")}>
              category
            </Button> |{" "}
            <Button onClick={() => navigateTo("/order")}>order</Button>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 配置映射关系 path => components */}
          <Routes>
            {/* 使用navigate组件进行重定向 */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              {/* 当路径为home时，重定向到推荐列表 */}
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<Recommend />} />
              <Route path="/home/ranking" element={<Ranking />} />
              <Route path="/home/songmenu" element={<SongMenu />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
            {/* 当全部路径都匹配不到时， 匹配notFound组件 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          footer
        </div>
      </header>
    </div>
  );
}

export default App;
