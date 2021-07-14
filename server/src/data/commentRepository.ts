export interface Comment {
  id: string;
  body: string;
  authorID: string;
}

export class CommentRepository {
  private comments: Comment[];

  constructor() {
    this.comments = [];
  }

  public seed() {}

  public findById(id: string) {
    return this.comments.find((i) => i.id === id);
  }

  public all() {
    return this.comments;
  }

  public create(comment: Comment) {
    this.comments.push(comment);
  }
}
