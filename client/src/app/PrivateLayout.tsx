import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <SiteHeader/>
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
