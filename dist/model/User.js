"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const tweets_db_1 = require("../database/tweets.db");
const users_db_1 = require("../database/users.db");
class User {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.followers = [];
        this.following = [];
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.maskPassword(),
            followers: this.followers,
            following: this.following,
        };
    }
    createUser(user) {
        const verifyUser = users_db_1.users.find((user) => user.email === user.getUser().email);
        if ((verifyUser === null || verifyUser === void 0 ? void 0 : verifyUser.email) === user.email) {
            console.log(`O usuário já existe.`);
        }
        else {
            users_db_1.users.push(user);
            console.log(`Usuário criado com sucesso.`);
        }
    }
    maskPassword() {
        let mask = "";
        for (let index = 0; index < this.password.length; index++) {
            mask += "*";
        }
        return mask;
    }
    updatePassword(password) {
        if (password.length >= 4) {
            this.password = password;
            console.log(`Senha atualizada com sucesso.`);
        }
        else {
            console.log(`A senha precisa ter 4 ou mais caracteres.`);
        }
    }
    sendTweet(tweet) {
        tweets_db_1.tweets.push(tweet);
    }
    follow(user) {
        if (this.getUser().username === user.username) {
            console.log("O usuário não pode seguir a si mesmo.");
        }
        else {
            this.following.push(user);
            console.log("Você agora está seguindo este usuário.");
        }
    }
    showFeed() { }
    showTweets() {
        const userTweets = tweets_db_1.tweets.filter((tweet) => tweet.getTweet().user.username === this.username);
        userTweets.map((userTweet) => {
            console.log(`
        @${userTweet.user.username}: ${userTweet.content}
              ${userTweet.likes.length}
              >${userTweet.replies}
        `);
        });
    }
}
exports.default = User;
