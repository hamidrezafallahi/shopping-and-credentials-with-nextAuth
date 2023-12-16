import Link from "next/link";
export default function ProductItem({ item,addToCartHandler }){




    return(
        <div className="bg-white rounded-xl mb-5 blck">
            <Link legacyBehavior href={`/product/${item.slug}`}>
            <a>
                <img src={item.image} alt="" className="rounded-t-xl w-full"/>
            </a>
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link legacyBehavior href={`/product/${item.slug}`}>
                    <a >
                        <h2 className=" text-lg">{item.title}</h2>
                    </a>
                </Link>
                <p className="p-2">{item.price}</p>
                <button onClick={()=>{addToCartHandler(item)}} className="rounded-xl bg-gray-700 text-white px-4 py-2">Add To Cart </button>
            </div>
        </div>
    )
}