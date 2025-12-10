import Logo from '@/assets/logo.png';
import { LuHeart, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
const menuItems = [
  {
    label: 'Home',
    linkTo: '/'
  },
  {
    label: 'Shop',
    linkTo: '/shop'
  },
  {
    label: 'Blog',
    linkTo: '/blogs'
  },
  {
    label: 'Contact',
    linkTo: '/contact'
  },
];

const menuIconItems = [
  {
    label: 'Favourite',
    icon: <LuHeart size={20} />,
    linkTo: '/favourites'
  },
  {
    label: 'Cart',
    icon: <LuShoppingCart size={20} />,
    linkTo: '/cart'
  },
  {
    label: 'Info',
    icon: <LuUser size={20} />,
    linkTo: '/info'
  },
];
const ClientHeader = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between py-2 px-4 fixed top-0 z-50 w-full bg-white shadow lg:py-4 lg:px-12">
      <Link to={'/'} className="flex items-center gap-1">
        <img src={Logo} alt="" className="size-8 object-contain" />
        <span className="font-bold text-xl">Furniro</span>
      </Link>
      <ul className="hidden md:flex gap-10 text-xs font-medium items-center lg:text-sm lg:gap-12">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link to={item.linkTo} className={`transition-all hover:text-primary ${location.pathname === item.linkTo && 'text-primary'}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-8">
        <li className="transition-all hover:text-primary cursor-pointer"><LuSearch size={20} /></li>
        {menuIconItems.map((item, idx) => (
          <li key={idx} className={`transition-all hover:text-primary ${location.pathname === item.linkTo && 'text-primary'}`}>
            <Link to={item.linkTo}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientHeader;
