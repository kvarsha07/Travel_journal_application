
import React from 'react';

import { Link } from 'react-router-dom';
import '../App.css'; 




const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '0 20px'}}>
      <Link className="navbar-brand" to="/" style={{color:"black" ,fontWeight:"bold" , fontSize:"30px"}}>Travel Journal</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Entries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view">View Entries</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
