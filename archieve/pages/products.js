import Product from '../components/Product'
import productItems from '../data/products.json'
export default function products (){
   console.log(productItems)

    return(
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
            {productItems.map((pitem)=><Product key={pitem.slug}item={pitem}/>)}
            
        </div>
    )
}