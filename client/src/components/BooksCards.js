import React from "react";
import API from "../utils/API";
//Just to reload after delete the entry in saved
import {BrowserRouter as Router} from "react-router-dom";


class BooksCards extends React.Component {
    //Insert functions here for buttons//


    constructor(props){
        //super props access to parents props
        super(props);
        this.state = {
            saved: false,
            deleted:false,
            books: []
        }
        //This part is important, the .bind(this) sirve para poder subir en el 'tree' y cachar las props, sino = undefined! :)
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);

    }

        saveClick = function(e){
            this.setState({saved:true});
            const bookData = {
                title: this.props.title,
                authors: this.props.authors,
                link: this.props.link,
                img: this.props.img.smallThumbnail,
                description: this.props.description
            }
            e.preventDefault();
            API.saveBook(bookData)
            .then(
                (response) => {
                    console.log(response)
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            );
        }

        deleteClick = function(e){
            this.setState({deleted: true});
            e.preventDefault();
            API.deleteBook(this.props.id)
            .then(
                (response) =>  {
                    console.log(response);
                    window.location.reload();

                //function to reaload if not it's still there
                
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            );

        };
    //
    render() {
        return(

            //entrar con bookInfo
            //y despues con puntito profundizar en el objeto info

            <div className = "row">
            <div className = "col s12">
                <div className="card horizontal col s12" id={this.props.id}>
                    <div className="card-image">
                    {(this.props.img)? <img src= {
                        // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                        (this.props.img.smallThumbnail)? this.props.img.smallThumbnail:
                        (this.props.img)? this.props.img: ""
                    } alt="book cover"/>: null}
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="titulo col s12">{this.props.title}</p>
                            <p className="autores col s12">{this.props.authors ? this.props.authors.join(', '): "N/A"}</p>
                            <p className="descripcion col s12">{this.props.description}</p>
                        </div>
                        <div className="card-action right-align col s12">
                            <a href={this.props.link} target="blank">
                            <button className="btn waves-effect waves-light">
                            View
                            </button>
                            </a>
                            {
                            // if this.props.path is "/" display save button else display Delete button
                            (this.props.path === "/saved")? 
                            <button type="button"className="btn waves-effect waves-light danger"  name="Delete" disabled={this.state.deleted} onClick={this.deleteClick}>Delete</button>
                            :
                            <button className="btn waves-effect waves-light" type="button" name="save" disabled={this.state.saved} onClick={this.saveClick}> Save</button> 
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BooksCards;