import { gql } from "apollo-server-express";

const typeDefs = gql`

    interface DescribableObject {
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String        
    }

    type Language implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type ObjectDescription {
        id: ID!
        objectId: ID!
        objectType: String!
        language: Language!
        shortText: String!
        longText: String
    }

    type GlossaryItem implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String 
        book: Book      
    }

    type Dice {
        id: ID!
        label: String!
        minValue: Integer!
        maxValue: Integer!
    }

    type Book implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type Personality implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type Ability implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        book: Book
    }

    type AbilityModifier {
        id: ID!
        ability: Ability!
        value: Integer!
    }

    type CombatValue implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String        
    }

    type CombatValueModifier {
        id: ID!
        combatValue: CombatValue
        value: Integer
    }

    type HealthValue implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String        
    }

    type HealthValueModifier {
        id: ID!
        healthValue: HealthValue
        value: Integer
    }

    type Race implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        classes: [Class]
        abilityModifiers: [AbilityModifier]
        SpecialAbilities: [SpecialAbility]
        book: Book        
    }

    type SpecialAbility implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type AgeGroup  implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        abilityModifiers: [AbilityModifier]           
    }

    type MainClass implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        book: Book
        classes: [Class]        
    }

    type Class implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        races: [Race]
        mainClass: MainClass
        subClasses: [SubClass]
        book: Book        
    }

    type SubClass implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        class: Class
        specialisations: [SubClassSpecialisation]
        book: Book        
    }

    type SubClassSpecialisation implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        subClass: SubClass!
        book: Book              
    }

    type SkillCategory implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type Skill implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        skillCategory: SkillCategory
    }

    type PercentageSkill implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        skillCategory: SkillCategory
    }

    type Weapon implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type RangedWeapon implements DescribableObject {
        id: ID!
        description: ObjectDescription
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