import User from '../models/user.model.js';
import errorHandler from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next)=>{
    const {username, password} = req.body;
    if(!username||!password||username===''||password==='')
    {
        next(errorHandler(400,'All fields are required'));
    }

try{
    const validUser = await User.findOne({email});
    if(!validUser)
    {
        next(errorHandler(400,'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword)
    {
        next(errorHandler(400,'Password is not correct'));
    }
    const token = jwt.signin();
} catch(error)
{
next(error);
}    
}