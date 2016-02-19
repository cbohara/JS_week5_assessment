(function(){
  /* OBJECTIVE: 

	Starting on line ___ start writing the functionality that will allow us to add an item to our list that has the text value that the user inputs.

	You can see an example of what your list item should look like in the html.

	We have created a library in the library.js file that will help you accomplish this. Feel free to ignore the library if you'd like to figure out how to work with the DOM yourself.

	EXTRA CREDIT:

	[ ] Figure out how to add the 'listItem' class to your list items and use CSS to style your list items.
	
  */
  document.addEventListener("DOMContentLoaded", function(event) { 
  	
  	// grabbing the form
  	var itemForm = document.getElementById('itemForm');
  	// grabbing the input element that the user will be typing text to
  	var userInputElement = document.getElementById('itemInput');
  	// grabbing the list that we will be adding our list items to.
  	var itemList = document.getElementById('listOfItems');
  	
  	// adding a submit button to the item form
  	itemForm.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('hey!');
        // your code here
    });


  });


})();