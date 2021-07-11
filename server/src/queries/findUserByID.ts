import { User, UserRepository } from "../data/userRepository";

export default class FindUserByID {
  private users: UserRepository;

  constructor(users: UserRepository) {
    this.users = users;
  }

  public query(id: string): User | null {
    const user = this.users.findById(id);
    return user;
  }
}
