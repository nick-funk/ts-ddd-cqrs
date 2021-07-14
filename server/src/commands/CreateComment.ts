import { v4 as uuidv4 } from "uuid";
import { Comment, CommentRepository } from "../data/commentRepository";
import { Queries } from "../queries";

export interface CreateCommentResult {
  success: boolean;
  comment?: Comment;
}

export default class CreateComment {
  private comments: CommentRepository;

  constructor(comments: CommentRepository) {
    this.comments = comments;
  }

  public execute(authorID: string, body: string): CreateCommentResult {
    var newComment = {
      id: uuidv4(),
      body,
      authorID,
    };

    this.comments.create(newComment);

    return {
      success: true,
      comment: newComment,
    };
  }
}