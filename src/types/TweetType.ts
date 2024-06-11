import {TypeOfTweetType} from ".";
import {Like, User} from "../model";

type TweetType = {
  id?: string;
  content: string;
  type: TypeOfTweetType;
  user: User;
  replies?: string[];
  likes?: Like[];
};

export default TweetType;
