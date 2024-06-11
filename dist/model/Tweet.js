"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Tweet {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.content = data.content;
        this.type = data.type;
        this.likes = [];
        this.user = data.user;
        this.replies = [];
    }
    getTweet() {
        return {
            id: this.id,
            content: this.content,
            type: this.type,
            likes: this.likes,
            user: this.user,
        };
    }
    reply(tweet, content) { }
    like(user, like) {
        const userWhoLiked = user.getUser().username;
        this.likes.push(like);
        return {
            user: userWhoLiked,
        };
    }
    show() { }
    showReplies() { }
}
exports.default = Tweet;
