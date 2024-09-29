import React from "react";
import "./Object3.css";
export function Object3(props) {
    console.log(props.obj3Img1);
    console.log(props.obj3Img2);
  return (
    <div className="objectThree">
      <h1 className="obj3H"> Our Mission</h1>
      <div className="obj3Just">
        <img className="obj3Just1" src={props.obj3Img1} alt="" />
        <p className="obj3Just2">
          Our mission involves community engagement, leadership development,
          building strong tech foundation, while enabling all tech enthusiasts
          to contribute to the global society
        </p>
        <img className="obj3Just3" src={props.obj3Img2} alt="" />
      </div>
    </div>
  );
}
