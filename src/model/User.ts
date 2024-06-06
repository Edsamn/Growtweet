import {v4 as uuid} from "uuid";
import {UserType} from "../types";
import Tweet from "./Tweet";

class User {
  private id: string;
  public name: string;
  public username: string;
  private email: string;
  private password: string;

  constructor(data: UserType) {
    this.id = uuid();
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.maskPassword(),
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

  sendTweet(tweet: Tweet) {}

  follow(user: User) {}

  showFeed() {}

  showTweets() {}
}

export default User;
