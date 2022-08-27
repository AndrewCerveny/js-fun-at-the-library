
function shelfBook(bookObj,sciFiShelf) {
  if(sciFiShelf.length < 3) {
  sciFiShelf.unshift(bookObj);
  console.log(sciFiShelf);
for(var i = 0; i < sciFiShelf.length; i++)
console.log(i,sciFiShelf[i])
  }
return
};

function unshelfBook(title,sciFiShelf){
  for(var i = 0; i < sciFiShelf.length; i ++){
    console.log(i,"current state:", sciFiShelf[i])
    if(title === sciFiShelf[i].title){
      sciFiShelf.splice(i,1)
    }
  }
return
};

function listTitles(fantasyShelf) {
  for(var i = 0; i < fantasyShelf.length; i++){
    console.log(i,"current State:",fantasyShelf[i])
console.log (fantasyShelf.title)
return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
  }
};

function searchShelf(sciFiShelf, bookName) {
for(var i = 0; i < sciFiShelf.length; i++){
  console.log("showing Array",sciFiShelf)
  console.log("show Dune as str",sciFiShelf[0].title)
  if(sciFiShelf[i].title === bookName) {
    return true
    }
  }   return false
};

































module.exports = {
  shelfBook,
   unshelfBook,
  listTitles,
  searchShelf
};
