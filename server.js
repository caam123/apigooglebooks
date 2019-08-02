const express = require("express");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("./models");
const logger = require("morgan");


const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Middleware stuff

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

// Send every request to the React app
// Define any API routes before this runs
/* app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); */


//========================================================
//     DataBase before deployment   
//========================================================

/* const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/apigooglebooks"


mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });
 */
//========================================================
//     DataBase for deployment   
//========================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:user123@ds359077.mlab.com:59077/heroku_3q43hv9k")



//========================================================
//     ROUTES                
//========================================================

//Estas RUTAS se despliegan en el 3001 ! [1]

app.get("/test", (req, res)=>{
  res.json({message:"This is testing for route"});
});

//Routes for the Data Base

//1. Creating a book entry in DB

app.post("/api/books", (req, res)=>{
  db.Book.create(req.body)
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

//2. Get backm all books
app.get("/api/books", (req, res) =>{
  db.Book.find().then(
    (booksData) =>{
      res.json(booksData);
    }
  ).catch(
    (err) => {
      res.json({error:err});
    }
  );
})

//3. Delete an entry from data base! 
app.delete("/api/books/:id", (req,res)=>{
  db.Book.findByIdAndDelete(req.params.id).then(
    (response) => {
      res.json({successful:response});
    }
  ).catch(
    (err) => {
      res.json({error:err});
    }
  );
});




// Send every other request to the React app
// Define any API routes before this runs
//Si la ruta de Client build index está mal, no desplegara save ¿?
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
