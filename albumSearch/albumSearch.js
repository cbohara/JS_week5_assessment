/*

Lucas is sifting through albums he's collected over the years and decides that he doesn't want any more Kanye West!

He'd like you to _.filter through his selection and return to him a new collection that has every album that doesn't have Kanye west as an ARTIST or as a featured artist.

We've imported the _.underscore library for you to use to solve this problem. The expected output is below.



EXPECTED OUTPUT:

LucasChosenAlbums = [

{title: 'Beyonce' , artist: 'Beyonce' cost: 19, features: ['Jay-z', 'Rihanna', 'Charlie Wilson']},
{title: 'Off The Wall' , artist: 'Michael Jackson' cost: 17, features: ['Quincey Jones', 'Prince', 'Stevie Wonder']},
{title: 'All Eyes On Me' , artist: 'Tupac' cost: 12, features: ['The Hustlers', 'Snoop Dog', 'Dr. Dre']},
{title: 'Back To Black' , artist: 'Amy Winehouse' cost: 21, features: ['Adele']},
{title: 'Love Songs' , artist: 'John Legend' cost: 15, features: ['Andre 3000', 'Jay-Z', 'Alicia Keys']},

]

*/

var Albums = [
	{title: 'College Drop Out' , artist: 'Kanye West', cost: 15, features: ['Madonna', 'Prince', 'Michael Jackson']},
	{title: 'Beyonce' , artist: 'Beyonce', cost: 19, features: ['Jay-z', 'Rihanna', 'Charlie Wilson']},
	{title: '1982' , artist: 'Taylor Swift', cost: 13, features: ['Beyonce', 'Prince', 'Kanye West']},
	{title: 'Off The Wall' , artist: 'Michael Jackson', cost: 17, features: ['Quincey Jones', 'Prince', 'Stevie Wonder']},
	{title: 'All Eyes On Me' , artist: 'Tupac', cost: 12, features: ['The Hustlers', 'Snoop Dog', 'Dr. Dre']},
	{title: 'Back To Black' , artist: 'Amy Winehouse', cost: 21, features: ['Adele']},
	{title: '21' , artist: 'Adele', cost: 14, features: ['Kanye West', 'Taylor Swift', 'Michael Jackson']},
	{title: 'Love Songs' , artist: 'John Legend', cost: 15, features: ['Andre 3000', 'Jay-Z', 'Alicia Keys']},
];
// _.filter through Lucas' selection and return to him a new collection with NO KANYE AT ALL
// need to filter out albums in which kanye is the main artist && albums in which kanye is a featured artist
// _.filter looks through each value in the list, returning an array of all the values that pass a truth test (predicate)

// loop through the features array within the album in collection
var noKanyeInFeatures = function(element){
	var result = true;
	// if Kanye is featured in the album, return false
	// if Kanye is not featured in the album, return true. this is helpful for our filter function because we will only add albums into the new collection that valuate to true
	_.each(element.features, function(index){
		if(index === "Kanye West"){
			result = false;
		}
	});
	return result;
};

// this function will filter through Lucas' collection of albums and only return the albums in which there is no Kanye (neither as the main artist nor the featured artist)
var LucasChosenAlbums = function(collection){
	// the array result from the filter function will contain the NO KANYE collection result
	return _.filter(collection, function(album){
	// only albums in which Kanye is not the main artist and not a featured artist will be added to the new collection
		return album.artist !== 'Kanye West' && noKanyeInFeatures(album);
	});
};

// var print = LucasChosenAlbums(Albums);
// console.log(print);

