function createTitle(title) {
return `The ${title}`
}

function buildMainCharacter(name,age,pronouns) {
return {
  name:name,
  age:age,
  pronouns:pronouns
  };
}
function saveReview(statement,listOfReviews){
// for(var i = 0;i < listOfReviews.length; i++) {
//   if(listOfReviews[i] === statement){
listOfReviews.push(statement);
return listOfReviews
};

module.exports = {
  createTitle,
   buildMainCharacter,

  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
