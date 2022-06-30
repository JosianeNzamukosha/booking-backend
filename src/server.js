import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import bodyParser from 'body-parser';
import route from "./routes/index";

const app= express();

app.use(bodyParser.json());
app.use("/",route);

const database=process.env.DATABASE;
mongoose.connect(database,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("database is well connected");
});
//sever configuration
const port=process.env.PORT || 4040;
app.listen(port,()=>{
    console.log(`server is running on port port ${port}`);
});

export default app;
