import "reflect-metadata";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { context } from "./utils/context";

// graphql resolvers
import { AuthResolver } from "./graphql/resolvers/auth/AuthResolvers";

const PORT = 4444;

async function startServer() {
  const schema = await buildSchema({
    resolvers: [AuthResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
  });
  const app = express();
  app.use(cookieParser());
  mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => {
      console.log("[SERVER 💻]: Mongodb is connected successfully");
    })
    .catch((err) => {
      console.log("[SERVER ERROR 🧨]: ", err);
    });

  const server = new ApolloServer({
    schema,
    context: context,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: "/api/v1/graphql",
    cors: {
      credentials: true,
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
    },
  });

  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}
startServer();
