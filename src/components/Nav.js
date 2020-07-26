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
              <Link className="link" to="/about">
                About
          </Link>
              <Link className="link" to="/portfolio">
                Portfolio
          </Link>
              <Link className="link" to="/contact">
                Contact
          </Link>
        
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
              <li><Link to="/" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Home</Link></li>
              <li><Link to="/about" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>About</Link></li>
              <li><Link to="/portfolio" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Portfolio</Link></li>
              <li><Link to="/contact" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Contact</Link></li>
        </ul>
      </div>
      </div>
      </div> 
        </div>
        </div>
    )
  }
}           
 