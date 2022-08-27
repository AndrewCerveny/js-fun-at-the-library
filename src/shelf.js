
function shelfBook(bookObj,sciFiShelf) {
  if(sciFiShelf.length < 3) {
  sciFiShelf.unshift(bookObj);
  console.log(sciFiShelf);
for(var i = 0; i < sciFiShelf.length; i++)
console.log(i,sciFiShelf[i])
  }
return
};

function unshelfBook(sciFiShelf){
  console.log(sciFiShelf)
};
// trying to figure out how to access the array
// try to unshelf object dune from name argument "dune"
//return an arr with 2 elements left on shelf 




















module.exports = {
  shelfBook,
   unshelfBook,
  // listTitles,
  // searchShelf
};
