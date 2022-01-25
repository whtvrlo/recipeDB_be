require("dotenv").config();

const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
// const errorRouter = require("./routes/error");

app.get("/", indexRouter);

// app.get("/", (req, res) => {
//     res.status(200).send("hello world");
// });

app.get("*", (req, res) => {
    res.status(404).send("not found");
});

// app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
    console.log("App Online");
})