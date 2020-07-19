import React, { Component } from 'react'
import Image from './download.png'
import Tennis from '../Screen Shot 2020-07-09 at 4.30.18 PM.png'
import Youtube from '../Screen Shot 2020-07-16 at 8.25.05 AM.png'

export default class extends Component {
  render() {
    return (
      <div class="main">
        <div class="screen" id="about">
        <div class="about-main">
        {/* <img class="image" src={Image} /> */}
          <div class="text">
              <h3>I'm Artemie</h3>
              <a class="subtitle"></a>
              <p class="blurb">
                Currently looking to join a company or team where I can grow as a web engineer. I intend to follow a career in full-stack development long term. I am happy to start with either a front or back-end specific role. I am most comfortable with React, Flask and Rails frameworks, and PostgreSQL and MongoDB databases. Prior to embraking on my web development journey, I attained a bachelor's degree in Finance. I attended The Citadel (Military School) for two years and am a highschool National Champion and All-American.
              </p>
            </div>
            <h3 class="feature">As Seen In:</h3>
            <div class="home-feature">
              <div class="seen">
<a href="https://www.nytimes.com/2014/06/03/sports/tennis/beacon-school-tennis-is-used-to-commuting-and-to-winning.html" target="_blank" rel="noopener noreferrer" >
<img class="tennis" src={Tennis}/>
                </a>
              </div>
              <div class="seen">
              <a href="https://www.youtube.com/watch?v=xtbEpU1VjFE" target="_blank" rel="noopener noreferrer">
                <h4>Youtube: Hack The Virus - CoCare</h4>
                  <img class="tennis" src={Youtube} /></a>
        </div> 
          </div>
        </div>
        </div>
        </div>
    )
  }
}
