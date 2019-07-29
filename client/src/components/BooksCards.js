import React from "react";


class BooksCards extends React.Component {
    //Insert functions here for buttons//

    //
    render(){
        return(
            <div className = "row">
            <div className = "col s12">
                <div className="card horizontal col">
                    <div className="card-image">
                    <img src="../../img/book"/>    
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="titulo">Titulo</p>
                            <p className="autores">Autores</p>
                            <p className="descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere earum
                            consequuntur, cum iste in ad debitis optio obcaecati vitae fugit sequi, laudantium totam quas
                            dignissimos quidem aut recusandae praesentium ipsa?</p>
                        </div>
                        <div className="card-action right-align">
                            <a href="#">
                            <button className="btn waves-effect waves-light">
                            View
                            </button>
                            </a>
                            <a href="#">
                            <button className="btn waves-effect waves-light">
                            Save
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BooksCards;