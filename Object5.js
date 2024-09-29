import React from "react";
import "./Object5.css";
export function Object5(props) {
  console.log(props.obj5Img1);
  console.log(props.obj5Img2);
  return (
    <div className="objectFive">
      <h1 className="obj5H"> What Keeps Us Going?</h1>
      <div className="obj5Just">
        <img className="obj5Just1" src={props.obj5Img1} alt="" />
        <p className="obj5Just2">
          Our club helps students to connect, learn, empower and grow. Teamwork,
          innovative thinking, communication, and leading with solutions is what
          helps us achieve new heights.<br />The entire team works in coordination,
          to inspire and motivate the upcoming coding community to evolve their
          skills and broaden their horizons of knowledge.
        </p>
        <img className="obj5Just3" src={props.obj5Img2} alt="" />
      </div>
    </div>
  );
}
