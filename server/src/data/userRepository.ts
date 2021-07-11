export interface User {
  id: string;
  name: string;
  password: string;
}

export class UserRepository {
  private items: User[];

  constructor() {
    this.items = [];
  }

  public seed() {
    this.items.push({
      id: "a1f237b0-df23-4cb4-8439-e82b75d627b1",
      name: "Test",
      password: "testington",
    });
  }

  public findByName(name: string) {
    return this.items.find((i) => i.name === name);
  }

  public findById(id: string) {
    return this.items.find((i) => i.id === id);
  }
}
