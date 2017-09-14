var cardObject = [{
	"rank": 2,
	"suit": "clubs",
	"img": "img/2_of_clubs.png"
},
{
	"rank": 2,
	"suit": "diamonds",
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

// console.log(cardObject[20].img);

// empty array for creating the deck
var playerHand = [];
var opponentHand = [];
var startCards = [];
var helpDeck = [];
var discard = [];

// shuffle function
function shuffle(array) {
	var m = cardObject.length, t, i;
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

// clicks card in hand, want this to move to the start card position
$(".handCard").click(function(){
	//this = card clicked
	var playerCard = parseInt(this.childNodes[0].className);
	var startCard1 = startCards[0].rank;
	var startCard2 = startCards[1].rank;
	if(Math.abs(startCard1 - playerCard) < 2) {
		//remove from playerHand array 
		$(startCard1).img.replaceWith(this);
		startCard1.splice(this).push(discard);
		//add to index 0 of startCards

		//draw a new card and add it to your hand
		//display new card from deck in hand
	} else if(Math.abs(startCard2 - playerCard) < 2) {

	} else {
		console.log("Pick another card.")
	}
});	


function getCards(array, hand, length) {
	if(array.length > length) {
		for(var i = 0; i < length; i++) {
			hand.push(array.pop());
		}
	} else {
		for(var i = 0; i < array.length; i++) {
			hand.push(array.pop());
		}
	}
}

// generates hand cards
function displayHand(array) {
	for(var i = 0; i < array.length; i++) {
		showHand(array[i].img, array[i].rank, 56, 90, i);
	}
}

//generates start cards
function displayStartCard(array) {
	for(var i = 0; i < array.length; i++) {
		showStartCard(array[i].img, array[i].rank, 70, 100, i);
	}
}

//shows img on hand cards
function showHand(src, rank, width, height, index) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.className = rank;

    //add img to hand
    document.getElementsByClassName("handCard")[index].appendChild(img);
}

// shows img on start cards
function showStartCard(src, rank, width, height, index) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.className = rank;

    // add img to start position
    document.getElementsByClassName("startCard")[index].appendChild(img);
}

//shuffle cards
shuffle(cardObject);

//distribute cards
getCards(cardObject, playerHand, 5);
getCards(cardObject, opponentHand, 5);
getCards(cardObject, startCards, 2);
getCards(cardObject, helpDeck, 5);
getCards(cardObject, helpDeck, 5);

//display cards
displayHand(playerHand);
displayStartCard(startCards);