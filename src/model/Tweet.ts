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
  replies: string[];
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
    const newReply = reply.getReply().content;
    console.log(`@${reply.getReply().user.username}: ${newReply}`);
    this.replies.push(newReply);
    replies.push(reply);
  }

  like(user: User, like: Like) {
    const userWhoLiked = user.getUser().username;
    this.likes.push(like);
    likes.push(like);
    return {
      user: userWhoLiked,
    };
  }

  show() {
    const showReplies = this.replies.map((reply) => {
      console.log(`>@${reply}: ${this.getTweet().replies}`);
    });
    console.log(`
      @${this.getTweet().user.username}: ${this.getTweet().content}
              ${this.getTweet().likes.length}
              ${showReplies}
      `);
  }

  showReplies() {
    this.replies.map((reply) => {
      console.log(`>@${reply}: ${this.getTweet().replies}`);
    });
  }
}

export default Tweet;
