import React, { Component } from 'react';
import moment from 'moment'

import Textarea from 'react-textarea-autosize';

class NewNote extends Component {
  render() {
    return (
      <div className="new-note">
        <div style={{ fontWeight: 500, fontSize: 16 , marginBottom: 10 }}>{moment().format('MMMM Do YYYY')}</div>
        <textarea />
      </div>
    )
  }
}

export default NewNote;
