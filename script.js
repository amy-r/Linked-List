/* 
1.Two input fields with  one button (enter) with an 
event listener and functions that capture the  values
 of  those input fields.
    1.1 Add the bookmark to the bookmarks section.
        * Create an element node and inject inner HTML into it.
    1.2 If else statement for if they don't enter the required info

    1.3 Method take the input field, put it into a prototype.  



2. Function that takes the url of the bookmark and turns
it into a clickable link -html element.
    2.1 There's a way! Google it.


3. Create a button for the mark as read. A class of .read
should be added to the bookmark when this is checked.
If it already has .read it should be removed.
    3.1 Style two classes. One for .read, one for .unread. 
    3.2 Add event listener to the button.
    3.3 Create an if else conditional. If (read) {click} else if (unread)
    {unclick?}



4. Make buttons disabled if nothing in the input fields.
   4.1 button = disabled. If both fields are filled, button =!disabled.


5.Add a way to scroll through the bookmarks and urls. 
  5.1 Probs not in CSS but maybe.

6. Create a counter to track total number of links/bookmarks added.
  (does this need to be displayed?)
    6.1 Google it!

7. Add button called clear read bookmarks with an event listener 
with a function that clears all of the read bookmarks.

9. 




*/

// variables
var enterButton = document.querySelector('.enter');
var bookmarkList = document.querySelector('.bookmark-list');
var title = document.querySelector('.website-title');
var url = document.querySelector('.website-url');
var bookmarkCounter = document.querySelector('.bookmark-counter');
var readCounter = document.querySelector('.read-counter');
var unreadCounter = document.querySelector('.unread-counter');

// need to make an event.preventDefault 

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
  console.log("you're typing")
  if (title.value === "" || url.value === "") {
    enterButton.setAttribute('disabled',true);
    console.log("I'm disabled");
}
  else  {
    enterButton.removeAttribute('disabled');
    console.log("I'm not disabled anymore");
}
});

url.addEventListener('keyup', function(){
  console.log("you're still tryping")
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

// if values are both there, then an enable button
// regex-copy and paste it.

function userInput(event) {
  event.preventDefault();
  var websiteTitle = document.querySelector('.website-title').value;
  console.log(websiteTitle)
  var websiteUrl = document.querySelector('.website-url').value;
  console.log(websiteUrl)
  var card = new Bookmark(websiteTitle, websiteUrl);
    console.log (card)
  console.log('negative nancy')
  bookmarkList.innerHTML+=(makeCard(card));
  countBookmarks();
}
// += adds on to what you already have in there!
function Bookmark(title, url) { 
    this.title = title;
    this.url = url;
    console.log('made a bookmark');
    // title = title.value;
    // url = url.value;
    // var newBookmark = title.createElement('.bookmark-card');
    // console.log('yippee')
    // var newContent = url.createTextNode();
    // console.log('woah')
  }

  function makeCard(completedCard) {
    var newTitle = completedCard.title;
    var newUrl = completedCard.url;
    // var actualURL;
    // if(/^(http[s]?:\/\/)/.test(link) === false) {
    //     link = 'https://' + link;
    // }

    console.log (newUrl)
    return (`<article class='bookmark-card'>
      <h2 class="website-title">${newTitle}</h2>
      <hr>
      <a class='url' href="${newUrl}">${newUrl}</a>
      <hr>
      <button class='unread'>Read</button>
      <button class='delete'>Delete</button>
    </article>`)
  }
 
 document.querySelector('.bookmark-list').addEventListener('click',function() {
 this.target
});

// give id to the article. h5 onClick= ''
 // checkValidity function- 


// methods
// 

// formValidity
// make a target for a click


// Date.now= a given js that creates a time stamp
// make read and delete





// functions
// 
// function makeLink(argument) {

// prepend to change input to a link




