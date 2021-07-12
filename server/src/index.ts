import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import cors from "cors";

import { constructGraph } from "./graph/constructGraph";

import createCommands from "./commands";
import createQueries from "./queries";
import createContext from "./data";
import computeCORSPolicy from "./cors";

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 7000;

const run = () => {
  const dataContext = createContext();
  const queries = createQueries(dataContext.users);
  const commands = createCommands(queries, dataContext);

  const graph = constructGraph(queries, commands);

  const app = express();
  app.use(cors(computeCORSPolicy()));
  app.use(express.json());

  app.use(
    "/api",
    graphqlHTTP({
      schema: graph.schema,
      rootValue: graph.root,
      graphiql: true,
    })
  );

  app.post("/auth/login", (req, res) => {
    const user = req.body.user;
    const pass = req.body.password;

    if (!user || !pass) {
      res.sendStatus(400);
      return;
    }

    const result = commands.loginUser.execute(user, pass);

    if (result.success) {
      res.send({
        token: result.token,
      });
    } else {
      res.sendStatus(404);
    }
  });

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
};

run();
