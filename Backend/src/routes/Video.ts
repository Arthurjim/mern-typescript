import {Schema, model}  from 'mongoose';


const videoSchema = new Schema({
  title:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    trim:true
  },
  url:{
    type:String,
    required:true,
    trim:true,
    unique:true
  }
},{
  versionKey:false, //no aparece el __v
  timestamps:true //este es para que tambien cree dos campos, cuando fue creado y cuando fue actualizado el dato
})

export default model('video',videoSchema)