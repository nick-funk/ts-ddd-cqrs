export interface User {
  id: string;
  name: string;
  password: string;
}

export class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public seed() {
    this.users.push({
      id: "a1f237b0-df23-4cb4-8439-e82b75d627b1",
      name: "Test",
      password: "testington",
    });
  }

  public findByName(name: string) {
    return this.users.find((i) => i.name === name);
  }

  public findById(id: string) {
    return this.users.find((i) => i.id === id);
  }

  public all() {
    return this.users;
  }

  public create(user: User) {
    this.users.push(user);
  }
}
