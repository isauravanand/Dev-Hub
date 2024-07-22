const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports.signup = async(req,res,next)=>{
    try {
        const {fullname,email,username,password}=req.body;

        const usernameCheck = await User.findOne({username});
        if(usernameCheck){
          return res.json({msg:"Username Already Exists",status:false});
        }

        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.json({msg:"Email Already Exists",status:false});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            fullname,
            username,
            email,
            password:hashedPassword,            
        });

        delete user.password;

        return res.json({status:true,user});
    } catch (error) {
        next(error)
    }
}

module.exports.login = async(req,res,next)=>{
    try {
        const {username,password}=req.body;
        const user = await User.findOne({username});
    
        if(!user){
            return res.json({msg:"Username or Password is Incorrect",status:false});
        }
        
        const isPasswordValid = await bcrypt.compare(password,user.password);
        
        if(!isPasswordValid){
            return res.json({msg:"Username or Password is Incorrect",status:false});
        }
    
        delete user.password;
        return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
}