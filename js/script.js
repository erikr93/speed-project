
// var cardData = JSON.parse(data);
// console.log(cardData);

var cardObject = [{
	"rank": 2,
	"suit": "clubs",
	"img": "img/2_of_clubs.png"
},
{
	"rank": 2,
	"suit":"diamonds",
	"img": "img/2_of_diamonds.png"
},
{
	"rank": 2,
	"suit": "hearts",
	"img": "img/2_of_hearts.png"
},
{
	"rank": 2,
	"suit": "spades",
	"img": "img/2_of_spades.png"
},
{
	"rank": 3,
	"suit": "clubs",
	"img": "img/3_of_clubs.png"
},
{
	"rank": 3,
	"suit":"diamonds",
	"img": "img/3_of_diamonds.png"
},
{
	"rank": 3,
	"suit": "hearts",
	"img": "img/3_of_hearts.png"
},
{
	"rank": 3,
	"suit": "spades",
	"img": "img/3_of_spades.png"
},
{
	"rank": 4,
	"suit": "clubs",
	"img": "img/4_of_clubs.png"
},
{
	"rank": 4,
	"suit": "diamonds",
	"img": "img/4_of_diamonds.png"
},
{
	"rank": 4,
	"suit": "hearts",
	"img": "img/4_of_hearts.png"
},
{
	"rank": 4,
	"suit": "spades",
	"img": "img/4_of_spades.png"
},
{
	"rank": 5,
	"suit": "clubs",
	"img": "img/5_of_clubs.png"
},
{
	"rank": 5,
	"suit": "diamonds",
	"img": "img/5_of_diamonds.png"
},
{
	"rank": 5,
	"suit": "hearts",
	"img": "img/5_of_hearts.png"
},
{
	"rank": 5,
	"suit": "spades",
	"img": "img/5_of_spades.png"
},
{
	"rank": 6,
	"suit": "clubs",
	"img": "img/6_of_clubs.png"
},
{
	"rank": 6,
	"suit": "diamonds",
	"img": "img/6_of_diamonds.png"
},
{
	"rank": 6,
	"suit": "hearts",
	"img": "img/6_of_hearts.png"
},
{
	"rank": 6,
	"suit": "spades",
	"img": "img/6_of_spades.png"
},
{
	"rank": 7,
	"suit": "clubs",
	"img": "img/7_of_clubs.png"
},
{
	"rank": 7,
	"suit": "diamonds",
	"img": "img/7_of_diamonds.png"
},
{
	"rank": 7,
	"suit": "hearts",
	"img": "img/7_of_hearts.png"
},
{
	"rank": 7,
	"suit": "spades",
	"img": "img/7_of_spades.png"
},
{
	"rank": 8,
	"suit": "clubs",
	"img": "img/8_of_clubs.png"
},
{
	"rank": 8,
	"suit": "diamonds",
	"img": "img/8_of_diamonds.png"
},
{
	"rank": 8,
	"suit": "hearts",
	"img": "img/8_of_hearts.png"
},
{
	"rank": 8,
	"suit": "spades",
	"img": "img/8_of_spades.png"
},
{
	"rank": 9,
	"suit": "clubs",
	"img": "img/9_of_clubs.png"
},
{
	"rank": 9,
	"suit": "diamonds",
	"img": "img/9_of_diamonds.png"
},
{
	"rank": 9,
	"suit": "hearts",
	"img": "img/9_of_hearts.png"
},
{
	"rank": 9,
	"suit": "spades",
	"img": "img/9_of_spades.png"
},
{
	"rank": 10,
	"suit": "clubs",
	"img": "img/10_of_clubs.png"
},
{
	"rank": 10,
	"suit": "diamonds",
	"img": "img/10_of_diamonds.png"
},
{
	"rank": 10,
	"suit": "hearts",
	"img": "img/10_of_hearts.png"
},
{
	"rank": 10,
	"suit": "spades",
	"img": "img/10_of_spades.png"
},
{
	"rank": 11,
	"suit": "clubs",
	"img": "img/jack_of_clubs2.png"
},
{
	"rank": 11,
	"suit": "diamonds",
	"img": "img/jack_of_diamonds2.png"
},
{
	"rank": 11,
	"suit": "hearts",
	"img": "img/jack_of_hearts2.png"
},
{
	"rank": 11,
	"suit": "spades",
	"img": "img/jack_of_spades2.png"
},
{
	"rank": 12,
	"suit": "clubs",
	"img": "img/queen_of_clubs2.png"
},
{
	"rank": 12,
	"suit": "diamonds",
	"img": "img/queen_of_diamonds2.png"
},
{
	"rank": 12,
	"suit": "hearts",
	"img": "img/queen_of_hearts2.png"
},
{
	"rank": 12,
	"suit": "spades",
	"img": "img/queen_of_spades2.png"
},
{
	"rank": 13,
	"suit": "clubs",
	"img": "img/king_of_clubs2.png"
},
{
	"rank": 13,
	"suit": "diamonds",
	"img": "img/king_of_diamonds2.png"
},
{
	"rank": 13,
	"suit": "hearts",
	"img": "img/king_of_hearts2.png"
},
{
	"rank": 13,
	"suit": "spades",
	"img": "img/king_of_spades2.png"
},
{
	"rank": 1,
	"suit": "clubs",
	"img": "img/ace_of_clubs.png"
},
{
	"rank": 1,
	"suit": "diamonds",
	"img": "img/ace_of_diamonds.png"
},
{
	"rank": 1,
	"suit": "hearts",
	"img": "img/ace_of_hearts.png"
},
{
	"rank": 1,
	"suit": "spades",
	"img": "img/ace_of_spades.png"
}];

console.log(cardObject[0].img);
// pulls JSON data
$.getJSON('../data.json', function(data) {
	var imgs = "";

	$.each(data, function(key, value){
		// imgs += val(value.img);

	});
	shuffle();
	console.log(data[0]);
});

// empty array for creating the deck
var data = [];

// shuffle function
function shuffle(array) {
	getNewDeck();
  var m = data.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// clicks card in hand eventually want this to move to the start card position
$(".handCard").click(function(){
		console.log("clicked");
		var card = 0;
		for(var i = 0; i < data.length; i++){
			card = Math.floor(Math.random() * 52);
		}
	});	

//trying to pull image from JSON file and place on cards in hand
// data.img.forEach( function(obj) {
//   var img = new Image();
//   img.src = obj.bannerImg1;
//   document.getElementsByClassName("handCard").appendChild(img);
// });

// card object
// function card() {
//   var thisImage = new Image();
//   thisImage.src = "";
//   this.rank = "";
//   this.suit = 0;
//   this.img = thisImage.src;
// }

// function getNewDeck() {
//   for (var i = 0; i < cardData.length; i++) {
//     var thisCard = new Card();
//     thisCard.rank = cardData[i].rank;
//     thisCard.suit = cardData[i].suit;
//     thisCard.img = cardData[i].img;
//     newDeck.push(thisCard);
//   }
// }