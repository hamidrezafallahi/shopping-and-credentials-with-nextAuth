import {useRouter} from 'next/router'
import { useContext } from 'react'
import {Store} from '../../context/Cart'
import Image from 'next/image'
import ProductItems from '../../data/products.json'
import Layout from '../../components/Layout'



export default function ProductPage(){
    const {state,dispatch}=useContext(Store)
       const {query} = useRouter()
    const { slug } = query
    const router = useRouter()


    const product=ProductItems.find((item) => item.slug === slug)
    if(!product){return <div>product not found ..</div>}
    function addToCartHandler(){
        const existingitem =state.cart.cartItems.find((item)=>item.slug === product.slug )
        const qty = existingitem ? existingitem.qty+1 : 1
        if(product.count < qty ){
            alert('product is out')
            return
        }
        dispatch({
            type:'ADD_ITEMS',
            payload: {...product,qty}
        })
        router.push('/cart')

    }
    return(
        <>
        <Layout title={product.title}>
        <div className='grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10'>
            <div className='m:cols-span-2'>
                <Image 
                    className='rounded-xl'
                    src={product.image}
                    width={340}
                    height={340}
                    layout='responsive'
                    alt={product.title}
                />

            </div>
            <div>
                <div className='text-lg'>
                    <h2>{product.title}</h2>
                    <p>{product.categorie}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className='p-5'>
                <div className="mb-2 flex justify-between">
                    <div>Price:</div>
                    <div>{product.price}</div>
                </div>
                <div className="mb-2 flex justify-between">
                    <div>Status:</div>
                    <div>{product.count > 0 ? 'Available' : 'Unavailable'}</div>
                </div>
                <button 
                className='rounded-xl bg-gray-700 text-white px-4 py-2 w-full'
                onClick={addToCartHandler}
                > Add to Cart</button>

            </div>
        </div>
        </Layout>
        </>
    )
}