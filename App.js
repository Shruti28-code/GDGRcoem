import React from "react";
import { Navbar } from "./components/Navbar";
import { Objects } from "./components/Objects";
import { Object2 } from "./components/Object2";
import { Object3 } from "./components/Object3";
import { Object4 } from "./components/Object4";
import { Object5 } from "./components/Object5";
import { Object6 } from "./components/Object6";
import { Object7 } from "./components/Object7";
import { Object8 } from "./components/Object8";
import {Footer} from  "./components/Footer";
import img from "./images/object.jpg";
import logo from "./images/gdglogo.jpg";
import vector1 from "./images/Vector1.jpg";
import vector2 from "./images/Vector2.jpg";
import vector3 from "./images/Vector3.jpg";
import oi1 from "./images/object3img1.jpg";
import oi2 from "./images/object3img2.jpg";
import o41 from "./images/object4img2.jpg";
import o42 from "./images/object4img1.jpg";
import o51 from "./images/object5img1.jpg";
import o52 from "./images/object5img2.jpg";
import o61 from "./images/android.jpg";
import o62 from "./images/flutter.jpg";
import o63 from "./images/google.jpg";
import footer from "./images/Footer.jpg";

import "./App.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Navbar gdglogo={logo} />
        <Objects gdgImg1={img} />
        <div>
          <Object2
            vectorfirst={vector1}
            vectorsecond={vector2}
            vectorThird={vector3}
          />
        </div>
        <div>
          <Object3 obj3Img1={oi1} obj3Img2={oi2} />
        </div>
        <div>
          <Object4 obj4Img1={o41} obj4Img2={o42} />
        </div>
        <div>
          <Object5 obj5Img1={o51} obj5Img2={o52} />
        </div>
        <div>
          <Object6 />
        </div>
        <div>
          <Object7
            android={o61}
            flutter={o62}
            google={o63}
            vectorthree={vector3}
          />
        </div>
        <div>
          <h1 className="faq">FAQ's</h1>
          <Object8
           
       />
        </div>
      <Footer fimg={footer}/>
      </div>
    </>
  );
}
export default App;
