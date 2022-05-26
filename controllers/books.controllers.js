const httpStatus = require("http-status");
const BookService = require("../services/book.service");
const BookInstance = new BookService()


/**
 * Get product by productId
 *
 * Example responses:
 * HTTP 200
 * {
 *      "_id": "5f71c1ca04c69a5874e9fd45",
 *      "name": "ball",
 *      "category": "Sports",
 *      "rating": 5,
 *      "cost": 20,
 *      "image": "google.com",
 *      "__v": 0
 * }
 *
 *
 */
// const getProductById = catchAsync(async (req, res) => {
//   const product = await productService.getProductById(req.params.productId);
//   if (!product) {
//     throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
//   }
//   res.send(product);
// });

/**
 * Get list of all products (Not authenticated route)
 *
 * Example responses:
 * HTTP 200
 *
 * [
 *  {
 *      "_id": "5f71c1ca04c69a5874e9fd45",
 *      "name": "ball",
 *      "category": "Sports",
 *      "rating": 5,
 *      "cost": 20,
 *      "image": "google.com",
 *      "__v": 0
 *  },
 *  {
 *      "_id": "5f71c1ca04c69a5874e9fd46",
 *      "name": "bat",
 *      "category": "Sports",
 *      "rating": 3,
 *      "cost": 20,
 *      "image": "google.com",
 *      "__v": 0
 *  }
 *]
 *
 */
const getBooks = async (req, res) => {

  try{
    const books = await BookInstance.findAll();
    res.send(books);
  }catch(err){

    res.status(500).send(err)
  }

};

const addBooks = async (req, res) => {
  const data=req.body
  try{
    const newBook = await BookInstance.create(data);
    res.send(newBook);
  }catch(err){
    console.log("Error addBooks")
    res.status(500).send(err)
  }

};

const deleteBook = async (req, res) => {
  const id=req.params.id
  try{
    const book = await BookInstance.delete(id);
    res.send(book);

  }catch(err){
    console.log("Error deleteBooks")
    res.status(500).send(err)
  }

};

const searchBook = async (req, res) => {
  const data = {
    Name: req.query.name,
    Published: req.query.published,
    Author: req.query.author,
    Domain: req.query.domain,
    isAvailable: req.query.isAvailable
  }
  try{
    console.log(data)
    const book = await BookInstance.search(data);
    res.send(book);


  }catch(err){
    console.log("Error deleteBooks")
    res.status(500).send(err)
  }

};

const updateBook = async (req, res) => {
  const data=req.body
  const bookId=req.params.id
  console.log(data)
  try{
    const updatedBook = await BookInstance.update(bookId,data);
    res.send(updatedBook);
  }catch(err){
    console.log("Error updateBooks")
    res.status(500).send(err)
  }

};


module.exports = {
  getBooks,
  addBooks,
  deleteBook,
  searchBook,
  updateBook
};
