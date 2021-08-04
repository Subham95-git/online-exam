import React, {useState} from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import style from "./Style";
import teacher from "../../Resources/teacher.png";
import student from "../../Resources/student.png";
import Register from '../Register/Register';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export const Landing = () => {
  const classes = style();

  const clickHandler=(str)=>{
    if(str==="teacher"){
      ReactDOM.render(<Register name="teacher"/>, document.getElementById('root'));
    }else{
      ReactDOM.render(<Register name="stdent"/>, document.getElementById('root'));
    }
    
  }

  return (
   
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={10} sm={6} md={4} lg={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={teacher}
              title="teacher"
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  Teacher Login
                </Typography>
              </div>
              <Typography className={classes.pos} color="textSecondary">
                This section is only for teachers
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                className={classes.button1}
                size="medium"
               
              >
                Login
              </Button>
              
              <Button
                className={classes.button2}
                size="medium"
              //  href="/register1"
                onClick={clickHandler}
              >
                Register
              </Button>
              
        
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={10} sm={6} md={4} lg={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={student}
              title="student"
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  Studen Login
                </Typography>
              </div>
              <Typography className={classes.pos} color="textSecondary">
                This section is only for students
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                className={classes.button1}
                size="medium"
                
              >
                Login
              </Button>
              <Button
                className={classes.button2}
                size="medium"
               // href="/register2"
                onClick={clickHandler}
              >
                Register
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
     
    {/* <Router>
     <Switch>
       <Route exact path="/register1" component={Register}></Route>
     </Switch>
     </Router> */}
    </main>

    
   
  );
};




export default Landing;
