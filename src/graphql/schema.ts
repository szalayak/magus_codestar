import {gql} from "apollo-server-express";

const typeDefs = gql`
    type Query {
        test: [String]
    }
    type Mutation {
        testm: [String]
    }
`;

export default typeDefs;