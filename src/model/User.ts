import {v4 as uuid} from "uuid";
import {UserType} from "../types";
import Tweet from "./Tweet";
import {tweets} from "../database/tweets.db";
import {users} from "../database/users.db";

class User {
  private id: string;
  name: string;
  username: string;
  private email: string;
  private password: string;
  followers: User[];
  following: User[];

  constructor(data: UserType) {
    this.id = uuid();
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.followers = [];
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
      following: this.following,
    };
  }

  createUser(user: User) {
    const verifyUser = users.find((user) => user.username === user.getUser().username);

    if (verifyUser?.username === user.username) {
      console.log(`O usuário já existe.`);
    } else {
      users.push(user);
      console.log(`Usuário criado com sucesso.`);
    }
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

  sendTweet(tweet: Tweet) {
    tweets.push(tweet);
  }

  follow(user: User) {
    if (this.getUser().username === user.username) {
      console.log("O usuário não pode seguir a si mesmo.");
    } else {
      this.following.push(user);
      console.log(`Você agora está seguindo ${user.username}.`);
    }
  }

  showFeed() {
    this.showTweets();

    this.following.map((user) => user.showTweets());
  }

  showTweets() {
    const userTweets = tweets.filter((tweet) => tweet.getTweet().user.username === this.username);
    userTweets.map((userTweet) => {
      console.log(`
        @${userTweet.user.username}: ${userTweet.content}
              ${userTweet.likes.length}
              >${userTweet.replies}
        `);
    });
  }
}

export default User;
