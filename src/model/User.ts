import {v4 as uuid} from "uuid";
import {UserType} from "../types";
import Tweet from "./Tweet";
import {tweets} from "../database/tweets.db";

class User {
  private id: string;
  name: string;
  username: string;
  private email: string;
  private password: string;
  followers: User[];
  userTweets: Tweet[];
  following: User[];

  constructor(data: UserType) {
    this.id = uuid();
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.followers = [];
    this.userTweets = [];
    this.following = [];
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.maskPassword(),
      followers: this.followers,
      userTweets: this.userTweets,
      following: this.following,
    };
  }

  private maskPassword() {
    let mask: string = "";

    for (let index = 0; index < this.password.length; index++) {
      mask += "*";
    }
    return mask;
  }

  public updatePassword(password: string) {
    if (password.length >= 4) {
      this.password = password;
      console.log(`Senha atualizada com sucesso.`);
    } else {
      console.log(`A senha precisa ter 4 ou mais caracteres.`);
    }
  }

  createTweet(tweet: Tweet) {
    this.userTweets.push(tweet);
  }

  sendTweet(tweet: Tweet) {
    tweets.push(tweet);
  }

  follow(user: User) {
    if (this.getUser().name === user.name) {
      return "O usuário não pode seguir a si mesmo.";
    } else {
      this.following.push(user);
      return "Você agora está seguindo este usuário.";
    }
  }

  showFeed() {
    const myTweets = this.showTweets();

    if (this.following.length > 0) {
      this.following.map((followingTweet) => {
        followingTweet.showTweets();
        // userTweets.map((tweet) =>
        //   console.log(`
        // @${this.username}: ${tweet.content}
        //     ${tweet.getTweet().likes} likes
        //         >${tweet.showReplies()}
        // `)
        // );
      });
    }

    return;
  }

  showTweets() {
    return this.userTweets.map((userTweet) => {
      console.log(`
        @${this.username}: ${userTweet.content}
            ${userTweet.getTweet().likes} likes
                >${userTweet.showReplies()}
        `);
    });
  }
}

export default User;
