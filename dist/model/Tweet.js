"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const likes_db_1 = require("../database/likes.db");
const replies_db_1 = require("../database/replies.db");
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
            replies: this.replies,
        };
    }
    reply(reply) {
        replies_db_1.replies.push(reply);
        this.replies.push(reply);
    }
    like(like) {
        this.likes.push(like);
        likes_db_1.likes.push(like);
        console.log("Tweet curtido.");
    }
    show() { }
    showReplies() {
        this.replies.map((reply) => {
            console.log(`>@${reply.getReply().user.username}: ${reply.getReply().content}`);
        });
    }
}
exports.default = Tweet;
