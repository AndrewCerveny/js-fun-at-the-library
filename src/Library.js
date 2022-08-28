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
  console.log("Library Location",library)
  console.log("data type", genre)
  console.log("if genre variable willl read", library.shelves[genre])
  var booksOnShelf = library.shelves[genre]
  var checkedOut = false
    for (var i = 0 ; i < booksOnShelf.length; i++) {
      console.log(i,"show books on Shelves",booksOnShelf[i])
      if (title === booksOnShelf[i].title) {
      console.log("taking of book from whereEver it is", booksOnShelf.splice(i,1))
       booksOnShelf.splice(i,1);
       checkedOut = true;
      }
return
  checkedOut ? `you have now checked out ${title} from the ${library.name}`
  : `Sorry, there are currently no copies of ${title} available at the ${library.name}`
    }
  };
// ternary operator else if shorthand is ?:
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
