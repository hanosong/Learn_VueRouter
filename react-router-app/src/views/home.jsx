import React, { memo, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Home = memo(() => {

  const [fileList, setFileList] = useState({
    list1: [],
    list2: [],
  })
  useEffect(() => {
    // 定义在这里，防止每次函数执行时，重新创建fileData造成性能浪费
    const fileData = [
      { tempId: '1', name: 'a' },
      { tempId: '2', name: 'b' },
    ]
    fileData.forEach((fileO, index) => {
      setFileList(fileList => ({
        ...fileList,
        [`list${index + 1}`]: [fileO]
      }))
    })
  }, [])
  useEffect(() => {
    console.log(fileList, '---')
  }, [fileList])
  return (
    <div>
      Home
      <h4>这里是home页</h4>
      <div className="home-nav">
        <Link to="/home/recommend">推荐</Link> | <Link to="/home/ranking">排行榜</Link>
      </div>
      {/* 路由组件的占位组件，决定组件挂载到哪 */}
      <Outlet />
    </div>
  );
});

export default Home;
