"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Like {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.user = data.user;
    }
    getLike() {
        return {
            id: this.id,
            user: this.user,
        };
    }
}
exports.default = Like;
