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


// event listeners
enterButton.addEventListener('click', userInput); 



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
    console.log (newUrl)
    return (`<article class="bookmark-card">
      <h2 class="website-title">${newTitle}</h2>
      <hr>
      <a class="url" href="${newUrl}">${newUrl}</a>
      <hr>
      <button class="read">Read</button>
      <button class="delete">Delete</button>
    </article>`)
  }
 
 document.querySelector(".bookmark-list").addEventListener('click',function() {
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




