import Logo from '@/assets/logo.png';
import { LuHeart, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
const ClientHeader = () => {
  return (
    <div className="flex justify-between py-2 px-4 fixed top-0 z-50 w-full bg-white shadow">
      <div className="flex items-center gap-1">
        <img src={Logo} alt="" className="size-8 object-contain"/>
        <span className="font-bold text-xl">Furniro</span>
      </div>
      <ul className="hidden md:block">
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <ul className="flex items-center gap-8">
        <li><LuSearch size={20}/></li>
        <li><LuHeart size={20}/></li>
        <li><LuShoppingCart size={20}/></li>
        <li><LuUser size={20}/></li>
      </ul>
    </div>
  );
};

export default ClientHeader;
