import React, { useState, useEffect } from 'react';
import {Snackbar,Button,TextField, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './style';

const Form = ({ handleClose }) => {
    const classes = useStyles();
    // create state variables for each input
    
    

  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log( email, password);
     // handleClose();
    };
  
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        
        <Typography variant="h5" component="h2">
                  Login
                </Typography>
        
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
          
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          
          <Button variant="contained" onClick={handleClose} href='/'>
            Cancel
          </Button>
        </div>
      </form>
      
    );
  };
  
  export default Form;