"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user1 = new model_1.User({
    name: "Eduardo",
    username: "Edsamn",
    email: "edsamn@gmail.com",
    password: "123456",
});
const user2 = new model_1.User({
    name: "Marcelo",
    username: "MarceloGrowdev",
    email: "marcelo@growdev.com",
    password: "boraGrowdevers!",
});
const like = new model_1.Like({});
const tweet1 = new model_1.Tweet({
    content: "Olá",
    type: "Normal",
    user: user1,
});
const tweet2 = new model_1.Tweet({
    content: "Bora de React?",
    type: "Normal",
    user: user2,
});
user1.createUser(user1);
user2.createUser(user2);
user1.sendTweet(tweet1);
user2.sendTweet(tweet2);
tweet1.like(user1, like);
tweet1.like(user2, like);
// user1.showTweets();
user2.follow(user1);
// user2.showTweets();
user2.showFeed();
