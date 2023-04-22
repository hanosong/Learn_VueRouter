import {
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Button } from "antd";
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
import Detail from "./views/Detail";
import User from "./views/User";
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
            <Button onClick={() => navigateTo("/order")}>order</Button> |{" "}
            {/* 使用queryString进行路由跳转携带参数 */}
            <NavLink
              to="/user?name=hakwan&age=25"
              style={({ isActive }) => ({ color: isActive ? "#719CD3" : "" })}
            >
              用户（传参）
            </NavLink>
          </div>
          <hr />
        </div>
        <div className="content" style={{ width: "80%" }}>
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
            <Route path="/detail/:id" element={<Detail />} /> // 传参方式1
            <Route path="/user" element={<User />} />
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
