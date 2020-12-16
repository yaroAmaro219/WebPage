import React, { Component } from 'react'
import Nav from './components/Nav1'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/Footer.css'
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
        <Nav />
        <Switch>
        <Route exact path="/" render={(props) => (
            <Home
            />
          )}/>
        </Switch>
        <div class='footer-container'>
         <Footer />
      </div>
      </div>
    )
  }
}


export default App;