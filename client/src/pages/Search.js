import React from "react";
import SearchInput from "../components/SearchInput";
import axios from "axios";
import API from "../utils/API.js";

class Search extends React.Component{

    state = {
        results:[""],
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

    searchBook = query => {
        API.search(query)
        .then (response => this.setState({results:response.data.items}))
        .catch(err => console.log(err));
        console.log(this.state.results);
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

                {/*Condition for displaying the results*/}
            </main>
        );
    }
}

export default Search
