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
	{title: 'College Drop Out' , artist: 'Kanye West' cost: 15, features: ['Madonna', 'Prince', 'Michael Jackson']},
	{title: 'Beyonce' , artist: 'Beyonce' cost: 19, features: ['Jay-z', 'Rihanna', 'Charlie Wilson']},
	{title: '1982' , artist: 'Taylor Swift' cost: 13, features: ['Beyonce', 'Prince', 'Kanye West']},
	{title: 'Off The Wall' , artist: 'Michael Jackson' cost: 17, features: ['Quincey Jones', 'Prince', 'Stevie Wonder']},
	{title: 'All Eyes On Me' , artist: 'Tupac' cost: 12, features: ['The Hustlers', 'Snoop Dog', 'Dr. Dre']},
	{title: 'Back To Black' , artist: 'Amy Winehouse' cost: 21, features: ['Adele']},
	{title: '21' , artist: 'Adele' cost: 14, features: ['Kanye West', 'Taylor Swift', 'Michael Jackson']},
	{title: 'Love Songs' , artist: 'John Legend' cost: 15, features: ['Andre 3000', 'Jay-Z', 'Alicia Keys']},
];
