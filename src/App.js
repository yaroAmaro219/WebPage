import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Ball from './Tennis-Ball-Download-Free-PNG.png'
import Pups from './images/PowerPups.jpg'
import Coca from './components/Favicon_Icon.svg'
import Tennis from './Screen Shot 2020-07-09 at 4.30.18 PM.png'
import Youtube from './Screen Shot 2020-07-16 at 8.25.05 AM.png'
import octago from './octago logo.png'
import "./App.css";
import './styles/nav.css'

const App = () => {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="header">
        {/* <Link to="/">
          <img class="image" src={Image} />
        </Link> */}
     
          <Link to="/">
            <h2 class="welcome">Artemie Amari</h2>
          </Link>
  
        <div class='nav-container'>
        <Nav />
        </div>
      </div>

      <div class='about' id='about'>
        <h1 class='intro'>Hi, I'm Artemie Amari.</h1>
        <div class="about-main">
        {/* <img class="image" src={Image} /> */}
          <div class="text">
              <a class="subtitle"></a>
            <p class="blurb">
              I am a Software Engineer specializing in React and Ruby on Rails frameworks. I greatly value interpersonal skills and seek to maintain friendly, charismatic and peaceful relations in all endeavours. As a highly motivated and goal-oriented person, I seek to join a forward thinking company which reflects these values.
               
              Currently looking to join a company or team where I can grow as a web engineer. I intend to follow a career in full-stack development long term. I am happy to start with either a front or back-end specific role. I am most comfortable with React, Flask and Rails frameworks, and PostgreSQL and MongoDB databases. Prior to embraking on my web development journey, I attained a bachelor's degree in Finance. I attended The Citadel (Military School) for two years and I am a highschool National Champion and All-American for tennis.
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
            <h4>Youtube: Hack The Virus - CoCare</h4>
              <a class='htv' href="https://www.youtube.com/watch?v=xtbEpU1VjFE" target="_blank" rel="noopener noreferrer">
                  <img class="youtube" src={Youtube} /></a>
        </div> 
          </div>
        </div>
        </div>
     
      <div class='portfolio-container' id='portfolio'>
        <h1>Portfolio</h1>
        <div class="projects-header">
          <h2>These Are Some of My Favorite Projects</h2>
          </div>
        <div className="portfolio">
        <div class="work-piece">
              
            <a target="_blank" rel="noopener noreferrer" class="work" href="http://tenniscoachesofnyc.com/">
            <img class="tennis-ball" src={Ball} />
            Tennis Camp
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Tennis-Camp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Developed a full-stack web-application using Netlify and Heroku to host it. The front-end portion was built using React.js with react-router to create different pages as well designing using css. Used Ruby on Rails on the back end to create a database to store data from the enrollment form. Configured DNS to netlify to host with a secure connection on the internet. Applied google analytics and running online promotion campaign through instagram. </p>
          <p class="highlights"> Ruby on Rails, React.js, Heroku, Netlify, Google Analytics, PostgreSQL</p>
            </div>
            
          <div className="work-piece">
            <div class="info">
              
              
                <a
                  target="_blank" rel="noopener noreferrer" class="css-13nadwe"
                  class="work"
                  href={(`http://www.cocarecommunity.com/`)}>
                  <img class="large-svg" src={Coca} />
                  Corona Care
                  </a>
                <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Carona-Care">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
             
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
          <div class="work-piece">
              
            <a target="_blank" rel="noopener noreferrer" class="work" href="http://dogsittingnyc.com/">
            <img class="tennis-ball" src={Pups} />
            Dog Sitting
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/Dog-Sitting">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Developed a full-stack web-application using Netlify and Heroku to host it. The front-end portion was built using React.js with react-router to create different pages as well designing using css. Used Ruby on Rails on the back end to create a database to store data from the enrollment form. Configured DNS to netlify to host with a secure connection on the internet. Applied google analytics and running online promotion campaign through instagram. </p>
          <p class="highlights"> Ruby on Rails, React.js, Heroku, Netlify, Google Analytics, PostgreSQL</p>
            </div>
            <div class="work-piece">
              <img class="octago" src={octago} />
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://octago.surge.sh/">
            OctaGo
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/yaroAmaro219/OctaGo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Worked on a team of developers and UX designers in an Octagon hosted hackathon to create a full stack app that provides a seamless check-in experience at small to medium sized events following Covid-19 protocols</p>
          <p class="highlights"> Team Project, Full Stack, React.js, Ruby on Rails, PostgreSQL Authentication, Rest API's</p>
            </div>
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
            {/* <div class="work-piece">
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="http://eswap.surge.sh/">
            eSwap
              </a>
          <a target="_blank" rel="noopener noreferrer" class="css-13nadwe" class="work" href="https://github.com/Sunnydayz77/eSwap">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <p>Worked on a team of developers to create a app that can allow users to create Items and swap them with other users</p>
          <p class="highlights"> Team Project, Full Stack, React.js, MongoDB, Authentication, External APIs</p>
            </div> */}
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
        </div>
 
  
      <div class='contact' id='contact'>
        <div>
          <h1 class='contact-title'>Contact</h1>
          </div>
      <div class="email">
          <a href="mailto:yaroamari@gmail.com"><svg class="large-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"></path></svg></a>
          <a href='mailto:yaroamari@gmail.com'>yaroamari@gmail.com</a>
          </div>
      </div>
     
      
      <div class='footer'>
        <h1>Artemie Amari</h1>
        <div class="social-s">
          <a
            href="https://github.com/yaroamaro219"
            target="_blank"
            rel="noopener noreferrer"
            class='social-footer'
          >
            <svg
              class="medium-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/artemie-amari-337b78117/"
            target="_blank"
            rel="noopener noreferrer"
            class='social-footer'
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a
            href="https://soundcloud.com/artemie-amari/tracks"
            target="_blank"
            rel="noopener noreferrer"
            class='social-footer'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0v24h24v-24h-24zm4.667 15.524c-.405-.365-.667-.903-.667-1.512 0-.608.262-1.146.667-1.512v3.024zm1.333.476c-.243 0-.369.003-.667-.092v-3.792c.316-.101.465-.097.667-.081v3.965zm1.333 0h-.666v-3.778l.206.121c.091-.375.253-.718.461-1.023v4.68zm1.334 0h-.667v-5.378c.206-.154.426-.286.667-.377v5.755zm1.333 0h-.667v-5.905c.251-.027.328-.046.667.006v5.899zm1.333 0h-.667v-5.7l.253.123c.119-.207.261-.395.414-.572v6.149zm6.727 0h-6.06v-6.748c.532-.366 1.16-.585 1.841-.585 1.809 0 3.275 1.494 3.411 3.386 1.302-.638 2.748.387 2.748 1.876 0 1.143-.869 2.071-1.94 2.071z" />
            </svg>
          </a>
      </div>
      </div>
    </div>
    
  );
};

export default App;


 
