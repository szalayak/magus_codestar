import { gql } from "apollo-server-express";

const typeDefs = gql`

    interface DescribableObject {
        id: ID
        description: ObjectDescription
        label: String        
    }
    
    interface Modifier {
        id: ID
        value: Int
        exclusive: Boolean
    }

    type Language implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
    }

    type ObjectDescription {
        id: ID
        objectId: ID
        objectType: String
        language: Language
        shortText: String
        longText: String
    }

    type GlossaryItem implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String 
        book: Book      
    }

    type Dice {
        id: ID
        label: String
        minValue: Int
        maxValue: Int
    }

    type Book implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
    }

    type Personality implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
    }

    type Ability implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        book: Book
    }

    type AbilityModifier implements Modifier{
        id: ID
        ability: Ability
        value: Int
        exclusive: Boolean
    }
    
    type AbilityCalculationType implements DescribableObject{
        id: ID
        description: ObjectDescription
        label: String
        dice: Dice
        throwCount: Int
        repetitionCount: Int
        constantComponent: Int
    }
    
    type AbilityCalculation {
        id: ID
        ability: Ability
        calculationType: AbilityCalculationType
    }

    type CombatValue implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String  
        sourceAbility: [Ability]
    }

    type CombatValueModifier implements Modifier{
        id: ID!
        combatValue: CombatValue
        value: Int
        exclusive: Boolean
    }

    type HealthValue implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        sourceAbilities: [Ability]
    }

    type HealthValueModifier implements Modifier{
        id: ID
        healthValue: HealthValue
        value: Int
        exclusive: Boolean
    }

    type SpecialAbility implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
    }

    type AgeGroup implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        abilityModifiers: [AbilityModifier]
    }    
    
    type RaceAgeGroupAssociation {
        id: ID
        race: Race
        from: Int
        to: Int
        ageGroup: AgeGroup
    }
    
    type Race implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        abilityModifiers: [AbilityModifier]
        specialAbilities: [SpecialAbility]
        combatValueModifiers: [CombatValueModifier]
        healthValueModifiers: [HealthValueModifier]
        book: Book
        ageGroupAssociations: [RaceAgeGroupAssociation]
        classAssociations: [RaceClassAssociation]
        skillAssociations: [SkillAssociation]
        percentageSkillAssociations: [PercentageSkillAssociation]
    }
    
    type RaceClassAssociation {
        id: ID
        race: Race
        class: Class
        allowed: Boolean
        specialPermission: Boolean
    }
    
    type LevelDefinition {
        id: ID
        level: Int
        fromExperiencePoints: Int
        toExperiencePoints: Int
    }

    type Class implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        mainClass: Boolean
        superClass: Class
        subClasses: [Class]
        book: Book
        experienceForNextLevel: Int
        raceAssociations: [RaceClassAssociation]
        abilityCalculations: [AbilityCalculation]
        healthValueModifiers: [HealthValueModifier]
        combatValueModifiers: [CombatValueModifier]
        healhValueModifiers: [HealthValueModifier]
        levelDefinitions: [LevelDefinition]
        skillAssociations: [SkillAssociation]
    }

    type SkillCategory implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
    }

    type Skill implements DescribableObject {
        id: ID!
        description: ObjectDescription
        descriptions: [ObjectDescription]
        label: String
        skillCategory: SkillCategory
        basicLevelCost: Int
        masterLevelCost: Int
    }
    
    enum SkillLevel{
        BASIC
        MASTER
    }
    
    type SkillAssociation {
        id: ID
        level: Int
        skill: Skill
        skillLevel: SkillLevel
    }

    type PercentageSkill implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        skillCategory: SkillCategory
    }
    
    type PercentageSkillAssociation {
        id: ID
        level: Int
        percentageSkill: PercentageSkill
        percentageValue: Int
    }

    type Weapon implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        combatValueModifiers: [CombatValueModifier]
    }

    type RangedWeapon implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        combatValueModifiers: [CombatValueModifier]
    }

    type Shield implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        combatValueModifiers: [CombatValueModifier]
    }    
    
    type Armour implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        movementRestrictionFactor: Int
        damageAbsorptionValue: Int
    }
    
    type ItemCategory implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        items: [Item]
    }    
    
    type Item implements DescribableObject {
        id: ID
        description: ObjectDescription
        label: String
        itemCategory: ItemCategory
    }

    type Query {
        test: [String]
    }
    type Mutation {
        testm: [String]
    }
`;

export default typeDefs;