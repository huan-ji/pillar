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
        <h1>
          Welcome to Pillar
        </h1>
        <h4>
          We are here to support you in supporing your friends.
        </h4>
        <h4>
          How can we help today?
        </h4>
        <div className="landing-cards">
          <Link to="/my_people">
            <Card>
              <CardContent>
                My People
              </CardContent>
            </Card>
          </Link>
          <Link to="/communication_guide">
            <Card>
              <CardContent>
                Communication Guide
              </CardContent>
            </Card>
          </Link>
          <Link to="/knowledge_and_resources">
            <Card>
              <CardContent>
                Knowledge and Resources
              </CardContent>
            </Card>
          </Link>
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
