const router=require("express").Router();
const user=require("../Models/users");
const movies = require("../Models/movies");
const verify = require("../verfyToken");
const { findByIdAndDelete } = require("../Models/users");

// create one movie
router.post("",  verify, async(req,res)=>{
     if( req.user.isAdmin){
         const newMovie= new movies(req.body);
         try {
             const savedMovie= await new  newMovie.save();
             res.status(200).json(savedMovie);
             
         } catch (error) {
             res.status(500).json(error);
             
         }

     }
        
     else{
        res.status(403).json("You are not Admin");
    }


     

})
// update movies
router.put("/:id",  verify, async(req,res)=>{
    if( req.user.isAdmin){
        try {
            const updatedMovies= await new  movies.findByIdAndUpdate(req.body.param.id,
                {$set:req.body},{new:true});
            res.status(200).json(updatedMovies);
            
        } catch (error) {
            res.status(500).json(error);
            
        }

    }
       
    else{
       res.status(403).json("You are not Admin");
   }


    

})
// delete Movies
router.delete("/:id",  verify, async(req,res)=>{
    if( req.user.isAdmin){
        try {
            await  movies.findByIdAndDelete();
            res.status(200).json("Movie has been deleted successfully");
              
            
        } catch (error) {
            res.status(500).json(error);
            
        }

    }
       
    else{
       res.status(403).json("You are not Admin");
   }


    

})

// get movies
router.get("/:id",  verify, async(req,res)=>{
           try {
            const myMovies= await movies.findById(req.params.id)
            res.status(200).json(myMovies);
              
            
        } catch (error) {
            res.status(500).json(error);
            
        } 

})
// get Random movies
router.get("/random",  verify, async(req,res)=>{
    const  type= req.query.type;
    let movie;
    try {
   if(type==="series"){
       movie= await movies.aggregate([
           {$match:{isSeries:true}},
           {$sample:{size:1}},

       ]);
   }
   else{
       // get only Movies
       movie= await movies.aggregate([
        {$match:{isSeries:false}},
        {$sample:{size:1}},

    ])

   }
   res.status(200).json(movie)
     
 } catch (error) {
     res.status(500).json(error);
     
 } 
})




 //getting all movies 
 router.get("/",verify, async (req,res)=>{
     if(req.user.isAdmin){
         try {
             const allMovies= await  movies.find();
             res.status(200).json(allMovies).reverse();
             
         } catch (error) {
             res.status(500).json(error)
             
         }

     }
     else{
         res.status(401).json("You must  crate an Account")
     }
 })






module.exports=router