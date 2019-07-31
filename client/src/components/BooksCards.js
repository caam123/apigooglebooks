import React from "react";


class BooksCards extends React.Component {
    //Insert functions here for buttons//

    constructor(props){
        //super props access to parents props
        super(props);
        this.state = {
            saved: false,
            deleted:false
        }
        this.saveClick = this.saveClick.bind(this);
        //this.deleteClick = this.deleteClick.bind(this);

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
            alert(bookData);
        }
    
    //
    render() {
        return(

            //entrar con bookInfo
            //y despues con puntito profundizar en el objeto info

            <div className = "row">
            <div className = "col s12">
                <div className="card horizontal col s12" id={this.props.id}>
                    <div className="card-image">
                    <img src={this.props.img.smallThumbnail}/>    
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="titulo">{this.props.title}</p>
                            <p className="autores">{this.props.authors ? this.props.authors.join(', '): "N/A"}</p>
                            <p className="descripcion">{this.props.description}</p>
                        </div>
                        <div className="card-action right-align">
                            <a href={this.props.link} target="blank">
                            <button className="btn waves-effect waves-light">
                            View
                            </button>
                            </a>
                            <a href="#">
                            <button className="btn waves-effect waves-light" onClick = {this.saveClick}>
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