import {Like, Reply} from "../model";

type TweetType = {
  id?: string;
  content: string;
  type: string;
  likes: Like[];
  replies: Reply[];
};

export default TweetType;
