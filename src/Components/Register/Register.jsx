import React, { useState } from 'react';
import {Button,TextField, Typography} from '@material-ui/core';

import useStyles from './style';

const Form = (props,{ handleClose }) => {
    const classes = useStyles();
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(firstName, lastName, email, password);
     // handleClose();
    };
  
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h5" component="h2">
                  Sign Up
                </Typography>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose} href='/'>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
          
        </div>
      </form>
      
    );
  };
  
  export default Form;