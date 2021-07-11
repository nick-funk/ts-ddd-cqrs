import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";

import { constructGraph } from "./graph/constructGraph";
import { Db } from "./data/db";

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 7000;

const run = () => {
  const db = new Db();
  const graph = constructGraph(db);

  const app = express();

  app.use("/api", graphqlHTTP({
    schema: graph.schema,
    rootValue: graph.root,
    graphiql: true,
  }));

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}

run();