import {v4 as uuid} from "uuid";

class Like {
  private id: string;

  constructor() {
    this.id = uuid();
  }

  getLike() {
    return {
      id: this.id,
    };
  }
}

export default Like;
