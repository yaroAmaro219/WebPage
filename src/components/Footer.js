import React, { Component } from 'react';
import insta from '../images/instagram1.svg'

class Footer extends Component {
  render() {
    return (
      <div class='footer'>
      <div class='inner-footer'>
        <div class='footer-copyright'>
          <h5>Artemie Amari © </h5>
        </div>
        <div class='footer-options'>
          <a class='footer-choice' href='/about'>About</a>
          <a class='footer-choice' href='/contact'>Contact</a>
          <a class='footer-choice' href='/reviews'>Reviews</a>
        </div>
          <div class='social-container'>
          <a class='social' href='https://www.instagram.com/arroyoworks/?hl=en' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
            <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/TennisNYC'><svg fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a>
            <a
              href="https://github.com/yaroamaro219"
              target="_blank"
              rel="noopener noreferrer"
              class='social'
            >
              <svg
                class="medium-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill='white'
                width="35px" height="35px"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/artemie-amari-337b78117/"
              target="_blank"
              rel="noopener noreferrer"
              class='social'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="35px" height="35px">
                <path d="M0 0v35h35v-35h-35zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              href="https://soundcloud.com/artemie-amari/tracks"
              target="_blank"
              rel="noopener noreferrer"
              class='social'
              fill='white'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="35px" height="35px"
                fill='white'
              >
                <path d="M0 0v24h24v-24h-24zm4.667 15.524c-.405-.365-.667-.903-.667-1.512 0-.608.262-1.146.667-1.512v3.024zm1.333.476c-.243 0-.369.003-.667-.092v-3.792c.316-.101.465-.097.667-.081v3.965zm1.333 0h-.666v-3.778l.206.121c.091-.375.253-.718.461-1.023v4.68zm1.334 0h-.667v-5.378c.206-.154.426-.286.667-.377v5.755zm1.333 0h-.667v-5.905c.251-.027.328-.046.667.006v5.899zm1.333 0h-.667v-5.7l.253.123c.119-.207.261-.395.414-.572v6.149zm6.727 0h-6.06v-6.748c.532-.366 1.16-.585 1.841-.585 1.809 0 3.275 1.494 3.411 3.386 1.302-.638 2.748.387 2.748 1.876 0 1.143-.869 2.071-1.94 2.071z" />
              </svg>
            </a>
        </div>
        <div class='footer-glasstop'>
          <h7>Made with ♡ by <a class='web-a' href='https://www.glasstop.io/'>Glass Top Web Developers</a></h7>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;