function createTitle(title) {
return `The ${title}`
}

function buildMainCharacter(name , age, pronouns) {
return {
  name: name,
  age: age,
  pronouns: pronouns
  };
}
function saveReview(statement, listOfReviews){
  if(listOfReviews.includes(statement) === false ){
    listOfReviews.push(statement)
    console.log("Array of listOfReviews",listOfReviews)
  };

console.log("Array of listOfReviews w/methods",listOfReviews);
};


function calculatePageCount(title) {
return title.length * 20
};

function writeBook(bookTitle, bookCharacter, pageCount,) {
return book = {
title: bookTitle,
mainCharacter: bookCharacter,
pageCount: bookTitle.length * 20,
genre: "fantasy"
  };
};

function editBook(book){
book.pageCount = book.pageCount * .75
return book
};
module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
