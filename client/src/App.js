import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";




class App extends React.Component {

  render(){
    return(
      <Router>
        <div>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;