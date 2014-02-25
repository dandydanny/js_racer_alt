function Player(player_name){
	this.position = 0;
	this.name = player_name;
	console.log(name);
}

function resetRace(){
	position=0;
	$(".player").css("left", "0px");
	return position;
}

function advancePlayer(player){
	$("p1");
}

$(document).ready(function() {

	console.log("js ready")

	var p1 = new Player("Tommy");
	var p2 = new Player("Aaron");


	$("#reset-button").click(function(){
		position = resetRace();
	});

	console.log(p1);
	console.log(p1.name);
	console.log(p1.position);

});



