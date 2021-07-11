import { UserRepository } from "./userRepository";

export interface DataContext {
  users: UserRepository;
}

const createContext = (): DataContext => {
  const users = new UserRepository();
  users.seed();

  return {
    users,
  };
};

export default createContext;
