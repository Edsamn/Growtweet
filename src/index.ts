import {Like, Tweet, User} from "./model";

const user1 = new User({
  name: "Eduardo",
  username: "Edsamn",
  email: "edsamn@gmail.com",
  password: "123456",
});

const user2 = new User({
  name: "Marcelo",
  username: "MarceloGrowdev",
  email: "marcelo@growdev.com",
  password: "boraGrowdevers!",
});

const like1 = new Like({});
const like2 = new Like({});
const like3 = new Like({});

const tweet1 = new Tweet({
  content: "Olá",
  type: "Normal",
  user: user1,
});

const tweet2 = new Tweet({
  content: "Bora de React?",
  type: "Normal",
  user: user2,
});

user1.createUser(user1);
user2.createUser(user2);
user1.sendTweet(tweet1);
user2.sendTweet(tweet2);
tweet1.like(user1, like1);
tweet1.like(user2, like2);
// user1.showTweets();
user2.follow(user1);
// user2.showTweets();
user2.showFeed();
