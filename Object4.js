import React from "react";
import "./Object4.css";
export function Object4(props) {
  console.log(props.obj4Img1);
  console.log(props.obj4Img2);
  return (
    <div className="objectFour">
      <h1 className="obj4H"> Our Perspective</h1>
      <div className="obj4Just">
        <img className="obj4Just1" src={props.obj4Img1} alt="" />
        <p className="obj4Just2">
          We’re a community-driven initiative aiming to bridge the gap between
          research and practice , develop evolutionary thinking and network
          throughout the process. We believe in connecting fellow developers ,
          spreading stimulative ideas and working for a solution driven team.
        </p>

        <img className="obj4Just3" src={props.obj4Img2} alt="" />
      </div>
    </div>
  );
}
