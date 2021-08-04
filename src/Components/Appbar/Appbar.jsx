import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import logo from '../../Resources/mylogo.png';
import styles from './style';

export const Appbar = () => {
    const classes = styles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar className={classes.toolbar} >
          <img src={logo} alt="logo" className={classes.logo}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};
