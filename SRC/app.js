import express from 'express';
import router from './routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3000, ()=> console.log("API RODANDO."));