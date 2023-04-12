import React, { memo, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "antd";
const Login = memo(() => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandle = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <h1>Login page</h1>
      {!isLogin ? (
        <Button onClick={loginHandle} type="primary">登录按钮</Button>
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
});

export default Login;
