import React, { useState, useRef } from "react";
import Work from "./components/Work";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Image from "./LogoAA.svg";
import "./App.css";

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
        

        <Link to="/">
          <img class="image" src={Image} />
        </Link>
        <div class="center-header">
          <Link to="/">
            <h2 class="welcome">Artemie Amari</h2>
          </Link>
        </div>
        <Nav />
        <div class="social">
          <a
            href="https://github.com/yaroamaro219"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a
            href="https://soundcloud.com/artemie-amari/tracks"
            target="_blank"
            rel="noopener noreferrer"
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
      <div class="social-s">
          <a
            href="https://github.com/yaroamaro219"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a
            href="https://soundcloud.com/artemie-amari/tracks"
            target="_blank"
            rel="noopener noreferrer"
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
  );
};

export default App;


 
