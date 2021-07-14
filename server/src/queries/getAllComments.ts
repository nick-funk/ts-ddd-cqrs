import { Comment, CommentRepository } from "../data/commentRepository";

export default class GetAllComments {
  private comments: CommentRepository;

  constructor(comments: CommentRepository) {
    this.comments = comments;
  }

  public query(): Comment[] | null {
    return this.comments.all();
  }
}
