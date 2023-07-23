import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express'
const app = express()
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/")
})

app.listen(8081);
