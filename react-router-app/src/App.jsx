import {
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import { Button } from "antd";
import "./App.css";

import routes from "./router";
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
          {/* 传入路由配置，会自动生成路由结构 */}
          {useRoutes(routes)}
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
