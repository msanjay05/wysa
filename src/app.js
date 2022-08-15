const express = require("express");
require("./db/mongoose");
const sleepRouter=require("./router/sleepRouter")




const app = express();

app.use(express.json());
app.use("/api/sleep/",sleepRouter);

module.exports=app;