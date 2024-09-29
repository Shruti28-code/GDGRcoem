import React from 'react';
import './Footer.css';
export function Footer(props){
    console.log(props.fimg);
    return(
        <div >
        <img className='footerdiv' src={props.fimg} alt="" />
         

        </div>
    );
}