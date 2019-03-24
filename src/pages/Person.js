import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class Person extends Component {
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
    const { contact } = this.props

    if (contact.notes.length === 0) {
      return <div>No notes</div>
    }

    return (
      <div className="person">
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.snackOpen}
          autoHideDuration={4000}
          onClose={this.props.handleSnackClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Follow-up succesfully scheduled.</span>}
        />
        <div style={{ marginLeft: 44, borderLeft: '1px solid black'}}>
          <div style={{ marginLeft: 28, marginTop: 40, marginBottom: 30, position: 'relative' }}>
            <div className="circle" />
            <div style={{ fontWeight: 500, fontSize: 16 }}>Today</div>
          </div>
          <div style={{ height: 350, overflowY: 'scroll', whiteSpace: 'nowrap' }}>
            {contact.notes.map((note) => {
              return (
                <div style={{ marginLeft: 28, marginBottom: 30, position: 'relative'}}>
                  <div className="circle" />
                  <div style={{ fontWeight: 500, fontSize: 16 , marginBottom: 10 }}>{note.time.format('MMMM Do YYYY')}</div>
                  <div style={{ fontWeight: 300, fontSize: 14 }}>{note.text}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Person;
