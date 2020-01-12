import AWS, {DynamoDB} from "aws-sdk";
import config from "./config";
import {CreateTableInput} from "aws-sdk/clients/dynamodb";

const env = process.env.NODE_ENV || "development";

// @ts-ignore
// update the dynamo db config for the environment
AWS.config.update(config[env]);

// create the dynamodb instance
const db = new DynamoDB();

// create the table parameters
const params: CreateTableInput = {
    TableName: "magus",
    KeySchema: [
        {AttributeName: "type", KeyType: "HASH"},  //Partition key
        {AttributeName: "id", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        {AttributeName: "type", AttributeType: "S"},
        {AttributeName: "id", AttributeType: "S"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

const createTable = (params: CreateTableInput) => {
    db.createTable(params, (err, data) => {
        if (err) {
            console.error(JSON.stringify(err));
        } else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    });
};

db.describeTable({
    TableName: "magus"
}, (err, data) => {
    return err ? createTable(params) : console.log(`Table ${data.Table.TableName} already exists. Nothing to do.`)
});



