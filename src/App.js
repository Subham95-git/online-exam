import React from 'react';
import Landing from './Components/LandingPage/Landing'
import {Appbar} from './Components/Appbar/Appbar'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from './Components/Register/Register';


const App = ()=>{
    return(
        <div>
            <Appbar/>
            <Landing/>


            {/* <Router>
          <Route />
    <Route path="/register2" component={Register}/>
    </Router> */}
        </div>

        
    );
}

export default App;