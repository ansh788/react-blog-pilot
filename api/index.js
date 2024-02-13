import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from './routes/user.routes.js';
import AuthRoute from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB is connected");
    }).catch(err=>{
        console.log(err)
    });

const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log('server is running');
});

app.use('/api/user',UserRoute);
app.use('/api/auth',AuthRoute);