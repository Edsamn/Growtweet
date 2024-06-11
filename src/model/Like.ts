import {v4 as uuid} from "uuid";
import {LikeType} from "../types";

class Like {
  private id: string;

  constructor(data: LikeType) {
    this.id = uuid();
  }

  getLike() {
    return {
      id: this.id,
    };
  }
}

export default Like;
