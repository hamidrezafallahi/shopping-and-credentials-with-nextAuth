import Layout from "../components/Layout";
import CheckOutWizard from "../components/CheckoutWizard";
import { useRouter } from "next/router";
import { useState,useContext,useEffect } from "react";
import{Store} from '../context/Cart'
import{toast} from 'react-toastify'
import Cookies from "js-cookie";
export default function Payment() {
  const methods = ["Getway", "Offline Payment"];
  const router = useRouter()
  const{state,dispatch}=useContext(Store)
  const{cart}=state
  const {paymentMethod}=cart
    const [selectedPaymentMethod,setSelectedPaymentMethod]=useState()
    console.log(typeof(cart.cartItems))
    useEffect(()=>{
      if(paymentMethod){
        setSelectedPaymentMethod(paymentMethod)
      }
    },[])

  function submitHandler(event){
    event.preventDefault()
    if(!selectedPaymentMethod){
        toast.warning('please select payment method')
    }
    dispatch({type:"SAVE_PAYMENT_METHOD",payload:selectedPaymentMethod})
     Cookies.set('cart',JSON.stringify({...cart,paymentMethod:selectedPaymentMethod}))
     router.push('/placeorder')

}
  return (
    <Layout title="payment page">
      <CheckOutWizard activeStep={2} />
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h2 className="mb-4 text-xl text-center">payment method</h2>
        {methods.map((item) => (
          <div key={item} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0 "
              id={item}
              type="radio"
              checked={selectedPaymentMethod===item}
              onChange={()=>{setSelectedPaymentMethod(item)}}

            />
            <label className="p-2" htmlFor={item}>{item}</label>
          </div>
        ))}
        <div className="mb-4 flex justify-between ">
            <button type="button" onClick={()=>{
                router.push('/shipping')
            }} className="rounded-xl bg-gray-300 text-gray-700 px-4 py-2 w-28">Back</button>
            <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-28">Next</button>

        </div>
      </form>
    </Layout>
  );
}
