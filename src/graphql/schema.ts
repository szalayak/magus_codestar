import { gql } from "apollo-server-express";

const typeDefs = gql`

    interface DescribableObject {
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String        
    }

    type Language implements DescribableObject {
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

    type GlossaryItem implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String       
    }

    type Dice {
        id: ID!
        label: String!
        minValue: Integer!
        maxValue: Integer!
    }

    type Book implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type Personality implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type Ability implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
    }

    type Race implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
        classes: [Class]!        
    }

    type AgeGroup  implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String           
    }

    type MainClass implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String        
    }

    type Class implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
        mainClass: MainClass!
        subClasses: [SubClass]        
    }

    type SubClass implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
        class: Class!
        specialisations: [SubClassSpecialisation]        
    }

    type SubClassSpecialisation implements DescribableObject {
        id: ID!
        description: ObjectDescription!
        descriptions: [ObjectDescription]
        label: String
        subClass: SubClass!              
    }

    type Query {
        test: [String]
    }
    type Mutation {
        testm: [String]
    }
`;

export default typeDefs;