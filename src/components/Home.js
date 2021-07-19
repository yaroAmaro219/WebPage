import React, { Component } from 'react'
import octago from '../images/octago logo.png'
import Ball from '../images/Tennis-Ball-Download-Free-PNG.png'
import Coca from '../images/Favicon_Icon.svg'
import Pups from '../images/PowerPups.jpg'
import Tennis from '../images/Screen Shot 2020-07-09 at 4.30.18 PM.png'
import Youtube from '../images/Screen Shot 2020-07-16 at 8.25.05 AM.png'

export default class Home1 extends Component {
  
  render() {
    return (
      <>
      <div class='home-container'>
         {/* <div class="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/491371357?background=1&autoplay=1&loop=1&byline=0&title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div> */}
          <div class='home-background'>
            
          </div>
        <div class='title-container'>
          {/* <h1 class='title'>Find Your Shot</h1> */}
          <div class='home-sub-content'>
          <h3 class='page-title1'>Professional Photography in New York & LA</h3>
          <div class='main-btn-container'>
          <a class="main-btn1" href='/insights'>View Work</a>
              <a class='main-btn2' href='/contact'>Contact Us</a>
              </div>
            </div>
        </div> 
        {/* <div class='home1'>
          <h2 class='standout'>How we stand out - we are proactive experts</h2>
          <p>We focus on incorporating Agile development priniciples keeping our process as lightweight and efficient as possible.</p>
          <div class='button-home-container'>
            <a class="main-btn" href='/contact'>Request Consultation</a>
            </div>
        </div>
        <div class='home1'id='casestudies'>
          <h2>Case Studies</h2>
          <p>We have worked with several businesses to enhance their digital precense and increase their business income through improved online accesability.</p>
          <div class='button-home-container'>
            <a class="main-btn" href='/portfolio'>View Portfolio</a>
            </div>
        </div>  */}
        </div>
        <div class='home-content1'>
          <h1>Work</h1>
          <div class='home-content1-1'>
          <p class='home-p'>Web development is a constantly evolving field. I sprecialize in developing websites for small business's and portfolio website's for individuals.  

            </p>


            <div>
            {/* <h3 class="feature">Seen In:</h3> */}
            <div class="home-feature">
              <div class="seen">
                <a href="https://www.nytimes.com/2014/06/03/sports/tennis/beacon-school-tennis-is-used-to-commuting-and-to-winning.html" target="_blank" rel="noopener noreferrer" >
                  <img class="tennis" src={Tennis} />
                </a>
              </div>
              <div class="seen">
                <h4>Youtube: Hack The Virus - CoCare</h4>
                <a class='htv' href="https://www.youtube.com/watch?v=xtbEpU1VjFE" target="_blank" rel="noopener noreferrer">
                  <img class="youtube" src={Youtube} /></a>
              </div>
            </div>
            
              </div>
            <p class='home-p'></p>
            </div>
        </div>
        </>
    )
  }
}