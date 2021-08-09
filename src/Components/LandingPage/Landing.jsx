import React, {useState, useEffect} from "react";
import {Card, CardActionArea,CardActions, CardContent, CardMedia,Button,Typography, Grid} from '@material-ui/core';
import java from '../../Resources/java.png';
import js from '../../Resources/javascript.jpg';
import react from '../../Resources/react.png';
import useStyles from './Style';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { shadows } from '@material-ui/system';

const contentArray = [
    {
      image: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',
      name: 'JAVA',
      link: '/java-all',
      description:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
    },
    {
      image: "https://i.pinimg.com/originals/26/cd/2e/26cd2e5082f1aeb9e8afc52f6a6c7e2e.jpg",
      name: 'JavaSript',
      link: '/js-all',
      description:'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.'
    },
    {
      image:'https://res.cloudinary.com/practicaldev/image/fetch/s--VwK_F8Np--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9r97ts6fecb6elzm4vf.png',
      name: 'React',
      link: '/react-all',
      description:'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and others.'
    },
    {
      image:'https://www.nicepng.com/png/detail/31-314820_logo-spring-spring-framework-logo-svg.png',
      name: 'Spring',
      link: '/spring-all',
      description:'The Spring Framework is an application framework and inversion of control container for the Java platform.'
    },
    {
      image:'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      name: 'AWS',
      link: '/aws-all',
      description:'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs  on a metered pay-as-you-go basis.'
    },
    {
      image:'https://www.pngkit.com/png/detail/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.png',
      name: 'MongoDB',
      link: '/mongodb-all',
      description:'MongoDB is a source-available cross-platform document-oriented NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
    },
    {
      image:'https://habrastorage.org/webt/xc/4n/a1/xc4na1sca8xlufsjkj3yyo1z9m8.jpeg',
      name: 'NodeJs',
      link: '/nodejs-all',
      description:'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUGaycZJd9xgT3L2543NnnoUbFlVKDXULXUOLcqI_xVRUkUZb5qUn3OAjVd68xSh0B94&usqp=CAU',
      name: 'Hibernate',
      link: '/hibernate-all',
      description:'Hibernate ORM is an object–relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database.'
    },
    
];

const Landing = () => {
  const classes = useStyles();
  const [visbility, setVisbility] = useState(true);

  const startCourseHandler = ()=>{
    console.log("Inside StartCourseHandler");
    setVisbility(false);
  }

  return (

    <>
    {visbility && (
      <Router>
       <main className={classes.content}>
       <div className={classes.toolbar} />
     {/* {!visbility &&  */}
       <Grid container justifyContent="center" spacing={5}>
        
         {contentArray.map((ele)=>{
           console.log(ele.image);
           console.log(ele.description);
           return(
             <Grid item xs={10} sm={6} md={4} lg={3} key={ele.name}>
               <Card className={classes.root} style={{'box-shadow': 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image = {ele.image}
             title="image"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {ele.name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
               {ele.description}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
           <Button size="small" className={classes.button1}  onClick={startCourseHandler}>
             <Link to={ele.link} className={classes.button1}>
             Start Course
             </Link>
           </Button>
           
         </CardActions>
       </Card>
       </Grid>
           );
         })}
       
       </Grid>
       </main></Router>
    )}
    </>

     
   
    
  )
}


export default Landing
