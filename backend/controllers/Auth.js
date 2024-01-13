const  User  = require("../models/User");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()


async function Signup(req,res){
    try{
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;

        if(!name || !email || !password){
            res.status(404).json({
                status:'false',
                msg:"All input fields are required"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=await User.create({
            name:name,
            email:email,
            password:hashedPassword
        })
        res.status(200).json({
            status:'true',
            msg:"User signed up successfull",
            newUser
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            msg:"Server error failed to signup"
        })
    }
}


async function Login(req,res){
    try{
        const email=req.body.email;
        const password=req.body.password;
        // console.log(password)
        
        if(!email || !password){
            return res.status(404).json({
                status:'false',
                msg:"All input fields are required",
            })
        }

        const userLogin=await User.findOne({
            email:email
        })
        if(!userLogin){
            return res.status(404).json({
                status:'false',
                msg:"User id is wrong"
            })
        }
        
        
        const pass = await bcrypt.compare(password, userLogin.password);
        console.log('Entered password:', password);
        console.log('Stored password:', userLogin.password);
        console.log('Password comparison result:', pass);

        if(!pass){
            const token=jwt.sign({email:userLogin.email},process.env.JWT_SECRET,{expiresIn:'24h'});
            userLogin.token=token
            userLogin.password=undefined
            res.status(200).json({
                status:'true',
                msg:"User login successfull",
                userLogin
            })
        }   
        else{
            return  res.status(401).json({
                status:'false',
                msg:"Password is incorrect"
            })
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Server Error cannot login the user"
        })
    }
}



module.exports={Signup,Login} 