import bcrypt from 'bcrypt'

const users =[
    {
        name:"user 1",
        email:"user1@gmail.com",
        password:bcrypt.hashSync('12345',1),
        isAdmin:true
    },
    {
        name:"user 2",
        email:"user2@gmail.com.ir",
        password:bcrypt.hashSync('12345',1),
        isAdmin:false
    }
]
export default users;