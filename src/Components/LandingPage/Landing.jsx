import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import style from "./Style";
import teacher from "../../Resources/teacher.png";
import student from "../../Resources/student.png";

export const Landing = () => {
  const classes = style();
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
                startIcon={<LockOpenIcon />}
              >
                Login
              </Button>
              <Button
                className={classes.button2}
                size="medium"
                startIcon={<VpnKeyIcon />}
              >
                Sign up
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
                startIcon={<LockOpenIcon />}
              >
                Login
              </Button>
              <Button
                className={classes.button2}
                size="medium"
                startIcon={<VpnKeyIcon />}
              >
                Sign up
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
};

export default Landing;
