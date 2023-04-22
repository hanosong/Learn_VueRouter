import React, { useState } from "react";
import { Avatar, List, Space, Segmented } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { STARS_LIST } from "../../static/index";
import "../../assects/text.less";
import { useNavigate } from "react-router-dom";
const SongMenu = () => {
  const nav = useNavigate();
  const navigateToDetail = (v, id) => {
    nav(`/detail/${id}&${v}`);
  };

  const data = Array.from({
    length: STARS_LIST.length,
  }).map((_, i) => ({
    href: "https://ant.design",
    title: `第 ${i + 1} 名最喜欢明星`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: STARS_LIST[i].description,
    content: (
      <Segmented
        options={STARS_LIST[i].content}
        onChange={(v) => navigateToDetail(v, i)}
      />
    ),
  }));
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div>
      <h2>Song menu</h2>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={50}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};
export default SongMenu;
