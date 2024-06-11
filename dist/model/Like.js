"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Like {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
    }
    getLike() {
        return {
            id: this.id,
        };
    }
}
exports.default = Like;
