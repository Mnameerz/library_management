const express = require("express");
const booksRoute = require("./books.route");

const router = express.Router();


// TODO: CRIO_TASK_MODULE_AUTH - Reroute all API requests beginning with the `/v1/auth` route to Express router in auth.route.js 
router.use("/books", booksRoute);

module.exports = router;
