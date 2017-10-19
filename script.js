/* 





7. Add button called clear read bookmarks with an event listener 
with a function that clears all of the read bookmarks.

*/

// variables
var enterButton = document.querySelector('.enter');
var bookmarkList = document.querySelector('.bookmark-list');
var title = document.querySelector('.website-title');
var url = document.querySelector('.website-url');
var bookmarkCounter = document.querySelector('.bookmark-counter');
var readCounter = document.querySelector('.read-counter');
var unreadCounter = document.querySelector('.unread-counter');

// event listeners
enterButton.addEventListener('click', userInput); 
bookmarkList.addEventListener('click', function(event){
if (event.target.className ==='unread' || event.target.className ==='unread read'){
  event.target.classList.toggle('read');
  event.target.closest('article').classList.toggle('read-card');
  countBookmarks();
} 
  if (event.target.className === 'delete'){
    event.target.closest('article').remove();
    countBookmarks();
  }
})

// functions
function countBookmarks(){
  var bookmarkCount = document.querySelectorAll('article').length -1;
  var readCardCount = document.querySelectorAll('.read-card').length;
  var unreadCardCount = bookmarkCount - readCardCount;
  bookmarkCounter.innerText = bookmarkCount;
  readCounter.innerText = readCardCount;
  unreadCounter.innerText = unreadCardCount;
}

title.addEventListener('keyup', function()
{
  if (title.value === "" || url.value === "") {
    enterButton.setAttribute('disabled',true);
}
  else  {
    enterButton.removeAttribute('disabled');
}
});

url.addEventListener('keyup', function(){
if (title.value === "" || url.value === "") {
  enterButton.setAttribute('disabled',true)
}
else {
  enterButton.removeAttribute('disabled')
}
  
});


// function validateURL () {
//   var urlValue = url.value;
//   var regEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

//   urlValue.test(regex):
// }


function userInput(event) {
  event.preventDefault();
  var websiteTitle = document.querySelector('.website-title').value;
  var websiteUrl = document.querySelector('.website-url').value;
  var card = new Bookmark(websiteTitle, websiteUrl);
  bookmarkList.innerHTML+=(makeCard(card));
  countBookmarks();
}
// += adds on to what you already have in there!
function Bookmark(title, url) { 
    this.title = title;
    this.url = url;
  }

  function makeCard(completedCard) {
    var newTitle = completedCard.title;
    var newUrl = completedCard.url;
    return (`<article class='bookmark-card'>
      <h2 class="website-title">${newTitle}</h2>
      <hr>
      <a class='url' href="${newUrl}">${newUrl}</a>
      <hr>
      <button class='unread'>Read</button>
      <button class='delete'>Delete</button>
    </article>`)
  }
 

