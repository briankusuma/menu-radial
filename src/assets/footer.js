import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


export default function Footer () {
  return (
    <div className="footer">
      <header className="footer-header">
      
      <h1>interested ?</h1>
      <button id="shadow" class="button"><span>Lets Talk </span></button>
      
      
      <h1>Wedding Organizer</h1>
      
          <ul className="listfloat">
            <li id ="ad" href= "#" > Ad. Surakarta </li>
            <li id ="tele" href= "#" > Tele. +62 851 234 567 890 </li>
            <li id ="eml" href= "#" > Eml. holacomoestas@weddingorg.com </li>
            
          </ul>
          <br/>
    
      <div className="float">
          <h4>About Us</h4>
          <ul className="menu">
            <li id="" href= "#" >About</li>
            <li id="" href= "#" >Project</li>
            <li id="" href= "#" >What we do</li>
            <li id="" href= "#" >Customer Stories</li>
          </ul>
      </div>
      
      <div className="float">
          <h4>Follow Us</h4>
          <ul className="menu">
            <li id="" href= "#" >Facebook</li>
            <li id="" href= "#" >Instagram</li>
            <li id="" href= "#" >Twitter</li>
            <li id="" href= "#" >Youtube</li>
          </ul>
      </div>
     
      </header>
    </div>
  );
};