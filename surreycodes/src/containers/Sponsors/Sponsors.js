import React, { Component } from 'react'
import IconSpeaker from '../../assets/Icon Speaker.svg'
import Typow from '../../assets/Typow.svg'
import BetaCollective from '../../assets/BetaCollective.svg'
import SponsorHolder from '../../assets/SurreyCodesSponsor.svg'
import './Sponsors.css'
import { NavLink } from 'react-router-dom';

class Sponsors extends Component {
  render() {
    return (
      <div id="Sponsors">
          <h1>We generate a 10x effect with every contribution received.</h1>
          <NavLink to='/fulltimeprogram'>
            <h2>High quality developers are graduating from our program.</h2>
          </NavLink>
          <NavLink to='/fulltimeprogram'>
            <h2>Non-profits will have more budget to do good.</h2>
          </NavLink>
          <section className="howtohelp">
          <h1>We are preparing the developers of the future</h1>
          <p>Our students learn by doing. They prepare, code and improve web applications for good. By doing this, non-profits in British Columbia benefits of having low-cost websites and apps. At the same time, our students build a portfolio of real-wold experiences.</p>
          <p>Each place in our full time program costs about $4,000.00 to provide. We do our best to keep these costs low and cultivate high quality developers at the same time.</p>
        </section>
        <section className="backers">
            <h1>These companies are making a difference:</h1>
            <h2>Platinum Sponsor</h2>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="150" height="150" alt="Typow" />
            </a>
            <h2>Gold Sponsors</h2>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="110" height="110" alt="Typow" />
            </a>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="110" height="110" alt="Typow" />
            </a>
            <h2>Silver Sponsors</h2>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="100" height="100" alt="Typow" />
            </a>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="100" height="100" alt="Typow" />
            </a>
            <a href="https://surreycodes.ca">
                <img src={SponsorHolder} width="100" height="100" alt="Typow" />
            </a>
            <h2>Meetup Sponsors</h2>
          <a href="http://betacollective.ca/">
            <img src={BetaCollective} width="100" height="100" alt="Beta Collective" />
          </a>
          <a href="https://typow.ca">
            <img src={Typow} width="100" height="100" alt="Typow" />
          </a>
        </section>
            <section className="calltoaction">
                <img src={IconSpeaker} alt="A Big interesting speaker!" />
                <h2>
                    Non-Profits spend $100 MM dollars per year in technology support.<br/> Those are $100MM dollars that could go towards the most in need.
                </h2>
        </section>
          <section className="nonprofit-referral">
              <h3>Know any Non-Profit that could benefit from our program? tell them to submit a project</h3>
              <NavLink to='/nonprofitprogram'>
                  <button className="main-button">NonProfitProgram</button>
              </NavLink>
          </section>
      </div>
    )
  }
}

export default Sponsors
