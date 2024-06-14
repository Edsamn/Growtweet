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
const user3 = new model_1.User({
    name: "Marcele",
    username: "MarceleGrowdev",
    email: "marcele@growdev.com",
    password: "boraDeDaily!",
});
// ---------------------------------------------------------------------------
const like1 = new model_1.Like({ user: user1 });
const like2 = new model_1.Like({ user: user2 });
const like3 = new model_1.Like({ user: user3 });
// ---------------------------------------------------------------------------
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
const tweet3 = new model_1.Tweet({
    content: "Atividade prática hoje!",
    type: "Normal",
    user: user3,
});
// ---------------------------------------------------------------------------
const reply1 = new model_1.Reply({
    content: "Tomara que não seja muito difícil...",
    type: "Reply",
    user: user1,
});
const reply2 = new model_1.Reply({
    content: "Fala Ribas!",
    type: "Reply",
    user: user2,
});
const reply3 = new model_1.Reply({
    content: "É barbada.",
    type: "Reply",
    user: user3,
});
// ---------------------------------------------------------------------------
user1.createUser(user1);
user2.createUser(user2);
user3.createUser(user3);
// ------------------------------------------------------------------------------
user1.sendTweet(tweet1);
user2.sendTweet(tweet2);
user3.sendTweet(tweet3);
// ---------------------------------------------------------------------------------
tweet1.like(like3);
tweet1.like(like2);
tweet3.like(like1);
// -------------------------------------------------------------------------------------
tweet1.reply(reply2);
tweet2.reply(reply1);
tweet2.reply(reply3);
// ---------------------------------------------------------------------------------
user1.follow(user2);
user1.follow(user3);
user2.follow(user1);
user2.follow(user3);
user3.follow(user1);
user3.follow(user2);
// --------------------------------------------------------------------
// console.log(tweets);
// console.log(likes);
// console.log(replies);
// console.log(users);
// ------------------------------------------------------------------------
console.log("---------------------------------------------------------------------------");
user1.showFeed();
