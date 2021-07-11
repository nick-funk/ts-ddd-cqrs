import { DataContext } from "../data";
import { Queries } from "../queries";
import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

export interface Commands {
  loginUser: LoginUser;
  createUser: CreateUser;
}

const createCommands = (
  queries: Queries, 
  dataContext: DataContext
) => {
  const loginUser = new LoginUser(queries);
  const createUser = new CreateUser(queries, dataContext.users);

  return {
    loginUser,
    createUser,
  };
};

export default createCommands;
