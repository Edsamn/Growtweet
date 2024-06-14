import {TweetType, TypeOfTweetType} from "../types";
import {v4 as uuid} from "uuid";
import User from "./User";
import Like from "./Like";
import Reply from "./Reply";
import {likes} from "../database/likes.db";
import {replies} from "../database/replies.db";

class Tweet {
  private id: string;
  public content: string;
  private type: TypeOfTweetType;
  likes: Like[];
  replies: Reply[];
  user: User;

  constructor(data: TweetType) {
    this.id = uuid();
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

  reply(reply: Reply) {
    replies.push(reply);
    this.replies.push(reply);
  }

  like(like: Like) {
    this.likes.push(like);
    likes.push(like);
    console.log("Tweet curtido.");
  }

  show() {
    console.log(`${this.content}`);
  }

  showReplies() {
    this.replies.map((reply) => {
      console.log(`>@${reply.getReply().user.username}: ${reply.getReply().content}`);
    });
  }
}

export default Tweet;
