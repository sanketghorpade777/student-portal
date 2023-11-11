const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const {hashPassword,comparePassword} = require('../Helpers/auth');
require('dotenv').config();



//create jwt token



const test = (req,res) => {
  res.send("test working");
}



//login user
const login = async(req,res) => {

    const {email,password} = req.body;

    
    try{
   const checkemail = await User.findOne({email:email});


  
   if(!checkemail){
    return res.status(200).send({success:false,msg:"Record Not Found"});
   }

   const match = await comparePassword(password,checkemail.password)
   if(match){
  
    const newtoken = await jwt.sign({email:checkemail.email, id:checkemail._id,name:checkemail.name},process.env.JWT_SECRET,{},(err,token) => {
     if(err) throw err;
     return res.cookie('Token',token).json(checkemail).send({success:true});
      

      // res.status(200).send({success:true,msg:"Password Matched & Logged In Successful !"});
    })

       
 
  

   }else{
    return res.status(200).send({success:false,msg:"Password not Matched"});
   
   }

     



    }catch(e){
       console.log(e);
    }
   
   }








   //register user
   const register = async(req,res) => {

    const {name,email,password} = req.body;
    if(!password || password.length < 6){
       return res.status(201).send({success:false,msg:"Password Are So Small ! Please Enter Min 6 Characters Password"});
    }

    const hashedPassword = await hashPassword(password);
  let user = new User({
        name,
        email,
       password:hashedPassword,
    
    })
 try{
const check = await User.findOne({email:email})

if(check){
   
    return res.status(200).send({success:false,msg:"Email are already Existed !"});
}else{
    
 const user_data = await user.save();
 return res.status(200).send({success:true,data:user_data});
  
}


 }catch(e){
    console.log(e);
 }

}

const getprofile = (req,res) => {
   console.log("Request => ",req.cookies)
   const token = req.cookies;
   // let jsontoken = process.env.JWT_SECRET;
   // console.log(jsontoken);

   if(token){
      jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
         if(err) throw err;
         res.json(user)
      })
   }else{
      res.json("null data");
   }
}


module.exports = {
            test,
            login,
            register,
            getprofile
          
                     

         
            
            
}