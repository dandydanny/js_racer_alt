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
		  enable_race = false;
    }
	}

	this.reset = function()
	{
		this.position = 0;
	}
}

// Player.prototype.advance {
//   // prototype fn, saves memory
// }

function resetRace(){
	position=0;
	$(".player").css("left", "0px");
	return position;
}

$(document).ready(function() {

	console.log("js ready");

  // global vars
	window.track_length = 100;
	window.enable_race = true;

	var p1 = new Player("Tommy");
	var p2 = new Player("Aaron");

	$("#reset-button").click(function(){
		position = p1.reset();
    position = p2.reset();
    resetRace();
    enable_race = true;
    $("button.input").prop("disabled", false);
	});

	console.log(p1);
	console.log(p1.name);
	console.log(p1.position);

	$("#advance-button-1").click(function(){
		p1.advance();
		console.log(p1.position);
		$(".p1").css("left", p1.position);
    
    // disable or unbind user input until reset
    if (enable_race == false) {
      console.log("disabling buttons...");
      $("button.input").prop("disabled", true);
      $("#reset-button").css("display", "block");
    }
	});

  $("#advance-button-2").click(function(){
    p2.advance();
    console.log(p2.position);
    $(".p2").css("left", p2.position);
  });


	console.log(p1.position);

});



