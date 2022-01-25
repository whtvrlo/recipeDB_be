require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("hello world");
});

app.get("*", (req, res) => {
    res.status(404).send("not found");
});

app.listen(process.env.HTTP_PORT, () => {
    console.log("App Online");
})