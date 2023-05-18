import express from "express";
import { config } from "./config.js";
import { ApolloServer } from "apollo-server-express";
import { todoResolver } from "./app/todo_resolver.js";
import { todoTypeDefs } from "./app/todo_typedefs.js";

const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs: todoTypeDefs,
    resolvers: todoResolver,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });

  app.listen(config.port, (err) => {
    if (err) {
      console.log("server has  not started");
      process.exit(1);
    }
    console.log(`server is running  on port ${config.port}`);
  });
};
startServer();
