import React, { Component } from 'react';
import './App.css';
import Meetup from './components/Meetup/Meetup';
import Hook from './components/Hook/Hook';
import Features from './components/Features/Features';
import Subscribe from './components/Subscribe/Subscribe';
import Friends from './components/Friends/Friends';
import Members from './components/Members/Members';
import Footer from './components/Footer/Footer';
import AboutCard from './components/About/AboutCard/AboutCard';



class App extends Component {

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
          <article id="section-one">
            <Hook />
            <AboutCard/>
          </article>
          <article id="section-two">
            <Meetup />
          </article>
          <article id="section-three">
            <div className="green-section"></div>
            <Features />
            <Members />
            <Subscribe />
            <Friends />
          </article>
        <Footer />
      </div>
    );
  }
}

export default App;
