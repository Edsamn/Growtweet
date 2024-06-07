import {TweetType} from "../types";
import {v4 as uuid} from "uuid";

class Tweet {
  private id: string;
  public content: string;
  private type: string;
  likes: number;
  replies: string[];

  constructor(data: TweetType) {
    this.id = uuid();
    this.content = data.content;
    this.type = data.type;
    this.likes = 0;
    this.replies = [];
  }

  getTweet() {
    return {
      id: this.id,
      content: this.content,
      type: this.type,
      likes: this.likes,
    };
  }

  reply(content: string) {}

  like() {
    this.likes++;
  }

  show() {}

  showReplies() {}
}

export default Tweet;
