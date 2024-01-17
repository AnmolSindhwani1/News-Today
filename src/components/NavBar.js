import React, { Component } from 'react';
import logoImage from '../logo_news.png'
import './Navbar.css'; 

const Navbar = ()=> {
  
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{ marginBottom: '100px' }} id='navbar'>
  <div className="container-fluid">
    
  <img src={logoImage} alt="News Bazaar Logo" className="logo-image" />
    <a className="navbar-brand" href="/">News Today</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a a className="nav-link" href="/business"> Business </a> </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment"> Entertainment </a> </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/health"> Health</a>  </li>
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>  </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>  </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a> </li>
          <li class="nav-item ml-auto">
      </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
export default Navbar;