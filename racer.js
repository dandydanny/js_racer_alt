var Player = function (player_name){
	this.position = 0;
	this.name = player_name;
	console.log(name);

	console.log(track_length);

	this.advance = function()
	{
		console.log("advance() invoked for player: " + this.name);
		this.position = this.position + 10;
		//check if position >= track_length
		console.log("track_length: " + track_length);
		console.log("position: " + this.position);
		if (this.position == track_length){
			console.log(this.name + " wins!")
			$('.status').html("<div class=\"status\">" + this.name + " Wins!</div>")
		}
	}

	this.reset = function()
	{
		this.position = 0;
	}
}

function resetRace(){
	position=0;
	$(".player").css("left", "0px");
	return position;
}

$(document).ready(function() {

	console.log("js ready");

	window.track_length = 100;
	window.enable_race = true;

	var p1 = new Player("Tommy");
	var p2 = new Player("Aaron");

	$("#reset-button").click(function(){
		position = p1.reset();
    resetRace();
	});

	console.log(p1);
	console.log(p1.name);
	console.log(p1.position);

	$("#advance-button").click(function(){
		p1.advance();
		console.log(p1.position);
		$(".p1").css("left", p1.position);
	});

	console.log(p1.position);

});



