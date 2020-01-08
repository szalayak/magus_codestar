import {gql} from "apollo-server-express";

const typeDefs = gql`

    type Language {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type ObjectDescription {
        id: ID!
        objectId: ID!
        language: Language!
        shortText: String!
        longText: String
    }

    type Dice {
        id: ID!
        label: String!
        minValue: Integer!
        maxValue: Integer!
    }

    type Book{
        id
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type Personality {
        id
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type Race {
        id
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String        
    }

    type Query {
        test: [String]
    }
    type Mutation {
        testm: [String]
    }
`;

export default typeDefs;