import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./router/home/home";
import Login from "./router/auth/login/login";
import Nav from './components/header/nav/nav';


const Approuter = ({isLogin,userobj,onAuth,FileInput, cardRef}) => {
    return (
        <Router>
        <Switch>
        {isLogin ?
            <>
              <Nav userobj={userobj}/>
            <Route exact path="/">
                <Home FileInput={FileInput} userobj={userobj} cardRef={cardRef}/>
            </Route>
          </>
          :
          <Route exact path="/">
              <Login onAuth={onAuth}/>
          </Route>
          }
        </Switch>
      </Router>
    );
};

export default Approuter;