import { UserRepository } from "./userRepository";

const createContext = () => {
  const users = new UserRepository();
  users.seed();

  return {
    users,
  };
};

export default createContext;
