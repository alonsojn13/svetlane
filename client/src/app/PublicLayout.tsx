import SiteFooter from "@/components/layout/SiteFooter"
import { Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <div>
        <main>
        <Outlet/>
        </main>
        <SiteFooter></SiteFooter>
    </div>
  )
}

export default PublicLayout