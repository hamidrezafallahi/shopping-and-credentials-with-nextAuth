import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Link from 'next/link'

function Orders(){
    const [adminOrders,setAdminOrders]=useState([])
    useEffect(()=>{
        async function fetchData (){
            const response = await fetch('../api/admin/orders')
            const data = await response.json()
            setAdminOrders(data)
        }
        fetchData()
    },[])
    return (
        <Layout title='admin orders'>
            <div className="grid md:grid-cols-4 md:gap-5">
            <div className="bg-gray-200 rounded-xl">
                    <ul>
                        <li className="w-1/2 p-2 m-2 bg-white rounded-md">
                            <Link href='/admin/dashboard'>
                            <a className="font-bold">Dashboard</a>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 m-2 bg-white rounded-md">
                            <Link href='/admin/orders'>
                            <a className="font-bold">Orders</a>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 m-2 bg-white rounded-md">
                            <Link href='/admin/oroducts'>
                            <a className="font-bold">Products</a>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 m-2 bg-white rounded-md">
                            <Link href='/admin/osers'>
                            <a className="font-bold">Users</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <h2 className="mb-4 text-xl">Admin Orders</h2>
                    {adminOrders.map((item,index)=>(
                        <div key={index} className="grid grid-cols-4">
                            <div className="bg-white m-2 p-2 rounded-md">
                                <p className="text-lg">Price : {item.totalPrice}</p>
                            </div>
                            <div className="bg-white m-2 p-2 rounded-md">
                                <p className="text-lg">Payment : {item.paymentMethod}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    )
}
export default Orders