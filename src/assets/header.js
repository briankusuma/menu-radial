import React from 'react';
//importlah menggunakan titik dua didepan ../ seperti
import Navbar from '../assets/js/navbar';
import '../assets/sass/Navbar.scss';



export default function Header() {
  return (
    <div className="Ap">
      <div className="flower">
        <div className="f3">
          <div className="f2">
            <div className="f1">
              <div className="wave">

                <header className="Ap-header" >
                <Navbar/>
                <h1 className="text">Wedding Organizer</h1>
                <p> A Successful 
                <br/>
                Marriage Requires
                <br/>
                Falling in 
                <br/>
                <em>love</em>
                <br/> 
                Many Times,
                <br/>
                Always With 
                <br/>
                The Same Person.</p>
                
                <button id="shadow" class="button"><span>See more </span></button>
                </header>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
