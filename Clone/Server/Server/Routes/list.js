const router=require("express").Router();
const list=require("../Models/lists");
const verify = require("../verfyToken");
const { findByIdAndDelete } = require("../Models/users");
const lists = require("../Models/lists");

// create ne movie
router.post("",  verify, async(req,res)=>{
     if( req.user.isAdmin){
         const newList= new list(req.body);
         try {
             const savedList= await new  newList.save();
             res.status(200).json(savedList);
             
         } catch (error) {
             res.status(500).json(error);
             
         }

     }
        
     else{
        res.status(403).json("You are not Admin");
    }


     

})

// Delete lists
router.delete("/:id",  verify, async(req,res)=>{
    if( req.user.isAdmin){
        const newList= new list(req.body);
        try {
             await newList.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted");
            
        } catch (error) {
            res.status(500).json(error);
            
        }

    }
       
    else{
       res.status(403).json("You are not Admin");
   }

})

// fetching all the lists
router.get("/",  verify, async(req,res)=>{
    const typeQuery=req.query.type   
    const genreQuery=req.query.genre   
    let list=[];
    try {
        if(typeQuery){
            if(genreQuery){
                list= await   lists.aggregate([{$sample:{size:10}},
                    {$match:{type:typeQuery,genre:genreQuery}}])

            }
            else{
                list= await  lists.aggregate([ {$sample:{size:10}},
                    {$match:{type:typeQuery}}])
            }

        }
        else{
            list=await lists.aggregate([{$sample:{size:10}}])

        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }

            
             
   

})












module.exports=router