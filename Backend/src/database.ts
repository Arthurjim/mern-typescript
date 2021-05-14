import mongoose,{ConnectOptions} from 'mongoose'
import config from './config'
(async ()=>{
 try {
  const mongooseOptions:ConnectOptions = {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions)
  console.log('Data base is connected to:',  db.connection.name)
 } catch (error) {
   console.error(error)
 }
})()