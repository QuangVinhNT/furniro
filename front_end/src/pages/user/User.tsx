import { ClientBottomNav, ClientFooter, ClientHeader } from "@/components";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="relative">
      <ClientHeader />
      <div className="h-12"></div>
      <Outlet />
      <div className="h-24"></div>
      <ClientBottomNav />
      <ClientFooter />
    </div>
  );
};

export default User;
