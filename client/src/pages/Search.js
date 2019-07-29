import React from "react";
import SearchInput from "../components/SearchInput";
import axios from "axios";
import API from "../utils/API.js";

class Search extends React.Component{

    state = {
        result:{},
        search: ""
    };

    onChange = e =>{
        const value = e.target.value;
        const name= e.target.name;
        this.setState({
            [name]:value
        });
        console.log(this.state.search);
    }

    searchBook = query =>{
        API.search(query)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    searchClick = e =>{
        e.preventDefault();
        this.searchBook(this.state.search)
    };

    render(){
        return(
            <main>
                <SearchInput 
                value={this.state.search}
                onChange={this.onChange} 
                searchClick={this.searchClick}/>
            </main>
        );
    }
}

export default Search

