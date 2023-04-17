import express from 'express';
import Community from '../models/CommunityModel.js'

const router = express.Router()

router.get('/',async(req,res)=>{
 try{
  const getAllCommune = await Community.find()
  res.send(getAllCommune)
 }catch(err){
  console.log(err)
 }
})


router.post('/',async(req,res)=>{
 console.log(req.body)
 try{
  const newPostCommunity = await Community.create(req.body)
  res.send(newPostCommunity)
 }catch(error){
  console.log(error)
 }
})


router.put('/:id',async(req,res)=>{
 const community = req.body.community
 const updateCommunity =await Community.findOneAndUpdate({_id:req.params.id},community)
 res.status(201).send(updateCommunity)
})

router.delete('/:id',(req,res)=>{
 res.send('can you delete')
})
export default router