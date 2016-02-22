$(document).ready(function(){

$('button').on('click', function(event){
		event.preventDefault();
		// add user input from text field to a new list item with the class 'listItem' in the unordered list
		$('#listOfItems').append($('<li>',
			{text: document.getElementById('itemInput').value}));
		$('li').(addClass('listItem');)
		// clear the text input field after the button has been clicked
		$('input:text').val('');
    });
});

