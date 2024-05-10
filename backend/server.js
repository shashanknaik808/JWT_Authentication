const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/user_routes.js");

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', router);

mongoose.connect(`mongodb+srv://shashanknaik808:${process.env.MONGODB_PASSWORD}@cluster0.bbu2htp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("Database is connected!");
        app.listen(5000, () => {
            console.log("App started in port no 5000");
        });
    })
    .catch((err) => console.log(err));

