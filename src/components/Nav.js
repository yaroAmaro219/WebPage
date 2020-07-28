import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }
  

  render() {
      console.log(this.state.toggle)
    return (
      <div class="navigation">
        <div className="nav-web">
              {/* <Link className="link" to="/">
                Home
          </Link> */}
              <a className="link" href="#about">
                About
          </a>
              <a className="link" href="#portfolio">
                Portfolio
          </a>
              <a className="link" href="#contact">
                Contact
          </a>
        
        </div>
        <div class="nav">
      <div class="page">
      <div class="hamburger">
        <input type="checkbox" id="nav-toggle"/>
          <label for="nav-toggle">
            <span class="toggle-words"><i class="fa fa-bars" id="bar"></i></span>
          </label>
      <div class="menu">
            <ul>
              <li><a href="/" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Home</a></li>
              <li><a href="#about" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>About</a></li>
              <li><a href="#portfolio" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Portfolio</a></li>
              <li><a href="#contact" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Contact</a></li>
        </ul>
      </div>
      </div>
      </div> 
        </div>
        </div>
    )
  }
}           
 