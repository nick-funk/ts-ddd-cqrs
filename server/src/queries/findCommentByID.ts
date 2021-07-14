import { Comment, CommentRepository } from "../data/commentRepository";

export default class FindCommentByID {
  private comments: CommentRepository;

  constructor(users: CommentRepository) {
    this.comments = users;
  }

  public query(id: string): Comment | null {
    const comment = this.comments.findById(id);
    return comment;
  }
}
