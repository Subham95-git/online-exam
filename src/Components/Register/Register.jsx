import React, { useState, useEffect } from 'react';
import {Snackbar,Button,TextField, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './style';

const Form = (props,{ handleClose }) => {
    const classes = useStyles();
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
      setSuccess(false);
      setError(false);
    },[])

  const handleClickpop = () => {
    setOpen(true);
  };

  const handleClosepop = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  
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
        <TextField
          label="Confirm Password"
          variant="filled"
          type="password"
          required
          value={confirmPass}
          onChange={e=>{
            setConfirmPass(e.target.value);
            setOpen(true);

            if(password===e.target.value){
              console.log('matched');
              setSuccess(true);
              setError(false);
            }
            else{
              console.log('not matched');
              setSuccess(false);
              setError(true);
            }
          }}
        />
        {error && 
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClosepop}>
        <Alert variant="filled" onClose={handleClosepop} severity="error" className={classes.alert}>Password not matched</Alert></Snackbar>}
        {success && 
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClosepop}>
        <Alert variant="filled"  onClose={handleClosepop} severity="success"> Password matched</Alert></Snackbar>}
        <div>
          
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
          
          <Button variant="contained" onClick={handleClose} href='/'>
            Cancel
          </Button>
        </div>
      </form>
      
    );
  };
  
  export default Form;