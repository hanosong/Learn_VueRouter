import React, { memo, useState } from "react";
import { Button, Divider } from "antd";
import { useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Cp1 from "./Lyrics/Cp1";
import Cp2 from "./Lyrics/Cp1";
import "../assects/detail.css";
// 动态获取Songmenu传入id => 使用useParams
const Detail = memo(() => {
  const { id } = useParams();
  let _paramArr = id.split("&");
  const [state, setState] = useState({
    rowIndex: _paramArr[0],
    name: _paramArr[1],
  });
  const [carousel, setCarousel] = useState({
    speed: 60,
    toggleView: true,
  });

  const pageChangeHandle = () => {
    setCarousel((carousel) => {
      let _toggleView = !carousel.toggleView;
      let _speed = _toggleView ? 60 : 10;
      return {
        ...carousel,
        speed: _speed,
        toggleView: _toggleView,
      };
    });
  };

  return (
    <div>
      <h1>Detail</h1>
      <Divider
        orientation="left"
        style={{ borderColor: "rgba(255, 255, 255, 0.5)", color: "#fff" }}
      >
        {state.name || ""}
      </Divider>
      <h2>父页面传过来的id:{state.rowIndex || ""}</h2>
      <Button onClick={pageChangeHandle} style={{ marginBottom: "10px" }} ghost>
        {" "}
        召唤eri
      </Button>
      <Marquee
        // ref={MarRef}
        speed={carousel.speed}
        style={{
          height: "165px",
        }}
      >
        {carousel.toggleView ? <Cp1 /> : <Cp2 />}
      </Marquee>
    </div>
  );
});

export default Detail;
