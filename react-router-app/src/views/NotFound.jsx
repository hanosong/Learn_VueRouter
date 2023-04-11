import React, { memo } from "react";

const NotFound = memo(() => {
  return (
    <div>
      <h1>NotFound Page</h1>
      <p>您输入的浏览器路径资源不存在</p>
    </div>
  );
});

export default NotFound;
