var name = 'Jose';
name.toUpperCase();

// if i want my name to be saved as upper case
name = name.toUpperCase();

// in this case
// name = 'Jose'.toUpperCase()


// =========== to lowercase
//
name = name.toLowerCase();




// ====================   challenge
// prompt user their name.
// answer hello name
// first name has to have first letter cap

//1 store name in prompt as variable
var name = prompt('What is your name?');
//2 first letter capital
var firstCap = name.slice(0, 1).toUpperCase();
//3 get the letters after first cap letter
var restOfName = name.slice(1, name.length);
//4 alert with first cap letter and rest of name
alert(`hello ${firstCap}${restOfName}`);




// ========================= Angela version

//1 crate a variable that stores the name that the usser enters via proompt
var name = prompt('What is your name?');

//2 captialize the firt letter of their name
//a isolate the first character
var firstChar = name.slice(0, 1);

//b turn the first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

//c isolate the rest of the name
var restOfName = name.slice(1, name.length); // get the length of whaterver name lenght characters

// ====== c extra step to proof

var restOfName = restOfName.toLowerCase();

//d concactenate the first character with the rest of the characters
var captalizedName = upperCaseFirstChar + restOfName;

//3 we use capitilized version of their name to greet them using an alert
alert(`Hello ${captalizedName}`);



/// ================== main take aways ================
/*
even though i was able to solve the problem, angela's version was broken down piece by piece therefore making it eaiser to understand for other developers.

her use of comments on how to break the problem is something I should practice. I should implement this method on everything I do.

it is better to write easy to follow code than trying to look fancy or cutting corners


brake down big problems into little problems
if you get stuck brake down those little problems into tinier problems


*/