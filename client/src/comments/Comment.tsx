import { FunctionComponent } from "react";

export interface CommentModel {
  id: string;
  body: string;
  author: {
    id: string;
    name: string;
  };
}

interface Props {
  comment: CommentModel;
}

const Comment: FunctionComponent<Props> = ({ comment }) => {
  return (
    <div
      className="relative px-2 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-6 max-w-md"
    >
      <div className="relative py-1 font-thin">{comment.author.name}</div>
      <div className="relative py-1">{comment.body}</div>
    </div>
  );
};

export default Comment;
