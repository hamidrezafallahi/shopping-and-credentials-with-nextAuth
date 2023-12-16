import  Mongoose from "mongoose";
async function connect(){
    await Mongoose.connect('mongodb://127.0.0.1:27017/shopping')
    console.log('connected.')
}

function convertToObj(doc){
    doc._id=doc._id.toString()
return doc
}
const db={connect,convertToObj}
export default db