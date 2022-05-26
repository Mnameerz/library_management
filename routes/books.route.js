const express = require("express");

const bookController = require("../controllers/books.controllers")

const router = express.Router();

router.get("/",bookController.getBooks);
router.post("/new",bookController.addBooks)
router.delete("/delete/:id",bookController.deleteBook)
router.get("/search/",bookController.searchBook)
router.patch("/update/:id",bookController.updateBook)


module.exports = router;
