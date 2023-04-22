import React, { memo, useEffect, useRef } from "react";

const Pikachu = memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 610;
    canvas.height = 360;

    // 绘制身体
    // 左侧身体
    ctx.beginPath();
    // 手臂外侧
    // 开始点
    ctx.moveTo(275, 260);
    // 控制点230,315  结束点 255,325
    ctx.quadraticCurveTo(230, 315, 255, 325);
    ctx.lineTo(270, 320);

    // 手臂内侧
    ctx.quadraticCurveTo(260, 310, 270, 280);

    // 胳子窝
    ctx.quadraticCurveTo(272, 275, 274, 280);

    // 身体外侧
    ctx.quadraticCurveTo(263, 300, 276, 330);

    // 左腿外侧
    ctx.lineTo(274, 355);

    // 左脚
    ctx.quadraticCurveTo(258, 370, 290, 372);
    ctx.quadraticCurveTo(320, 375, 310, 348);

    // 裆部
    ctx.quadraticCurveTo(308, 338, 314, 346);

    // 右侧身体
    // 右脚
    ctx.quadraticCurveTo(320, 362, 315, 364);
    ctx.quadraticCurveTo(310, 372, 335, 373);
    ctx.quadraticCurveTo(365, 370, 350, 350);

    // 右脚尾巴连接处
    ctx.lineTo(351, 335);

    // 尾巴
    ctx.quadraticCurveTo(390, 365, 420, 300);
    ctx.quadraticCurveTo(430, 280, 400, 308);
    ctx.quadraticCurveTo(385, 350, 352, 328);

    // 身体外侧
    ctx.quadraticCurveTo(365, 315, 354, 280);
    // 胳子窝
    ctx.quadraticCurveTo(352, 275, 358, 280);
    // 手臂内侧
    ctx.quadraticCurveTo(370, 305, 358, 325);
    // 手臂外侧
    ctx.quadraticCurveTo(370, 335, 382, 318);
    ctx.quadraticCurveTo(390, 300, 342, 250);

    ctx.closePath();
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(309, 253, 42, 25, 0, Math.PI * 0.9, Math.PI * 0.02, true);
    ctx.fillStyle = "#87e5f1";
    ctx.fill();

    // 绘制左耳
    ctx.beginPath();
    ctx.moveTo(235, 175);
    ctx.quadraticCurveTo(185, 75, 272, 140);
    ctx.closePath();
    ctx.fillStyle = "#000";
    ctx.fill();
    // 左耳内
    ctx.beginPath();
    ctx.moveTo(237, 160);
    ctx.quadraticCurveTo(207, 105, 255, 138);
    ctx.closePath();
    ctx.fillStyle = "#faf0bf";
    ctx.fill();

    // 绘制右耳
    ctx.beginPath();
    ctx.moveTo(338, 129);
    ctx.quadraticCurveTo(415, 80, 375, 160);
    ctx.closePath();
    ctx.fillStyle = "#000";
    ctx.fill();
    // 右耳内
    ctx.beginPath();
    ctx.moveTo(343, 134);
    ctx.quadraticCurveTo(400, 100, 370, 158);
    ctx.closePath();
    ctx.fillStyle = "#faf0bf";
    ctx.fill();

    // 绘制左侧胡须
    ctx.beginPath();
    ctx.moveTo(245, 210);
    ctx.lineTo(190, 212);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(255, 235);
    ctx.lineTo(200, 255);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();

    // 绘制右侧胡须
    ctx.beginPath();
    ctx.moveTo(385, 210);
    ctx.lineTo(420, 212);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(375, 235);
    ctx.lineTo(405, 250);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();

    // 绘制上半部分脸
    ctx.beginPath();
    ctx.arc(305, 200, 80, Math.PI * 0.9, Math.PI * 0.1);
    ctx.fillStyle = "#000";
    ctx.fill();

    // 绘制下半部分脸
    ctx.beginPath();
    ctx.ellipse(305, 200, 82, 65, 0, Math.PI * 0.9, Math.PI * 0.1, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    // 绘制左眼
    ctx.beginPath();
    ctx.arc(270, 200, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // 绘制左眼眼珠
    ctx.beginPath();
    ctx.arc(275, 200, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#000";
    ctx.fill();

    // 绘制右眼
    ctx.beginPath();
    ctx.arc(340, 200, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // 绘制右眼眼珠
    ctx.beginPath();
    ctx.arc(335, 200, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#000";
    ctx.fill();

    // 绘制嘴巴
    ctx.beginPath();
    ctx.ellipse(307, 223, 10, 7, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ff6600";
    ctx.fill();
  }, []);

  return <canvas ref={canvasRef} />;
});

export default Pikachu;
