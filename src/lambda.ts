import app from "./app";
import  {Context} from "aws-lambda";
import awsServerlessExpress from "aws-serverless-express";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";

app.use(awsServerlessExpressMiddleware.eventContext());

const server = awsServerlessExpress.createServer(app);

const handler = (event: any, context: Context) => { awsServerlessExpress.proxy(server, event, context); };

export {
    handler
};