import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import MyPeople from './pages/MyPeople'
import CommunicationGuide from './pages/CommunicationGuide'
import KnowledgeAndResources from './pages/KnowledgeAndResources'
import './App.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="top">
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
        <div className="bottom" />
        <div className="landing-cards">
          <div className="card">
            <Link to="/my_people">
              <Card className="card">
                <CardContent>
                  My People
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card">
            <Link to="/communication_guide">
              <Card className="card">
                <CardContent>
                  Communication Guide
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card">
            <Link to="/knowledge_and_resources">
              <Card className="card">
                <CardContent>
                  Knowledge and Resources
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
