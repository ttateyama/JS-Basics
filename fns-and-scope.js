//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
	var name = prompt("Please enter your name");
	return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
	var name = getName();
	return alert("Welcome, " + name);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//Parameters act as aliases for arguments and are in function definition. Arguments are the actual values passed into a function.
//Example:
function giveMeParameters(param1, param2) { //param1 and param2 are parameters or aliases to let the function know what to accept
}
giveMeParameters("argument", "another argument");//"argument" and "another argument" are arguments or actual values passed into a function

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//undefined
//null
//NaN
//""
//0
//false
//I would just throw the value into an if statement

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName() {
	return "Terra Tateyama";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = function() {
    return myName();
}
//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
