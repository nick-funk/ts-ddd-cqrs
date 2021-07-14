import { CommentRepository } from "./commentRepository";
import { UserRepository } from "./userRepository";

export interface DataContext {
  users: UserRepository;
  comments: CommentRepository;
}

const createContext = (): DataContext => {
  const users = new UserRepository();
  users.seed();

  const comments = new CommentRepository();
  comments.seed();

  return {
    users,
    comments,
  };
};

export default createContext;
