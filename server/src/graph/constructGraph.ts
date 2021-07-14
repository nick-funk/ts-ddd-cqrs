import { buildSchema } from "graphql";

import schema from "../../graph-tools/output/schema.graphql";
import { Queries } from "../queries";
import { usersGraph } from "./users";
import { Commands } from "../commands";
import { commentsGraph } from "./comments";

export const constructGraph = (
  queries: Queries,
  commands: Commands
) => {
  const subRoots = [
    usersGraph(queries, commands),
    commentsGraph(queries, commands),
  ];
  const builtSchema = buildSchema(schema);

  const root: any = {};
  subRoots.forEach((r) => {
    for (const item in r) {
      root[item] = r[item];
    }
  });

  return {
    schema: builtSchema,
    root,
  };
};
