import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <main className="flex flex-col pt-9">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout