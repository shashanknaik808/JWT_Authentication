const express = require('express');
const mongoose = require('mongoose');

const app = express();
Cluster0
mongoose.connect("mongodb+srv://shashanknaik808:123456qwerty@cluster0.bbu2htp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use(express.json);

app.listen(5000, () => {
    console.log("App started in port no 5000");
});



//123456qwerty
// mongodb+srv://shashanknaik808:<password>@cluster0.bbu2htp.mongodb.net/