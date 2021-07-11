import { User, UserRepository } from "../data/userRepository";

export default class GetAllUsers {
  private users: UserRepository;

  constructor(users: UserRepository) {
    this.users = users;
  }

  public query(): User[] | null {
    return this.users.all();
  }
}
