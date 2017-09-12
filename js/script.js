var data = [];

//pulls JSON data
$.getJSON('../data.json', function(res) {
	var imgs = "";
	$.each(data, function(){
		img += "<img>"
	});
	shuffle();
	console.log(data[0]);
});

// create deck function
function getDeck() {
	var deck = new Array();
	for(var i = 0; i < suits.length; i++){
		for(var x = 0; x < rank.length; x++){
			var card = {Value: rank[x], Suit: suits[i]};
			deck.push(card);
		}
	}
	return deck;
}

// shuffle function
function shuffle()
{
	for (var i = 0; i < 500; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
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


