import {ReplyType, TypeOfTweetType} from "../types";
import User from "./User";
import {v4 as uuid} from "uuid";

class Reply {
  id: string;
  content: string;
  type: TypeOfTweetType;
  user: User;

  constructor(data: ReplyType) {
    this.id = uuid();
    this.content = data.content;
    this.type = data.type;
    this.user = data.user;
  }
}

export default Reply;
