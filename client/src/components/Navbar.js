import React from "react";

function Navbar(props){
    return(
        <div>
        <div className="navbar-fixed">
        <nav>
          <ul>
            <li>
              <a href="/">
                <i className="material-icons">search</i>
                Search</a>
              </li>
            <li>
              <a href="#">
                  <i className="material-icons">archive</i>
                  Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    
      <div className="row center-align">
        <h1>
          React Google Books Search
        </h1>
        <h4>
          Search for and save books on interest
        </h4>
      </div>
      </div>
    );
}

export default Navbar;