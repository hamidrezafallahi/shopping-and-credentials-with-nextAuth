import ProductItem from '../components/ProductItem'
import Product from '../models/productModel'
import  db  from '../utils/db'

import {Store} from '../context/Cart'
import { useContext } from 'react'

import Layout from "../components/Layout"

import{toast} from 'react-toastify'

export default function Home({Products}) {
    const{state,dispatch}=useContext(Store)
    const {cart }=state;
    function addToCartHandler(product){
        const existingItem =cart.cartItems.find((item)=>item.slug === product.slug )
        const qty = existingItem ?existingItem.qty+1 : 1;
        if(product.count < qty ){
            alert('product is out')
            return
        }
        dispatch({type:"ADD_ITEMS",payload:{...product,qty}})
        toast.success('item added succesfully')
    }
  return (<Layout title='homepage'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
            {Products.map((pitem)=><ProductItem addToCartHandler={addToCartHandler} key={pitem.slug}item={pitem}/>)}
            
        </div>
    </Layout>)
}
export async function getStaticProps(){
    await db.connect();
    const Products = await Product.find().lean()
    return{
        props:{Products:Products.map(Product=>db.convertToObj(Product))}
    }

}