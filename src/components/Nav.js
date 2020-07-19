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
              <Link className="link" to="/work">
                Portfolio
          </Link>
              <Link className="link" to="/contact">
                Contact
          </Link>
        
        </div>
        <div class="nav">
        <a href="javascript:void(0);" class="icon"
          onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>
          <i class="fa fa-bars"></i>
          {this.state.toggle
            ?
            <div id="myLinks">
              <Link className="link" to="/">
                Home
          </Link>
              <Link className="link" to="/about">
                About
          </Link>
              <Link className="link" to="/work">
                Portfolio
          </Link>
              <Link className="link" to="/contact">
                Contact
          </Link>
        
            </div>
            :
            null
          }
          </a>
          </div>
      </div>
    )
  }
}           
 