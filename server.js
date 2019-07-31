const express = require("express");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("./models/Book.js");


const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
/* app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); */


//========================================================
//     DataBase                
//========================================================

const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost/apigooglebooks"


mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

//========================================================
//     ROUTES                
//========================================================

//Estas RUTAS se despliegan en el 3001 ! [1]

app.get("/test", (req, res)=>{
  res.json({message:"This is testing for route"});
});

//Routes for the Data Base

//1. Creating a book entry in DB

app.post("api/books", (req, res)=>{
  db.Book.create(req, body)
  .then(
    (response) => {
      res.json({successful: response});
    }
  ).catch(
    (err) => {
      res.json({error:err});
    }
  );
});















app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
