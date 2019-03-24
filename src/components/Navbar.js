import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    height: 59,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: 32
  },
  back: {
    color: "white"
  },
  right: {
    cursor: "pointer"
  },
  menuButton: {
    cursor: 'pointer'
  }
};


class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            {
              this.props.backLink ?
              <Link to={this.props.backLink}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <Icon className={classNames(classes.back, 'fa fa-arrow-left')} color="white" />
                </IconButton>
              </Link> :
              <IconButton onClick={() => this.props.onBack()} className={classes.menuButton} color="inherit" aria-label="Menu">
                <Icon className={classNames(classes.back, 'fa fa-arrow-left')} color="white" />
              </IconButton>
            }

            <Typography variant="h6" color="inherit" className={classes.title}>
              {this.props.title}
            </Typography>
            {this.props.rightIcon ?
              <IconButton
                className={classNames(classes.right, `fa ${this.props.rightIcon}`)}
                color="white"
                onClick={this.props.rightAction}
              /> : undefined}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);
