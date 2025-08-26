import './config/instrument.js';
import expres from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';

import * as Sentry from "@sentry/node"
import { clerkwebhook } from './controller/webhooks.js';


const app=expres();
//database connection
await connectDB();

app.use(cors());
app.use(expres.json());

 

//routes
app.get('/',(req,res)=>{
    res.send("welcome to the page API is running....");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkwebhook) 

const PORT=process.env.PORT || 8000;
Sentry.setupExpressErrorHandler(app);
app.listen(PORT,console.log(`Server started on PORT ${PORT}`));
