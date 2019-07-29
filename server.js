const express = require("express");
const path = require("path");
const axios = require("axios");

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

//===========================
//     ROUTES                
//===========================



//Estas RUTAS se despliegan en el 3001 ! [1]

app.get("/test", (req, res)=>{
  res.json({message:"This is testing for route"});
});

//Searching Books


















app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
