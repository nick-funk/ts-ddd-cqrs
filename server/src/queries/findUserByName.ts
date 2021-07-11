import { User, UserRepository } from "../data/userRepository";

export default class FindUserByName {
  private users: UserRepository;

  constructor(users: UserRepository) {
    this.users = users;
  }

  public query(name: string): User | null {
    const user = this.users.findByName(name);
    return user;
  }
}
