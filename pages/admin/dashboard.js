import Layout from "../../components/Layout"
import Link from 'next/link'
import{useState,useEffect} from 'react'
function DashboardPage(){
    const[adminData,setAdminData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('../api/admin/summary')
            const data = await response.json()
            setAdminData(data)
        }
        fetchData()
    },[])


    return(
        <Layout title='Admin Dashboard'>
            <div className="grid md:grid-cols-4 md:gap-5">
                <div className="bg-gray-400">
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
                <div className="md:col-span-3 bg-gray-300">
                    <h2 className="mb-4 text-xl ">Admin Dashboard</h2>
                    <div className="container">
                    {adminData.map((item,index)=>(
                        <div key={index} className="flex p-2">
                            <div className="m-5 p-5 bg-white rounded-xl text-center">
                            <p className="text-3xl">{item.ordersCount}</p>
                            <p>Orders</p>
                            </div>
                            <div className="m-5 p-5 bg-white rounded-xl text-center">
                            <p className="text-3xl">{item.productsCount}</p>
                            <p>Products</p>
                            </div>
                            <div className="m-5 p-5 bg-white rounded-xl text-center">
                            <p className="text-3xl">{item.usersCount}</p>
                            <p>Users</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    )

}
DashboardPage.auth={adminOnly:true}
export default DashboardPage