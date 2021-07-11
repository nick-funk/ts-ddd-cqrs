import { Queries } from "../queries";
import LoginUser from "./LoginUser";

const createCommands = (queries: Queries) => {
  const loginUser = new LoginUser(queries);

  return {
    loginUser,
  };
};

export default createCommands;
