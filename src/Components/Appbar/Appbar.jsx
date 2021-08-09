import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Menu ,
  MenuItem,
  Link
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import styles from './style';



export const Appbar = () => {
    const classes = styles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
      <Toolbar className={classes.toolbar} >
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <MenuIcon onClick={handleClick}/>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose} >Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    
        
          </IconButton>
          {/* <img src={logo} alt="logo" className={classes.logo}/> */}
          <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit">
            My Library
            </Link>
          </Typography>
          <Typography variant="h6">
          <Link href="/courses" color="inherit">
              Couses
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h6" >
          <Link href="/practice" color="inherit">
              Practice
            </Link>
          </Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
