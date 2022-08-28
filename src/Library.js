function createLibrary(location) {
  var library = {
    name: location,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
  return library
};

function addBook(library, bookObj)  {
  var bookGenre = bookObj.genre;

  if (bookGenre === "fantasy") {
    library.shelves.fantasy.push(bookObj);
  } else if (bookGenre === "fiction") {
    library.shelves.fiction.push(bookObj);
  } else {
    library.shelves.nonFiction.push(bookObj);
  }
  return library;
};

function checkoutBook(library, title, genre) {
  //checking to see if book is on shelf of genre desired
   // if it is we want to remove book
   // return string
for(i = 0; i < library.shelves[genre].length; i++){
  console.log("book object shit",library.shelves[genre][i])
}
  if(library.shelves[genre].includes(title)){

  }
//   console.log("check if book title is on shelf", library.shelves[genre])
// console.log("checking genre", library.shelves[genre])
};










module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
