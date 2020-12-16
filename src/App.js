import React, { Component } from 'react'
import Nav from './components/Nav1'
import { Route, Switch } from 'react-router-dom'
import cloud from './images/197-cloud-check.svg'
import stack from './images/047-stack.svg'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Insights from './components/Insights'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/Nav.css'
import './App.css'


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      name: ''
    }
}

  
    
  render() {
    return (
      <div>
        
        <Switch>
        <Route exact path="/" render={(props) => (
            <Home
            />
          )} />
          <Route exact path="/contact" render={(props) => (
            <Contact
            />
          )} />
          <Route exact path="/insights" render={(props) => (
            <Insights
            />
          )}/>
        </Switch>
        <div class='container'>
          <a class='mobile' href='/insights'><img class='img-nav' src={cloud}/>Insights</a>
          <a class='mobile1' href='/contact'><img class='img-nav' src={stack}/>Get In Touch</a>
        </div>
        <div class='footer-container'>
         <Footer />
      </div>
      </div>
    )
  }
}


export default App;