function shelfBook(bookObj,booksOnShelf){
  booksOnShelf.splice(0,1,bookObj)
  console.log("step1",booksOnShelf)
  booksOnShelf.push(bookObj)
  console.log("Step 2 added obj to front",booksOnShelf)
  return console.log(booksOnShelf[1])
};
// order is (DUNE, Hyperion,Dune)here****







module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
