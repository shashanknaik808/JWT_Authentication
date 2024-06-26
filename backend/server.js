const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/user_routes.js");

require('dotenv').config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.hubtpxn.mongodb.net/jwt_aa`)
    .then(() => {
        console.log("Database is connected!");
        app.listen(5000, () => {
            console.log("App started in port no 5000");
        });
    })
    .catch((err) => console.log(err));
