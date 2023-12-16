import Layout from "../components/Layout"
import dynamic from "next/dynamic"
import { useContext } from "react"
import { Store } from '../context/Cart'
import{useRouter} from 'next/router'
import Image from "next/image"
function CartPage(){
    const {state,dispatch}=useContext(Store)
    const {cart:{cartItems}}=state
    const router=useRouter()

    function removeitemhandler(item){
        dispatch({type:'REMOVE_ITEM',payload:item})
    }
    return(
        <>
        <Layout title='shopping Cart'>
        <h1 className="mb-4 text-xl">Shopping Cart</h1>
        {cartItems.length === 0 ? (<div>Cart is empty</div>) : (
        <div className="grid md:grid-cols-4 md:gap-5  ">
            <div className="overflow-x-auto md:col-span-3 ">
                <table className="min-w-full ">
                    <thead className="border-b">
                        <tr>
                            <th className="px-5 text-left ">item</th>
                            <th className="p-5 text-center ">image</th>
                            <th className="p-5 text-right ">Quantity</th>
                            <th className="p-5 text-center ">price</th>
                            <th className="p-5 ">action</th>
                        </tr>        
                    </thead>
                    <tbody>
                        {cartItems.map((item)=>(
                            <tr key={item.slug} className="border-b">
                                <td className="px-5 text-left">{item.title}</td>
                                <td className="p-5 "><Image className=" mx-auto" src={item.image} width={100} height={100} alt='product'/></td>
                                <td className="p-5 text-right">{item.qty}</td>
                                <td className="p-5 text-center ">{item.price}</td>
                                <td className="p-5 text-center ">
                                    <button onClick={()=>{removeitemhandler(item)}}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-5">
                            <div className="pb-5">
                                totalPrice:{''}
                                {cartItems.reduce((acc,cur)=>acc+cur.qty*cur.price,0)}
                            </div>
                            <div>
                                <button
                                className="rounded-xl bg-gray-700 text-white px-4 py-2"
                                onClick={()=>{router.push('login?redirect=/shipping')}}>Check out </button>
                            </div>
            </div>
        </div>
        )}
        </Layout>
        </>
    )
}
export default dynamic(()=> Promise.resolve(CartPage),{ssr:false})