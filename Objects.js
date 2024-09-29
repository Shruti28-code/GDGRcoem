import React from "react";
import "./Objects.css";
// import img1 from "./object.png";

export function Objects(props) {
  const { gdgImg1 } = props;
  console.log(props.img);
  return (
    <>
      <div className="firstDiv">
      
         <div className="gdgname">
         <p className="google" style={{fontSize:'50px',fontFamily:'Product Sans',fontWeight: '700',marginRight:'-170px'}}>
                <span style={{ color: 'red' }}>G</span>
                <span style={{ color: 'orange' }}>o</span>
                <span style={{ color: 'yellow' }}>o</span>
                <span style={{ color: 'green' }}>g</span>
                <span style={{ color: 'blue' }}>l</span>
                <span style={{ color: 'indigo' }}>e</span></p>
        <p className="firsth">Developer     Groups</p>
        </div>
        <p className="secondh">RBU Chapter</p>
        <img className="firstimage" src={gdgImg1} alt="" />
        <p className="thirdh">
          Google Developer Groups are community groups for college <br />
          and university students interested in Google developer <br />{" "}
          technologies.
        </p>
      </div>
    </>
  );
}
