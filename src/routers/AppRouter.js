import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { RandomJoke } from '../components/RandomJoke';


export const AppRouter = () => {
    return (
       <Router>
           <div>
               <Switch>
                   <Route 
                    path="/"
                    component={ RandomJoke }
                   />
               </Switch>
           </div>
       </Router>
    )
}

