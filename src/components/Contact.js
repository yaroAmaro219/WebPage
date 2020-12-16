import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      company: '',
      comments: '',
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    // const {addContact} = this.props
    return (
      <>
     
      <div class='contact-page-container'>
        <div class='contact1'>
            <h2 class='contact-title'>Every Great Project Begins with a great brainstorm</h2>
          <div class='inputs'>
              <h3 class='input-name'>Name*</h3>
              <div class='contact-name'>
              <div class='first-name'>
                <input class='input1' onChange={this.handleChange} />
                <h5 class='sub-name'>First Name</h5>
              </div>
              <div  class='first-name'>
                  <input class='input1' onChange={this.handleChange} />
                  <h5 class='sub-name'>Last Name</h5>
                </div>
                </div>
            <h3 class='input-name'>Email*</h3>
            <input class='input1' placeholder='Email' onChange={this.handleChange}/>
            <h3 class='input-name'>Message*</h3>
              <textarea class='comments' placeholder='Type your message here...' onChange={this.handleChange} />
              <>
                <Button variant="outline-primary" size="lg">Primary</Button>{' '}
              </>
          </div>
          {/* <div class='contact3'>
            <h2>Brooklyn, New York 219 19th Street 11232</h2>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
            <h3><a class='phone' href="mailto:convertedcamper@gmail.com">GlassTop@gmail.com</a></h3>
            </div> */}
        </div>
        </div>
        </>
    )
  }
}