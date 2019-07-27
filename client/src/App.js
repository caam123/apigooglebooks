import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import  API from "./utils/API.js"
import axios from "axios";



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
      <div>
      <button type="button" onClick= {this.test} >Click me</button>
      <h1>{this.state.message}</h1>
      </div>

    )
  }

};



export default App;