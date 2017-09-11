var cards = $.getJSON('../data.json', function(data) {
});

function randomizeCards(){
	var object = JSON.parse(cards);
	console.log(object)
	$(".handCard").click(function(){
		console.log("clicked");
		for(var i = 0; i < object.length; i++){
			var card = Math.floor(Math.random() * 52);
			$(".startCard").append('img')[i];
		}
	});		
}	
