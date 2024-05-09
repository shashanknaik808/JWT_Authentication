const express = require('express');

const app = express();

app.use(express.json);

app.listen(5000, () => {
    console.log("App started in port no 5000");
});



//123456qwerty
// mongosh "mongodb+srv://cluster0.bbu2htp.mongodb.net/" --apiVersion 1 --username shashanknaik808 --password 123456qwerty