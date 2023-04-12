import React, { memo } from "react";

const recommend = memo(() => {
  return (
    <div>
      <h2>Banner</h2>
      <h2>歌单列表展示</h2>
      <ul>
        <li>我是歌单的数据01</li>
        <li>我是歌单的数据02</li>
        <li>我是歌单的数据03</li>
        <li>我是歌单的数据04</li>
      </ul>
    </div>
  );
});

export default recommend;
