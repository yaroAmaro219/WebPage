import React, {Component} from 'react'
import Image from './Favicon_Icon.svg'
import octago from '../octago logo.png'

class Work extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="main">
          <h2>These Are Some of My Favorite Projects</h2>
        <div className="portfolio">
          <div class="work-teir">
            <div class="work-piece">
              <img class="octago" src={octago} />
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="#">
            OctaGo
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/OctaGo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Worked on a team of developers and UX designers to create a full stack app that provides a seamless check-in experience at small to medium sized events following Covid-19 protocols</p>
          <p class="highlights"> Team Project, Full Stack, React.js, Ruby on Rails, PostgreSQL Authentication, Rest API's</p>
            </div>
          <div className="work-piece">
            <div class="info">
              <img class="large-svg" src={Image} />
              <div class="work-link">
                <a
                  target="_blank" rel="noopener noreferrer" class="css-13nadwe"
                  class="work"
                  href={(`http://www.cocarecommunity.com/`)}>
                  Corona Care
                  </a>
                <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Carona-Care">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
              </div>
            </div>
            <p>Working with a team of UX designers, which begun during a Hackathon, to create Corona Care, a health and wellness app for peole who need help from their community during this time.</p>
            <p class="highlights"> UX, Full Stack, React.js, Ruby on Rails, PostgreSQL, Authentication</p>
          </div>

          <div className="work-piece">
         
            <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://amari.surge.sh/">
              AMARI
               </a>
            <p>A Personal Website that implements three.js and react-three-fiber and other visual effects</p>
            <p class="highlights"> React.js, Three.js</p> 
            </div>
            <div className="work-piece">
            <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://www.ivka.com/">
              IVKA
               </a>
            <p>An Urban Greenhouse startup in Brooklyn</p>
            <p class="highlights"> React.js, Stripe, CSS</p>
          </div>
          </div>
          <div class="work-teir">
          

          <div className="work-piece">
            <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://tennis-booking.surge.sh/">
              Tennis Booking
              </a>
            <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Tennis-Booking">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
            </a>
            <p> In this project I connect a backend API built with Rails
            and a React front end in order to store reservations.
                </p>
            <p class="highlights"> Full Stack, React.js, Ruby on Rails, PostgreSQL, Authentication, Time-reservations</p>
            </div>
            <div class="work-piece">
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://eswap.surge.sh/">
            eSwap
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/Sunnydayz77/eSwap">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Worked on a team of developers to create a app that can allow users to create Items and swap them with other users</p>
          <p class="highlights"> Team Project, Full Stack, React.js, MongoDB, Authentication, External APIs</p>
            </div>
            <div className="work-piece">
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://amari-financeapp.surge.sh/">
            Stocks Tracker
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Stock-App">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Developed an App using React.js and external API's to allow users to look up stocks, save to a watchlist and
              call more data about any given stock </p>
          <p class="highlights"> React.js, External APIs</p>
            </div>
          </div>
          <div class="work-teir">
        
        
            </div>
        {/* <div className="work-piece">
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://mindguidedmeditation.surge.sh/">
            <i>MIND.</i>
          </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/MindGuided">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Backwards engineering an existing site using Ruby on Rails API and a React.js front end.
          Currently working on implementing Stripe into the app feature.
            </p>
          <p class="highlights"> Ruby on Rails, React.js, Stripe</p>
        </div> */}
        </div>
        </div>
    )
  }
}

export default Work
