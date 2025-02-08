import express from 'express';
import router from './routes.js';
import cors from 'cors';
import fs from 'fs';
import https from 'https';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.listen(3000, ()=> console.log("API RUNNING."));

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key:fs.readFileSync('src/SSL/code.key')
}, app).listen(443,()=> console.log("running in https"))

