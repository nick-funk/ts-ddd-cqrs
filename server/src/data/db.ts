export interface Item {
  id: string;
  value: string;
}

export class Db {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  public insert(item: Item) {
    this.items.push(item);
    return this.get(item.id);
  }

  public get(id: string) {
    return this.items.find(i => i.id === id);
  }

  public all() {
    return this.items;
  }
}