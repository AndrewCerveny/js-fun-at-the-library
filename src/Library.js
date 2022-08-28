function createLibrary(location) {
var location = {
    name:location,
    shelves:{
      fantasy:[],

      fiction:[],

      nonFiction:[],
    }
}
return location
};

function addBook(library, bookObj)
{
  var bookGenre = bookObj.genre;

  if (bookGenre === "fantasy")
  {
    library.shelves.fantasy.push(bookObj);
  }
  else if (bookGenre === "fiction")
  {
    library.shelves.fiction.push(bookObj);
  }
  else
  {
    library.shelves.nonFiction.push(bookObj);
  }
  return library;
}
function checkoutBook(location,bookObj){
console.log(library.shelves.fiction)

}










module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
