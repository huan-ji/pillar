import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

import MyPeople from './pages/MyPeople'
import CommunicationGuide from './pages/CommunicationGuide'
import KnowledgeAndResources from './pages/KnowledgeAndResources'
import './App.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="top">
          <div className="top-text">
            <h1 style={{ paddingTop: 57, marginTop: 0 }}>
              Welcome to Pillar
            </h1>
            <h4 style={{ fontWeight: 'normal' }}>
              We are here to support you in supporing your friends.
            </h4>
            <h4 style={{ fontWeight: 'normal' }}>
              How can we help today?
            </h4>
          </div>
        </div>
        <div className="bottom" />
        <div className="landing-cards">
          <div className="card">
            <Link to="/my_people">
              <Card className="card">
                <CardContent>
                  <Icon className='fas fa-users' style={{ color: '#00A3AE', width: 42, height: 33, fontSize: 33 }} />
                  <div style={{ textAlign: 'center', fontSize: 12 }}>My People</div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card">
            <Link to="/communication_guide">
              <Card className="card">
                <CardContent>
                  <Icon className='fas fa-comments' style={{ color: '#00A3AE', width: 42, height: 33, fontSize: 33 }} />
                  <div style={{ textAlign: 'center', fontSize: 12 }}>Communication Guide</div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card">
            <Link to="/knowledge_and_resources">
              <Card className="card">
                <CardContent>
                  <Icon className='fas fa-book-reader' style={{ color: '#00A3AE', width: 42, height: 33, fontSize: 33 }} />
                  <div style={{ textAlign: 'center', fontSize: 12 }}>Knowledge & Resources</div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00A3AE"
    },
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my_people" component={MyPeople} />
            <Route path="/communication_guide" component={CommunicationGuide} />
            <Route path="/knowledge_and_resources" component={KnowledgeAndResources} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
