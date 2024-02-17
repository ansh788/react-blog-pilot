import User from '../models/user.model.js';
import errorHandler from '../utils/error.js';
import bcryptjs from 'bcryptjs';
export const signup = 
async(req, res, next)=>{
    
    const {username, email, password}= req.body;

    if(!username||!email||!password||username===''||email===''||password==='')
    {
       next(errorHandler(400,'All fields are required'));
    }

    const hash_pwd = bcryptjs.hashSync(password,10)

    const newUser = new User({username, email, password:hash_pwd});

    try{
    await newUser.save();
    res.json('User Signup Successfull');
    }
    catch(error){
        next(error);
    } 
    
};