import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Meetup from './components/Meetup/Meetup';
import Hook from './components/Hook/Hook';
import About from './components/About/About';
import Features from './components/Features/Features';
import Subscribe from './components/Subscribe/Subscribe';
import Friends from './components/Friends/Friends';
import Members from './components/Members/Members';
import Footer from './components/Footer/Footer';
import WhenLeavingView from './components/WhenLeavingView';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    alert("hey");
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <WhenLeavingView>
          {({ isLeavingView }) =>
            <Header animate={isLeavingView}/>
          }
        </WhenLeavingView>
          <article id="section-one">
            <Hook />
            <About />
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
