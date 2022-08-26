function shelfBook(bookObj,contentsOnShelves){
if(contentsOnShelves.length < 3) {
  contentsOnShelves.unshift(bookObj);
  console.log("taking first book",contentsOnShelves)
return
  };
};


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
