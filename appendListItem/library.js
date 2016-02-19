window.p = {};

/* create an HTML item by entering a string. 

example:

p.createItem('form'); --> <form></form>

*/
p.createItem = function(item){
	return document.createElement(item);
};

// adds an HTML item to another HTML item.
p.appendItem = function(itemToAddTo, itemToAdd){
	itemToAddTo.appendChild(itemToAdd);
	return itemToAddTo.children;
};

// gets the text value out of an input element.
p.getInputTextValue = function(item){
	return item.value;
};

// adds text value to an element.
p.addTextToElement = function(element, text){
	element.textContent = text;
	return element.textContent;
};