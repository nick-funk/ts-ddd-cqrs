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

  public seed() {
    this.comments.push({
      id: "0632a850-5187-4829-b852-7a6dc453af7e",
      authorID: "a1f237b0-df23-4cb4-8439-e82b75d627b1",
      body: "Hello, everybody!",
    });
  }

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
