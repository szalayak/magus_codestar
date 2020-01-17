import AWS, { DynamoDB } from "aws-sdk";
import config from "./config";
import { CreateTableInput } from "aws-sdk/clients/dynamodb";

const env = process.env.NODE_ENV || "development";

// @ts-ignore
// update the dynamo db config for the environment
AWS.config.update(config[env]);

// create the dynamodb instance
const db = new DynamoDB();

// create the table parameters
const libraryParams: CreateTableInput = {
    TableName: "magus-library",
    KeySchema: [
        { AttributeName: "type", KeyType: "HASH" },  //Partition key
        { AttributeName: "id", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "type", AttributeType: "S" },
        { AttributeName: "id", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

const eventParams: CreateTableInput = {
    TableName: "magus-events",
    KeySchema: [
        { AttributeName: "type", KeyType: "HASH" },  //Partition key
        { AttributeName: "id", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "type", AttributeType: "S" },
        { AttributeName: "id", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

const characterParams: CreateTableInput = {
    TableName: "magus-characters",
    KeySchema: [
        { AttributeName: "userId", KeyType: "HASH" },  //Partition key
        { AttributeName: "id", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "type", AttributeType: "S" },
        { AttributeName: "id", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

const describeTable = async (params: CreateTableInput) => {
    return new Promise((resolve, reject) => {
        db.describeTable({
            TableName: params.TableName
        }, (err, data) => {
            return err ? resolve() : reject(`Table ${data.Table.TableName} already exists. Nothing to do.`)
        });
    });
};

const createTable = async (params: CreateTableInput) => {
    return new Promise((resolve, reject) => {
        db.createTable(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
};

const up = async () => {
    try{
        await describeTable(libraryParams);
        await createTable(libraryParams);
    } catch(e){
        console.log(e);
    }

    try{
        await describeTable(eventParams);
        await createTable(eventParams);
    } catch(e){
        console.log(e);
    }

    try{
        await describeTable(characterParams);
        await createTable(characterParams);
    } catch(e){
        console.log(e);
    }    

};

up();


