import express, { Request, Response } from "express";
import moment from "moment";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

// Create Express server
const app = express();

app.set("port", process.env.PORT || 8080);

const index = (req: Request, res: Response) => {
    res.send(`Hello World! It's ${moment().format("LLLL")}`);
};

app.get("/", index);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            // include cookies in the requests from the GraphQL playground
            "request.credentials": "include",
        }
    }
});
server.applyMiddleware({ app });

export default app;