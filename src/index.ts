import {likes} from "./database/likes.db";
import {replies} from "./database/replies.db";
import {tweets} from "./database/tweets.db";
import {users} from "./database/users.db";
import {Like, Reply, Tweet, User} from "./model";

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

const user3 = new User({
  name: "Marcele",
  username: "MarceleGrowdev",
  email: "marcele@growdev.com",
  password: "boraDeDaily!",
});

// ---------------------------------------------------------------------------

const like1 = new Like({user: user1});
const like2 = new Like({user: user2});
const like3 = new Like({user: user3});

// ---------------------------------------------------------------------------

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

const tweet3 = new Tweet({
  content: "Atividade prática hoje!",
  type: "Normal",
  user: user3,
});

// ---------------------------------------------------------------------------

const reply1 = new Reply({
  content: "Tomara que não seja muito difícil...",
  type: "Reply",
  user: user1,
});

const reply2 = new Reply({
  content: "Fala Ribas!",
  type: "Reply",
  user: user2,
});

const reply3 = new Reply({
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

console.log("---------------------------------------------------------------------------");

user2.showFeed();

console.log("---------------------------------------------------------------------------");

user3.showFeed();
