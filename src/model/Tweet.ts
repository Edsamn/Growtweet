import {TweetType, TypeOfTweetType} from "../types";
import {v4 as uuid} from "uuid";
import User from "./User";
import Like from "./Like";
import Reply from "./Reply";

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

  reply(reply: Reply, content: string) {}

  like(user: User, like: Like) {
    const userWhoLiked = user.getUser().username;
    this.likes.push(like);
    return {
      user: userWhoLiked,
    };
  }

  show() {
    console.log(`
      @${this.getTweet().user.username}: ${this.getTweet().content}
              ${this.getTweet().likes.length}
              >${this.getTweet().replies}
      `);
  }

  showReplies() {
    console.log(`${this.getTweet().replies}`);
  }
}

export default Tweet;
