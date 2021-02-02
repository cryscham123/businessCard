import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./router/home/home";
import Login from "./router/auth/login/login";
import Profile from "./router/profile/profile";
import Nav from './components/header/nav/nav';


const Approuter = ({isLogin,userobj,onAuth,FileIput}) => {
    return (
        <Router>
        <Switch>
        {isLogin ?
            <>
              <Nav userobj={userobj}/>
            <Route exact path="/">
                <Home FileIput={FileIput}/>
            </Route>
            <Route path="/profile">
                <Profile userobj={userobj} />
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