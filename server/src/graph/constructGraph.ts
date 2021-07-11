import { buildSchema } from "graphql";

import { helloGraph } from "./hello/hello";
import { goodbyeGraph } from "./goodbye/goodbye";
import { itemGraph } from "./item/item";
import { Db } from "../data/db";
import schema from "../../graph-tools/output/schema.graphql";

export const constructGraph = (db: Db) => {
  const subRoots = [ helloGraph(db), goodbyeGraph(db), itemGraph(db) ];
  const builtSchema = buildSchema(schema);

  const root: any = {};
  subRoots.forEach(r => {
    for (const item in r) {
      root[item] = r[item];
    }
  });

  return {
    schema: builtSchema,
    root
  }
};