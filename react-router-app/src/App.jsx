import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
function App() {
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
            <NavLink to="/login">登录</NavLink>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 配置映射关系 path => components */}
          <Routes>
            {/* 使用navigate组件进行重定向 */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
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
