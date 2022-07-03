const router=require("express").Router();
const user=require("../Models/users");
const CryptoJS=require("crypto-js");
const users = require("../Models/users");
const verify = require("../verfyToken");





//update
router.put("/:id",  verify, async(req,res)=>{
     if(req.user.id===req.params.id || req.user.isAdmin){
         if(req.body.password){
             req.body.password=
             CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
             .toString()

             


         }
         try {
             const updateUser=await users.findByIdAndUpdat
             e(req.params.id,{$set:req.body}, {new :true});

             res.status(200).json(updateUser);

             
         } catch (error) {
             res.status(500).json(err)
             
         }
         
        
     }
     else{
        res.status(403).json("you can update only your account")
    }


     

})

//Delete
router.delete("/:id",  verify, async(req,res)=>{
    if(req.user.id===req.params.id || req.user.isAdmin){
      
        try {
           await user.findByIdAndDelete(req.params.id);
    
            res.status(200).json("user has been deleted");

            
        } catch (error) {
            res.status(500).json(err)
            
        }
        
       
    }
    else{
       res.status(403).json("you can update only your account")
   }


    

})


//Get one user with id
router.get("/find/:id",   async(req,res)=>{
  
        try {
           await user.findById(req.params.id);
           const {password, ...info}= user._doc; 
    
            res.status(200).json(info);

            
        } catch (error) {
            res.status(500).json(err)
            
        }
        
       
   


    

})



//get  users
router.get("/",  verify, async(req,res)=>{
    const query=req.query.new;

    if(req.user.isAdmin){
      
        try {
            const user= query? await users.find().limit(10):await users.find();
           await user.findByIdAndDelete(req.params.id);
    
            res.status(200).json(user);

            
        } catch (error) {
            res.status(500).json(err)
            
        }
        
       
    }
    else{
       res.status(403).json("you  are not alloed to see all users  ")
   }


    

})

//get user Stats
module.exports=router