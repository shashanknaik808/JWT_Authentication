const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/user_routes.js");

require('dotenv').config();

mongoose.connect("mongodb+srv://shashanknaik808:123456qwerty@cluster0.bbu2htp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000))
    .then(() => console.log("Database is connected! Listening to localhost 5000"))
    .catch((err) => console.log(err));


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);


// mongoose.connect("mongodb+srv://shashanknaik808:123456qwerty@cluster0.bbu2htp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
