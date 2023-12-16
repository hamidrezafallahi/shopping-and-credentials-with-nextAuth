import { useEffect, useState } from 'react'

import Layout from '../components/Layout'

function OrderHistoryPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch('api/orders/history')
      const data = await response.json()
      setOrders(data)
    }

    fetchOrders()
  }, [])

  return (
    <Layout title='Order History'>
      <h2 className='text-lg'>Order History</h2>
      <div>
        {orders.map((item) => (
          <div key={item._id} className='flex p-2'>
            <div className='px-2'>{item._id}</div>
            <div className='px-2'>{item.totalPrice}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export default OrderHistoryPage
////////////////////////////////////////////////////////////
// import Layout from "../components/Layout";
// import { useState, useEffect } from "react";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     async function fetchOrders(){
//       const response = await fetch('./api/orders/history')
//       const data = await response.json()
//       setOrders(data)

//     }
//     fetchOrders()
//   }, []);
//   return (
//     <Layout title="order-history">
//       <h2>order-history</h2>
//       {orders.map((item)=>
//       {console.log(item)}
//       // (<div key={item._id}>{item._id}</div>)
//         )}
//     </Layout>
//   );
// }
