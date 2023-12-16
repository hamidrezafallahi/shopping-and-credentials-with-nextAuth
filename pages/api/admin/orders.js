import Order from '../../../models/order'
import db from '../../../utils/db'
import { getSession } from 'next-auth/react'

async function handler(req,res){
const session = await getSession({req})
if(!session || session && !session.user.isAdmin){
    return res.status(401).send('sign in required')
}
await  db.connect()
const orders = await Order.find()
res.send(orders)
}
export default handler

