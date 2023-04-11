import React, { memo, useState } from "react";
import { Navigate } from "react-router-dom";

const Login = memo(() => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandle = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <h1>Login page</h1>
      {!isLogin ? (
        <button onClick={loginHandle}>登录按钮</button>
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
});

export default Login;
