import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import  API from "./utils/API.js"
import axios from "axios";
import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import Search from "./pages/Search.js";




class App extends React.Component {
  state = {
    message: ""
  }
  test = (e) => {
    e.preventDefault();
    axios.get("/test").then(
      (response) => {
        console.log(response.data.message);
        this.setState({
          message:response.data.message
        })
      }
    )
  };

  render(){
    return(
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path ="/" component = {Search}/>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;