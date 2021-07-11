import { v4 as uuidv4 } from "uuid";
import { User, UserRepository } from "../data/userRepository";
import { Queries } from "../queries";

export interface CreateUserResult {
  success: boolean;
  user?: User;
}

export default class CreateUser {
  private queries: Queries;
  private users: UserRepository;

  constructor(queries: Queries, users: UserRepository) {
    this.queries = queries;
    this.users = users;
  }

  public execute(name: string, password: string): CreateUserResult {
    const userWithName = this.queries.findUserByName.query(name);
    if (userWithName) {
      return {
        success: false
      }
    }

    var newUser = {
      id: uuidv4(),
      name,
      password,
    };

    this.users.create(newUser);

    return {
      success: true,
      user: newUser
    };
  }
}