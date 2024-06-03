import {v4 as uuid} from "uuid";
import {UserType} from "../types";
import Tweet from "./Tweet";

class User {
  private id: string;
  private name: string;
  private username: string;
  private email: string;
  private password: string;

  constructor(data: UserType) {
    this.id = uuid();
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }

  sendTweet(tweet: Tweet) {}

  follow(user: User) {}

  showFeed() {}

  showTweets() {}
}

export default User;
