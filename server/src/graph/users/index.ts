import { Commands } from "../../commands";
import { Queries } from "../../queries";

export const usersGraph = (queries: Queries, commands: Commands) => {
  const root = {
    findUserByName: ({ name }) => {
      return queries.findUserByName.query(name);
    },
    findUserByID: ({ id }) => {
      return queries.findUserByID.query(id);
    },
    users: () => {
      return queries.getAllUsers.query();
    },
    createUser: ({ name, password }) => {
      const result = commands.createUser.execute(name, password);

      if (result.success) {
        return result.user;
      } else {
        return {};
      }
    },
  };

  return root;
}
