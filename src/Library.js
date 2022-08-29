function createLibrary(location,shelf,genre) {
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

function addBook(library, book)  {
  var bookGenre = book.genre
    if (bookGenre === "fantasy") {
      library.shelves.fantasy.push(book)
  } else if (bookGenre === "fiction") {
    library.shelves.fiction.push(book)
  } else {
    library.shelves.nonFiction.push(book)
  }
return library;
};
//checking to see if book is on shelf of genre desired
// check data type of genre
// skim shelves
//find name of book
// remove book
 // return string
 //
function checkoutBook(library, title, genre) {
  var booksOnShelf = library.shelves[genre]
  for (var i = 0 ; i <= booksOnShelf.length; i++) {
    if (booksOnShelf.length && title === booksOnShelf[i].title) {
      booksOnShelf.splice(i, 1);
      return  `You have now checked out ${title} from the ${library.name}`
    } else {
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
    }
  }
};
// ternary operator  if-else shorthand is ?:
// could not get last test to work.. don't know the issue. could not get fiction shelf to accept if conditional and clear. Expected empty[] instead library.fiction :[Pride and prideAndPrejudice_Object]

// // for(i = 0; i < library.shelves[genre].length; i++){
// //   console.log("book object shit",library.shelves[genre][i])
// // }
// // if(library.shelves[genre].includes(title)){
//
// }





module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
