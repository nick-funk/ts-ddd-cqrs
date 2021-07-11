import { Db } from "../../data/db";

export const itemGraph = (db: Db) => {
  const root = {
    getItem: ({ id }) => {
      return db.get(id);
    },
    items: () => {
      return db.all();
    },
    insertItem: ({ id, value }) => {
      return db.insert({ id, value });
    },
  };

  return root;
}
