import { Commands } from "../../commands";
import { Queries } from "../../queries";

export const commentsGraph = (queries: Queries, commands: Commands) => {
  const root = {
    comments: () => {
      const comments = queries.getAllComments.query();
      
      const returnedComments = comments.map(c => {
        const user = queries.findUserByID.query(c.authorID);
        return {
          ...c,
          author: user,
        }
      });

      return returnedComments;
    },
    createComment: ({ authorID, body }) => {
      const author = queries.findUserByID.query(authorID);
      if (!author) {
        return null;
      }

      const createResult = commands.createComment.execute(authorID, body);
      if (createResult.success) {
        return {
          ...createResult.comment,
          author
        }
      } else {
        return {};
      }
    },
  };

  return root;
}
