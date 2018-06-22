var gold = 0;

//setup base stats
var strength = 0;
var constitution = 0;
var dexterity = 0;
var intelegence = 0;
var vitality = 0;

var maxHealth = 1;
var maxMana = 1;

var health = 1;
var mana = 1;

//setup resources values

var woodCount = 0;
var sandCount = 0;

//setup resource difficulties

var woodDifficulty = 1000;
var sandDifficulty = 500;

//button funtions

function giveWood(){
	woodCount = woodCount + 1;
	document.getElementById("woodValue").innerHTML = "Wood: " + woodCount;
	document.getElementById("woodValue").style.visibility = 'visible';
}
	