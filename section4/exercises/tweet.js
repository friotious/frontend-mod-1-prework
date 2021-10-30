/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
    changeAuthor(theAuthor) {
      this.author = theAuthor;
    }
    changeContent(tweetContent) {
      this.content = tweetContent;
    }
    changeTime(timeTweet) {
      this.timeStamp = timeTweet;
    }
    numLikes() {
      this.numberOfLikes = this.numberOfLikes +1;
    }
    addComments(newComments) {
      this.comments.push(newComments);
    }
};

var tweet1 = new Tweet("Joe", "cat meme", "11:27", 2, ["Cool!", "Neat!", "Swell"]);
var tweet2 = new Tweet("Moe", "dog meme", "03:43", 3, ["Why?", "Rude!", "Unfollow..."]);
var tweet3 = new Tweet("Moe", "penguin meme", "2:12", 4, ["Cool penguin meme", "Yay!"]);

tweet2.addComments("WTF");
console.log(tweet2);
tweet2.numLikes();
tweet2.numLikes();
console.log(tweet2);
