import React from "react";
import BooksCards from "./BooksCards.js"


function ResultsContainer(props){
    if  (props.path ==="/"){
        return(
    <div className="row results">
        <div class="col s12">
            <h4>Results</h4>
        </div>
        {props.}
    </div>
        )
    }
}