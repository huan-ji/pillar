import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import ExpandingCard from '../components/ExpandingCard.js'

import wordsOfSupport from './wordsOfSupport.js'

class CommunicationGuide extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    return (
      <div className="communication-guide">
        <Navbar
          backLink="/"
          title="Communication Guide"
        />
        <h1 style={{ marginLeft: 22 }}>Words of Support</h1>
        <div className="cards">
          {
            wordsOfSupport.map((card) => {
              return (
                <ExpandingCard
                  close={card.closed}
                  title={card.title}
                  description={card.description}
                  details={card.details}
                  handleChange={this.handleChange(card.id)}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CommunicationGuide;
