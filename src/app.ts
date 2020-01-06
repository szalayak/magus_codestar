import express, {Request, Response} from "express";
import moment from "moment";

// Create Express server
const app = express();

app.set("port", process.env.PORT || 8080);

const index = (req: Request, res: Response) => {
    res.send(`Hello World! It's ${moment().format("LLLL")}`);
};

app.get("/", index);

export default app;