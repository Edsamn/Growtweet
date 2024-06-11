"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user1 = new model_1.User({
    name: "Eduardo",
    username: "Edsamn",
    email: "edsamn@gmail.com",
    password: "123456",
});
const like = new model_1.Like({});
const tweet1 = new model_1.Tweet({
    content: "Olá",
    type: "Normal",
    user: user1,
});
user1.createUser(user1);
user1.sendTweet(tweet1);
user1.showTweets();
tweet1.like(user1, like);
