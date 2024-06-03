import {v4 as uuid} from "uuid";

class Like {
  id: string;

  constructor() {
    this.id = uuid();
  }
}

export default Like;
