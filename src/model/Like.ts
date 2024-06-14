import {v4 as uuid} from "uuid";
import {LikeType} from "../types";
import User from "./User";

class Like {
  private id: string;
  user: User;

  constructor(data: LikeType) {
    this.id = uuid();
    this.user = data.user;
  }

  getLike() {
    return {
      id: this.id,
      user: this.user,
    };
  }
}

export default Like;
