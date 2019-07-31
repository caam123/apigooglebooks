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
                {/*Hacemos el map, por cada book desplegara una card, a cada card se le transmiten estos valores mediante los title, authors,
                pasan como this.props y el nombre que les hayamos puesto aqui. A su vez estos props se reciben de search js.  */}
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