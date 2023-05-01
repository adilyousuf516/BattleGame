// Battle Game Project 4.25.23

/* Simple text-based choose your own adventure game using HTML, CSS and Javascript. Focusing on user input, logic, functions and events.*/

// add an event listener to the button element
document.getElementById("button").addEventListener("click", startBattle);

// Definition of the startBattle() function which controls the game itself

function startBattle() {
	// clear and old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// initial prompt for the user input that gets stored in a variable
	let action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you try to BRIBE the troll?").toUpperCase(); 

	// switch statement to handle the player's initial choice
	switch(action) {
		case "FIGHT": { 
			fightBattle()
			break;
		} // end of case FIGHT

		case "RUN": {
			runBattle()
			break;
		} // end of case RUN

		case "BRIBE": {
			bribeBattle()
			break;

		} //end of case BRIBE

		default: {
			//the user has not entered a valid choice at the original prompt
			window.alert("You enter: " + action + ". That is not a valid choice! Please try again!"); 
			startBattle();
			break;
		} //end of default case
	} // end of switch statement
}	// end of startBattle() function

// definition of the fightBattle() function
function fightBattle(){
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Are you a stronger than a troll? (YES or NO)").toUpperCase();

// IF statement that analyzes the responses
	if(skill === "YES" || strong === "YES") {
		// the user said YESto at least one of the prompts 
		document.getElementById("victory").innerHTML = "You can either be stronger or more skilled than a troll to survive.</br>You survive another day!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		// the user did NOT respond YES to either prompt
		document.getElementById("defeat").innerHTML = "You are not skilled or strong? Why did you fight a troll?<br/>You have been deafted!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent ="Play Again?"; 
	} // end of IF statement
} // end of fightBattle() function

// Definition of the runBattle() function
function runBattle() {
	let fast = window.prompt("Are you a fast? (YES or NO)").toUpperCase();
	if(fast === "YES"){
		document.getElementById("victory").innerHTML = "Your speed has saved you.<br/>But can you live with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		document.getElementById("defeat").innerHTML = "If you're going to run at least be faster than a troll<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent ="Play Again?"; 
	}
}// end of the runBattle() function

//defintion of the bribeBattle()function
function bribeBattle(){
	let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();

	if(money === "YES"){
		// now ask if they have the correct amount
		let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE.");
		//try to convert the input to an intergar value
		amount = parseInt(amount);
		// check that amount against our condition
		if(amount > 50) {
			document.getElementById("victory").innerHTML = "Great job, the troll is happy!<br/>You may pass!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
		//user had money, just not the correct amount(basically less than 50)
		} else {
			document.getElementById("defeat").innerHTML = "The troll needs more than that!</br>Your fate is sealed!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent ="Play Again?"; 
		}
	} else {
		//user said they didn't have money
		document.getElementById("defeat").innerHTML = "No money? Trolls don't have venmo... yet<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent ="Play Again?"; 
	}
} // end of bribeBattle() function
