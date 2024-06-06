import {TweetType} from "../types";
import {v4 as uuid} from "uuid";

class Tweet {
  private id: string;
  public content: string;
  private type: string;

  constructor(data: TweetType) {
    this.id = uuid();
    this.content = data.content;
    this.type = data.type;
  }

  getTweet() {
    return {
      id: this.id,
      content: this.content,
      type: this.type,
    };
  }

  reply(content: string) {}

  like() {}

  show() {}

  showReplies() {}
}

export default Tweet;
