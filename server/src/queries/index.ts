import { CommentRepository } from "../data/commentRepository";
import { UserRepository } from "../data/userRepository";
import FindCommentByID from "./findCommentByID";
import FindUserByID from "./findUserByID";
import FindUserByName from "./findUserByName";
import GetAllComments from "./getAllComments";
import GetAllUsers from "./getAllUsers";

export interface Queries {
  findUserByName: FindUserByName;
  findUserByID: FindUserByID;
  getAllUsers: GetAllUsers;
  getAllComments: GetAllComments;
  findCommentByID: FindCommentByID;
}

const createQueries = (users: UserRepository, comments: CommentRepository): Queries => {
  const findUserByName = new FindUserByName(users);
  const findUserByID = new FindUserByID(users);
  const getAllUsers = new GetAllUsers(users);
  const getAllComments = new GetAllComments(comments);
  const findCommentByID = new FindCommentByID(comments);

  return {
    findUserByName,
    findUserByID,
    getAllUsers,
    getAllComments,
    findCommentByID,
  };
};

export default createQueries;
