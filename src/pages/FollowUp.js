import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import PhoneInput from '../components/PhoneInput.js';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios'

class FollowUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: undefined,
      repeat: undefined,
      phone: undefined,
      message: ''
    }
  }

  setReminder() {
    const reminder = {
      time: this.state.time,
      repeat: this.state.repeat
    }
    this.props.save(reminder)

    axios.post('/text', {
      number: this.state.phone,
      text: this.state.message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="follow-up" noValidate>
        <TextField
          id="time"
          label="Time"
          style={{ margin: 30 }}
          type="time"
          onChange={(e) => this.setState({ time: e.target.value })}
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <FormControl style={{ margin: 30 }}>
          <InputLabel htmlFor="repeat" shrink>Repeat</InputLabel>
          <Select
            value={this.state.repeat}
            onChange={(e) => this.setState({ repeat: e.target.value })}
            inputProps={{
              name: 'age',
              id: 'repeat',
            }}
            displayEmpty
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'day'}>Everyday</MenuItem>
            <MenuItem value={'week'}>Every week</MenuItem>
            <MenuItem value={'2 weeks'}>Every two weeks</MenuItem>
            <MenuItem value={'month'}>Every month</MenuItem>
            <MenuItem value={'custom'}>Custom</MenuItem>
          </Select>
        </FormControl>
        <PhoneInput style={{ margin: 23 }} value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}/>
        <TextField
          id="message"
          label="Message"
          style={{ margin: 30, marginTop: 0, width: '90%' }}
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          margin="normal"
        />
        <div style={{ position: 'absolute', bottom: 13, right: 13 }}>
          <Button variant="contained" color="primary" onClick={() => this.setReminder()}>
            SET REMINDER
          </Button>
        </div>
      </div>
    )
  }
}

export default FollowUp;
