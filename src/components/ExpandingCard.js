import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

class ExpandingCard extends Component {
  state = {
    expanded: false,
  };

  handleChange = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    console.log(this.props)
    return (
      <ExpansionPanel expanded={this.props.closed ? false : true}className="card">
        <ExpansionPanelSummary style={{ paddingRight: 40 }} expandIcon={<ExpandMoreIcon />}>
          <AppBar position="absolute" style={{ boxShadow: 'none' }}><h1 style={{ marginLeft: 16 }}>{this.props.title}</h1></AppBar>
          <div style={{ marginTop: 80 }}>
            {this.props.description}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {this.props.details}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default ExpandingCard
