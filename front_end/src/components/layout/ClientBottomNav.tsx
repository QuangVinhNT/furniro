import { LuBookOpen, LuContact, LuHouse, LuShoppingBag } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: 'Home',
    link: '/',
    icon: <LuHouse size={20}/>
  },
  {
    name: 'Shop',
    link: '/shop',
    icon: <LuShoppingBag size={20}/>
  },
  {
    name: 'Blog',
    link: '/blog',
    icon: <LuBookOpen size={20}/>
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <LuContact size={20}/>
  }
]

const ClientBottomNav = () => {
  const location = useLocation();
  return (
    <ul className="w-full flex justify-between items-center md:hidden fixed bottom-0 px-4 py-2 shadow bg-white">
      {menuItems.map((menuItem, idx) => {
        const menuColor = location.pathname === menuItem.link ? 'text-primary' : 'text-black';
        return (
          <li key={idx} className="flex flex-col items-center gap-1">
            <span className={menuColor}>{menuItem.icon}</span>
            <Link to={menuItem.link} className={`font-semibold text-xs ${menuColor}`}>{menuItem.name}</Link>
          </li>
        )
      })}
    </ul>
  );
};

export default ClientBottomNav;
