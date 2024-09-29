import React from 'react';
import './Object2.css'
 export function Object2(props){
  console.log(props.vectorfirst);
  console.log(props.vectorsecond);
  console.log(props.vectorThird);
    return(
      <div className='objectTwo'>
        <button className='btn' inputMode='submit'>JOIN US</button>
       <img  className ='v1' src={props.vectorfirst} alt=""  />
       <img  className ='v2' src={props.vectorsecond} alt="" />
        <img  className ='v3' src={props.vectorThird} alt="" />
       <p className='para2'><a className='para2a' href="/">Get To Know Us</a></p> 
      </div>
    );
}
