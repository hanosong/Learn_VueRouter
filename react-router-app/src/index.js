import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
// import 'antd/dist/antd.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/* 如果异步的东西还没下载下来，则显示loading */}
    <Suspense fallback={<h3>Loading</h3>}>
      <App />
    </Suspense>
  </HashRouter>
);
