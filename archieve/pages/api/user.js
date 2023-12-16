// import db from '../../utils/db'
// import users from '../../data/users.js'
// import User from '../../models/userModel'

// async function handler(req,res) {
//    await db.connect() ;
//    await User.deleteMany() 
//    await User.insertMany(users)
//    res.send({message:'user added too'})

// }
// export async function registerHandler(req,res) {
//    await db.connect() ; 
//    await User.insertOne(users)
  

// }
// export default handler
import db from '../../utils/db'
import User from '../../models/userModel'
async function handler(req,res) {
   console.log('req.body')
   await db.connect() ;
   const newUser = new User({
      ...req.body,
    })
    const user = await newUser.save()
}
export default handler
   