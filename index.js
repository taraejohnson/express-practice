import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes";
import mongoose from "mongoose";

const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost:27017/practicedb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Server is running on ${port}`)
});

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
});