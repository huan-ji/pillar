import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar.js'

class CommunicationGuide extends Component {
  render() {
    return (
      <div className="communication-guide">
        <Navbar
          backLink="/"
          title="Communication Guide"
        />
        <ExpansionPanel>
          <ExpansionPanelSummary style={{ paddingRight: 40 }} expandIcon={<ExpandMoreIcon />}>
            <AppBar position="absolute" style={{ boxShadow: 'none' }}><h1>Naming Emotions</h1></AppBar>
            <div style={{ marginTop: 80 }}>
              Guessing a person’s feelings based on their description of the situation and your perception of their emotional state to be.
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                This can help friends acknowledge their feelings, thus making their emotions more manageable.
              </p>
              <p>
                Remember that the person may correct you, and their correction is valid.
              </p>
              <p>
                For example:
              </p>
              <p>
                Friend: I hate my sister! She is constantly taking my clothes without asking me and acts like an angel in front of my parents.
              </p>
              <p>
                You: I’m guessing you feel pretty hurt by her actions. I would feel incredibly frustrated as well.
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default CommunicationGuide;
