import Link from 'next/link'

import Layout from "../components/Layout";
function OrderCompletedPage() {
  return (
    <Layout title='Order Completed'>
      <h2>Thanks for order.</h2>
      <Link href='/order-history'>View Order History</Link>
    </Layout>
  )
}
export default OrderCompletedPage


// import { useRouter } from "next/router";
// export default function OrderCompeletedPage(){
//   const router = useRouter()
//   return(
//     <Layout title='order-compeleted'>
//       <div>
//           <h2 className="text-lg">thanks for order</h2>
//           <button
//                 onClick={()=>{router.push('/order-history')}}
//                 className='rounded-xl bg-gray-700 text-white px-4 py-2'
//               >
//                 Order History
//               </button>
//       </div>
//     </Layout>
//   )
// }
