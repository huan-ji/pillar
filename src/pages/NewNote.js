import React, { Component } from 'react';
import moment from 'moment'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewNote extends Component {
  state = {
    open: false,
    text: ''
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    return (
      <div className="new-note">
        <div style={{ fontWeight: 500, fontSize: 16 , margin: 20, marginBottom: -10 }}>{moment().format('MMMM Do YYYY')}</div>
        <TextField
          id="outlined-full-width"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          style={{ width: '90%', margin: 20 }}
          multiline
          rows="10"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div style={{ position: 'absolute', bottom: 13, right: 13 }}>
          <Button variant="contained" color="primary" onClick={() => {this.handleClick(); this.props.save(this.state.text)}}>
            SAVE NOTE
          </Button>
        </div>
      </div>
    )
  }
}

export default NewNote;
