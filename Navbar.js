import React from 'react';
import './Navbar.css';
export function Navbar(props){
  console.log(props.gdglogo)
  
 return(
 <div>
  <div className='navigation'>
 
    <div className='navigation2'>
    <div className='titleandlogo'>
         <img  className='gdglogoimg' src={props.gdglogo} alt="" />
         <p className='gdgrcoem'>GDG RCOEM</p>
      </div>
      <div className='navbarlist'>
      <nav className="navbar">
        <ul className="navbar-list">
          <li> <a className='tag' href="/"  >Home</a></li>
          <li><a  className='tag' href="/">Events</a></li>
          <li><a className='tag' href="/">Team</a></li>
          <li><a  className='tag' href="/">Alumni</a></li>
          <li><a  className='tag' href="/">Contact</a></li>
        </ul>
      </nav>
      </div>
      <button className='togglebutton' inputMode='checkbox'>  </button>
      
    </div>

  </div>
 </div>
 );
}