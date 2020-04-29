var name = 'Jose';
name.length;

// alert(message + name);
console.log(name.length);

//  ======challenge
// you have 182 characters, you have -42 characters left 

var tweet = prompt('Compose your tweet:');
var tweetCount = tweet.length;
var tweetLimit = 140;
alert(`you have written ${tweetCount} characters, you have ${tweetLimit - tweetCount} characters remaining`)