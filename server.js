const mongoose = require("mongoose");
const express = require("express")
const app = require("./app")
require("dotenv").config();


mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB");
    // Start the Node server
    app.listen(process.env.PORT,() =>{
      console.log("Listening on port ...")
    })
  });

