import React from 'react';
import './Object7.css'
 export function Object7(props){
    console.log(props.android);
    console.log(props.fluttter);
    console.log(props.google);
    console.log(props.vector3);
    return(
      <>
<div className='obj7'>
    <div className='line'> 
    <div className='techbox'> 
      <p className='techp'>Technology Stack</p> </div>
    </div>
    <p className=' line2'>Domains That Excite Us to Collaborate and Teach!</p>
    <div className='afc'>
    <div className='afc2'>
          <div className='linea'></div>
         <img  className='afcimage' src={props.android} alt="" />
         <p className='afcp'>Android</p>
         <img className='vec' src={props.vectorthree} alt="" />
    </div>
    <div className='afc2'>
    <div className='linef'></div>
            <img className='afcimage' src={props.flutter} alt="" />
            <p className='afcp'>Flutter</p>
            <img className='vec' src={props.vectorthree} alt="" />
    </div>
    <div className='afc2'>
        <div className='lineg'></div>
          <img className='afcimage'src={props.google} alt="" />
          <p className='afcp'>Google</p>
          <img className='vec' src={props.vectorthree} alt="" />
          
    </div>

    </div>
</div>
</>
    );
 }