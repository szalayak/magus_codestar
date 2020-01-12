import test from "./seeds/test.json";
import test2 from "./seeds/test2.json";
import AWS, {DynamoDB} from "aws-sdk";
import config from "./config";
import uuidv4 = require('uuid/v4');

const env = process.env.NODE_ENV || "development";

// @ts-ignore
// update the dynamo db config for the environment
AWS.config.update(config[env]);

// create the dynamodb instance
const db = new DynamoDB();

// define type for ID mapping
type IdMap = {
    [key: string]: string
}

// map temp ID's for UUIDs
const idMap2: IdMap = {};
Object.assign(idMap2, ...test2.map(({id}) => {
    return {[id]: uuidv4()};
}));

// write data to table

// get client
const docClient = new AWS.DynamoDB.DocumentClient();

// write items
for (const item of test2) {
    docClient.put({
        TableName: "magus",
        Item: {
            ...item,
            id: idMap2[item.id]
        }
    }, (err, data) => {
        if (err) {
            console.error("Unable to add values. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItems succeeded:", JSON.stringify(data));
        }
    })
}
;

