const express = require('express');

const app = express();

app.use(express.json);

app.listen(5000, () => {
    console.log("App started in port no 5000");
});