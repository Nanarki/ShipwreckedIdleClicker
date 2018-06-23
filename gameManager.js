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

//setup resources tools
var axeCount = 0;
var axeMultiplier = 1;
var axeCost = 10;

//button funtions - resource

function giveWood(){
	woodCount = woodCount + (1 + (axeCount * axeMultiplier * 3));
	document.getElementById("woodValue").innerHTML = "Wood: " + woodCount;
	document.getElementById("woodValue").style.visibility = 'visible';
	if (woodCount >= axeCost)
	{document.getElementById("buyaxe").style.visibility = 'visible';}
}


//button functions - tools	
function buyaxe(){
	if (woodCount >= axeCost)
	{
		woodCount = woodCount - axeCost;
		axeCount = axeCount + 1;
		axeCost = axeCost *1.1;
		if (woodCount < axeCost)
			{document.getElementById("buyaxe").style.visibility = 'hidden';}
			document.getElementById("axeCount").innerHTML = "axes: " + axeCount;
			document.getElementById("axeCount").style.visibility = 'visible';



	}
}