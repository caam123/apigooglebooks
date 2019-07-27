import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import  API from "./utils/API.js"



class App extends React.Component {
  test = function(e){
    e.preventDefault();
    API.getTest().then(
      (response) => {
        console.log(response.data.message);
        alert(response.data.message);
      }
    )
  };

  render(){
    return(
      <button type="button" onClick= {this.test} >Click me</button>
    )
  }

};



export default App;