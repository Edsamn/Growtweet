import {User} from "../model";
import TypeOfTweetType from "./TypeOfTweetType";

type ReplyType = {
  id?: string;
  content: string;
  type: TypeOfTweetType;
  user: User;
};

export default ReplyType;
