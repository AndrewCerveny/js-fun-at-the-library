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
  };
  return listOfReviews
};


module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
};
