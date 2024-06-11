import {Like, Tweet, User} from "./model";

const user1 = new User({
  name: "Eduardo",
  username: "Edsamn",
  email: "edsamn@gmail.com",
  password: "123456",
});

const like = new Like({});

const tweet1 = new Tweet({
  content: "Olá",
  type: "Normal",
  user: user1,
});

user1.createUser(user1);
user1.sendTweet(tweet1);
user1.showTweets();
tweet1.like(user1, like);
