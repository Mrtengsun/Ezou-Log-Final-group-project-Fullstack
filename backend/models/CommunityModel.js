import mongoose from "mongoose"

const { Schema, model } = mongoose;

const communitySchema = new Schema({
 author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
 description: { type: String, required: true,trim:true },
 comments: [{ type: Schema.Types.ObjectId,ref:'User',trim:true,default:Date.now(),text:String }],
 topic:{type:String,required:true},
 likes:[{type:Schema.Types.ObjectId,ref:'User',type:Date,default:Date.now()}],
 avatar: {type:String, data: Buffer},
}, { _id: false },{timestamps:true})

const Community = model('User', communitySchema)
export default Community