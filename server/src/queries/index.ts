import { UserRepository } from "../data/userRepository";
import FindUserByID from "./findUserByID";
import FindUserByName from "./findUserByName";
import GetAllUsers from "./getAllUsers";

export interface Queries {
  findUserByName: FindUserByName;
  findUserByID: FindUserByID;
  getAllUsers: GetAllUsers;
}

const createQueries = (users: UserRepository): Queries => {
  const findUserByName = new FindUserByName(users);
  const findUserByID = new FindUserByID(users);
  const getAllUsers = new GetAllUsers(users);

  return {
    findUserByName,
    findUserByID,
    getAllUsers,
  };
};

export default createQueries;
