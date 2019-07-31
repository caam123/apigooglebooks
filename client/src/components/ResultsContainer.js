import React from "react";
import BooksCards from "./BooksCards.js";


function ResultsContainer (props){
/*     if  (props.path ==="/"){
        return(
    <div className="row results">
        <div class="col s12">
            <h4>Results</h4>
        </div>
        
    </div>
        )
    } */
        return(
            <div className="container">
                <div className="row">
                    <div ClassName ="col s12">
                        <h4 className = "titleResults">Results</h4>
                    </div>
                </div>
                {props.bookData.map((book) => {
                    const bookInfo = book.volumeInfo
                    return <BooksCards
                    title= {bookInfo.title}
                    authors = {bookInfo.authors}
                    description = {bookInfo.description}
                    link = {bookInfo.canonicalVolumeLink}
                    img = {bookInfo.imageLinks}
                    key = {book.id}/>
                })}
            </div>
        )
}

export default ResultsContainer;