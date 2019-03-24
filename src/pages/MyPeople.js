import React, { Component } from 'react';
import moment from 'moment'

import Icon from '@material-ui/core/Icon';
import Person from './Person.js'
import FollowUp from './FollowUp.js'
import NewNote from './NewNote.js'
import Navbar from '../components/Navbar.js'
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  root: {
    height: 59,
    flexGrow: 1,
    top: 0
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    height: 300,
    width: 300,
    outline: 'none',
  },
  form: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 32
  },
  save: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 20,
    cursor: 'pointer',
    color: '#2C98F0',
    fontSize: 14
  },
  cancel: {
    marginRight: 20
  }
});

const contacts = [
  {
    id: 1,
    name: 'Angela',
    notes: []
  },
  {
    id: 2,
    name: 'Aaron',
    notes: []
  },
  {
    id: 3,
    name: 'Charles Lee',
    reminder: {
      time: '12:00pm',
      repeat: '2 weeks'
    },
    notes: []
  },
  {
    id: 4,
    name: 'Jeremy',
    notes: []
  },
  {
    id: 5,
    name: 'Mary Sue',
    notes: [
      {
        time: moment('3/2/2019'),
        text: 'Had coffee with Mary’s co-workers, seems like Mary’s doing much better...'
      },
      {
        time: moment('12/11/2019'),
        text: 'Mary told me she had a run in with her dad.  They talked about going to rehab...'
      },
      {
        time: moment('11/11/2019'),
        text: 'OMG Mary broke my window!! I’m seriously thinking about having an intervention ....'
      }
    ],
    reminder: {
      time: '3:00pm',
      repeat: '3 days'
    }
  }
]

let currentId = 5

class MyPeople extends Component {
  state = {
    open: false,
    name: '',
    contacts: contacts,
    page: 'people',
    contact: undefined,
    snackOpen: false
  };

  handleSnack = () => {
    this.setState({ snackOpen: true });
  };

  handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackOpen: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  addContact = () => {
    this.setState({ open: true });
  };

  newContact() {
    currentId += 1
    const newContacts = contacts.concat({
      id: currentId,
      name: this.state.name,
      notes: []
    })
    this.setState({
      contacts: newContacts
    })

    this.handleClose()
  }

  render() {
    const { classes } = this.props
    return (
      <div className="my-people">
        {
          this.state.page === 'people' ?
          <div>
            <Navbar
              backLink="/"
              title="My People"
              rightIcon="fa-plus"
              rightAction={() => this.addContact()}
            />
            {this.state.contacts.map((contact) => {
              return (
                <div style={{ display: 'flex', margin: 16, cursor: 'pointer' }} onClick={() => this.setState({ page: 'person', contact: contact })}>
                  <Avatar style={{ marginRight: 24, backgroundColor: '#00A3AE' }}>{contact.name[0].toUpperCase()}</Avatar>
                  <span style={{ paddingTop: 10}}>{contact.name}</span>
                  {contact.reminder ?
                    <span style={{ marginTop: 6 }}>
                      <Icon className='far fa-bell' style={{ fontSize: 20, color: '#00A3AE', marginLeft: 10 }} />
                      <span style={{ marginLeft: 10, fontSize: 12, color: 'rgba(0, 0, 0, 0.5)' }}>{`Every ${contact.reminder.repeat}, at ${contact.reminder.time}`}</span>
                    </span> : undefined}
                </div>
              )
            })}
          </div> : undefined
        }

        {
          this.state.page === 'person' ?
          <div>
            <Navbar
              onBack={() => this.setState({ page: 'people' })}
              title={this.state.contact.name}
              rightIcon="fa-share"
              rightAction={() => {}}
            />
            <Person contact={this.state.contact} snackOpen={this.state.snackOpen} handleSnackClose={() => this.handleSnackClose()}/>
            <div style={{ position: 'absolute', bottom: 13, left: '13%' }}>
              <Button color="primary" style={{ marginRight: 20 }} onClick={() => this.setState({ page: 'follow_up' })}>
                SET FOLLOW UP
              </Button>
              <Button variant="contained" color="primary" onClick={() => this.setState({ page: 'note' })}>
                CREATE NEW NOTE
              </Button>
            </div>
          </div>
          : undefined
        }

        {
          this.state.page === 'note' ?
          <div>
            <Navbar
              onBack={() => this.setState({ page: 'person' })}
              title="Create New Note"
            />
            <NewNote save={(text) => {
              const newNote = {
                text,
                time: moment()
              }
              const notes = this.state.contact.notes
              notes.unshift(newNote)
              const contact = Object.assign({}, this.state.contact, { notes })

              this.setState({ contact, page: 'person' })}}
            />
          </div>
          : undefined
        }

        {
          this.state.page === 'follow_up' ?
          <div>
            <Navbar
              onBack={() => this.setState({ page: 'person' })}
              title="Set Text Reminder"
            />
            <FollowUp handleSnack={() => this.handleSnack()} save={(reminder) => {
              const contact = Object.assign({}, this.state.contact, { reminder })
              this.setState({ contact, page: 'person' })
            }}/>
          </div>
          : undefined
        }

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.handleClose()}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <AppBar position="static" className={classes.root}>
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Add Contact
                </Typography>
              </Toolbar>
            </AppBar>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="standard-name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </form>
            <span className={classes.save}>
              <span className={classes.cancel} onClick={() => this.handleClose()}>CANCEL</span>
              <span onClick={() => this.newContact()}>SAVE</span>
            </span>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(MyPeople);
