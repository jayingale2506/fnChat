const express = require('express');
const router = express.Router();
const Post = require ('../models/Post');


//Get all the post
router.get('/', async(req, res)=>{
 try{
     const posts =await Post.find();
     res.json(posts);     
 }
 catch(err){
     res.json({message:err});
 }
});

//Post all the post
router.post('/',async (req, res)=>{   
       const post= new Post({
           title:req.body.title,
          
       });
       try{
           const savedPost = await post.save();
           res.json(savedPost);
       }   
   catch(err){
       res.json({message:err});  
   }
});


//Specific Post

router.get('/:postId', async(req, res)=>{
   try{
       const post =await Post.findById(req.params.postId);
       res.json(post)
   }
   catch(err){
       res.json({message:err});
   }
});

router.delete('/:postId',async (req, res)=>{
try{ 
    const removedPost = await Post.remove({_id:req.params.postId});
    res.json(removedPost);
}catch(err){
    res.json({message:err});
}

   
});

module.exports=router;