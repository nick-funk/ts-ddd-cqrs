import { Db } from "../../data/db";

export const goodbyeGraph = (db: Db) => {
  const root = {
    goodbye: ({ lang }) => {
      switch (lang) {
        case "ru":
          return "Прощай";
        case "fr":
          return "Au revoir"
        default:
          return "Goodbye";
      }
    },
  }

  return root;
}
