import React from "react";

function SearchInput(props){
    return(
        <div className="row search center-align">
        <input 
        onChange={props.onChange}
        value={props.value}
        name="search" 
        type="text" 
        className="validate center-align"
        placeholder="Which book would you like to read?" 
        id="searchinput"/>
        <button 
        onClick= {props.searchClick}
        className="btn waves-effect waves-light" 
        id="search" 
        type="submit" 
        name="action">
            Search Book
        </button>
    </div>
    );
}

export default SearchInput;