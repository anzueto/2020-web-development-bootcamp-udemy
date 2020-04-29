var name = 'Jose';
name.slice(0, 1); // grabing the first character
name.slice(3, 4); // grabing the last character
name.slice(0, 3); // answer  = Jos

// a good understanding to do slice is tu substract right from left ex
// slice(2,4) = 4 - 2 = 2 characters
// slice(2,5) = 5 - 2 =  3 characters


//  ======challenge
// show only the first 140 characters of their tweet to the user

var tweet = prompt('Compose your tweet:');
var tweetUnder140 = tweet.slice(0, 140); // setting the range of characters 0 to 140
alert(tweetUnder140);



