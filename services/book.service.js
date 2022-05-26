const Books = require("../models/books.model");


class BookService {


  findAll = async () => {
    console.log("B#")
    const booksResult = await Books.find();
    return booksResult;
  };

  delete = async (id) => {
    console.log("DELETE")
    const booksResult = await Books.deleteOne({ _id: id })
    return booksResult
  }

  create = async (data) => {
    console.log("HERE")
    const booksResult = await Books.create(data)
    return booksResult
  }

  search = async (params) => {
    console.log("HERE")
    const orList=[]
    for(const [key, value] of Object.entries(params)){
        if(value!==undefined){
            const obj={}
            obj[key]=value
            orList.push(obj)
        }

    }
    console.log(orList)

    const booksResult = await Books.find({
        $or: orList
      })
    return booksResult
  }

  update = async (id,data) => {

    const booksResult = await Books.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      );
    return booksResult
  }
}




module.exports = BookService