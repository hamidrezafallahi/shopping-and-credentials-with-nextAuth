import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useRef,useEffect } from "react";
import{useSession} from 'next-auth/react'
import { useRouter } from "next/router";
import Login from "../components/register/Login";
import Register from "../components/register/Register";
export default function Auth(  ) {
const [flag, setFlag] = useState(true);
  const router=useRouter();
  const {redirect}=router.query
  //===================for check if it shows login form or register form 
  const{data: session }=useSession()
  useEffect(()=>{
  if(session?.user){
    router.push(redirect || '/')
  }
},[router,session,redirect])



//================html result ===================
  return (
    <>
      <div className="container">
        <div className="container  w-50 border rounded p-5 py-4 min-w-max">
           <ul
            className="nav nav-pills nav-justified mb-3 "
            id="ex1"
            role="tablist"
          >
            <li className="nav-item px-2" role="presentation ">
              <a
                className={`nav-link ${flag ? "active" : ""} `}
                // ref={Login}
                onClick={()=>{setFlag(true)}}
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item px-2" role="presentation">
              <a
                className={`nav-link ${!flag ? "active" : ""} `}
                // ref={Register}
                onClick={()=>{setFlag(false)}}
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register "
                aria-selected="true"
              >
                Register
              </a>
            </li>
          </ul> 
           {flag ? <Login/> : <Register/>} 
        </div>
      </div>
    </>
  );
}
