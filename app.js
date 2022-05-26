const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes/index");
const app = express();


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// TODO: CRIO_TASK_MODULE_AUTH - Initialize passport and add "jwt" authentication strategy

// Reroute all API request starting with "/v1" route
app.use("/lib", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.status(404).json("Resource Not Found");
});



module.exports = app;