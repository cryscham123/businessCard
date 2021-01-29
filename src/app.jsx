import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import Home from "./router/home";
import Login from "./router/login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
      <Router>
      <Switch>
        {isLogin ?
          <Route exact path="/">
            <Home />
          </Route>
          :
          <Route path="/">
            <Login />
          </Route>
          }
        </Switch>
      </Router>
  );
}

export default App;
