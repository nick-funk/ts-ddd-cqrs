import { DataContext } from "../data";
import { Queries } from "../queries";
import CreateComment from "./CreateComment";
import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

export interface Commands {
  loginUser: LoginUser;
  createUser: CreateUser;
  createComment: CreateComment;
}

const createCommands = (
  queries: Queries, 
  dataContext: DataContext
) => {
  const loginUser = new LoginUser(queries);
  const createUser = new CreateUser(queries, dataContext.users);
  const createComment = new CreateComment(dataContext.comments);

  return {
    loginUser,
    createUser,
    createComment,
  };
};

export default createCommands;
