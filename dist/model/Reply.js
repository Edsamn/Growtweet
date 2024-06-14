"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Reply {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.content = data.content;
        this.type = data.type;
        this.user = data.user;
    }
    getReply() {
        return {
            id: this.id,
            content: this.content,
            type: this.type,
            user: this.user,
        };
    }
}
exports.default = Reply;
