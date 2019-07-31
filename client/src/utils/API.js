import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const  APIKEY =  "AIzaSyCHo0jlOtKORSDsvC--xwjz2GEA8J53nkc"


export default {
    getTest: () =>{
        return axios.get("/test")
    },

    search: (query) => {
        return axios.get(BASEURL + query + "&Kkey=" + APIKEY);
    },

    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    }


};
