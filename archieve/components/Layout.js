import Head from "next/head";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { useContext, useState, useEffect } from "react";
import { Store } from "../context/Cart";
import { useSession, signOut } from "next-auth/react";
import Cookies from "js-cookie";
import DropDown from "./Dropdown";
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Layout({ children, title }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((acc, cur) => acc + cur.qty, 0));

  }, [cart.cartItems]);
  const { status, data: session } = useSession();

  function LogoutHandler() {
    Cookies.remove();
    signOut({ callbackUrl: "/login" });
  }
  return (
    <>
      <Head>
        <title>{`${title} - shopping`}</title>
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-14 px-8 justify-between items-center border-b-4 bg-white">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold ">shopping</a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2">
                  Cart
                </a>
              </Link>
                    <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                      {cartItemsCount}
                    </span>
              {status === "loading " ? (
                "loading"
              ) : session ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-500">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 bg-gray-300 rounded-xl p-4 origin-top-right border border-slate-100">
                    <Menu.Item>
                      <DropDown className="flex p-2" href="/profile">
                        Profile
                      </DropDown>
                    </Menu.Item>
                    <Menu.Item>
                      <a className="flex p-2" href="#" onClick={LogoutHandler}>
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link legacyBehavior href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10">
          footer
        </footer>
      </div>
    </>
  );
}
