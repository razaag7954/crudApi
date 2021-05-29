const express = require('express');
const router = express.Router();

// post Models
const Posts = require('../../models/Posts')
// get request
router.get('/',async (req, res)=>{
    try{
        const posts = await Posts.find()
        if(!posts) throw Error("No items");
        res.status(200).json(posts);
    }catch(err) {
        res.status(400).json({msg: err})
    }
} )

// get request by id
router.get('/:id',async (req, res)=>{
    try{
        const post = await Posts.findById(req.params.id)
        if(!post) throw Error("No items");
        res.status(200).json(post);
    }catch(err) {
        res.status(400).json({msg: err})
    }
} )

// post request
router.post('/', async (req, res)=>{
    const newPost = new Posts(req.body);
    try{
        const post = await newPost.save();
        if(!post) throw Error("Something went wrong");
        
        res.status(200).json(post);
    }catch(err) {
        res.status(400).json({msg: err})
    }
})
// Delete request with id
router.delete('/:id',async (req, res)=>{
    try{    
        const post = await Posts.findByIdAndDelete(req.params.id);
        if(!post) throw Error("no post foudn");

        res.status(200).json({success: true})
    } catch(err){
        res.status(400).json({msg: err})
    }
})
// Update request with id
router.patch('/:id',async (req, res)=>{
    try{    
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error("no post found for update");

        res.status(200).json({success: true})
    } catch(err){
        res.status(400).json({msg: err})
    }
})
module.exports = router;