import { Link } from "react-router-dom";
const linkMenuItems = [
  {
    label: 'Home',
    linkTo: '/'
  },
  {
    label: 'Shop',
    linkTo: '/'
  },
  {
    label: 'Blog',
    linkTo: '/'
  },
  {
    label: 'Contact',
    linkTo: '/'
  },
]
const helpMenuItems = [
  {
    label: 'Payment Options',
    linkTo: '/'
  },
  {
    label: 'Returns',
    linkTo: '/'
  },
  {
    label: 'Privacy Policies',
    linkTo: '/'
  },
]
const ClientFooter = () => {
  return (
    <>
      <div className="hidden md:flex px-4 gap-10 border-t border-light-gray py-8 lg:px-12">
        <div className="flex-1/3">
          <h1 className="font-extrabold text-xl">Furniro.</h1>
          <p className="text-light-gray text-sm mt-4">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <ul className="flex-1/6 text-sm flex flex-col gap-8">
          <li className="text-light-gray">Links</li>
          {linkMenuItems.map((item, idx) => (
            <li key={idx} className="font-medium transition-all hover:text-primary w-fit">
              <Link to={item.linkTo}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex-2/6 text-sm flex flex-col gap-8 lg:flex-1/6">
          <li className="text-light-gray">Help</li>
          {helpMenuItems.map((item, idx) => (
            <li key={idx} className="font-medium transition-all hover:text-primary w-fit">
              <Link to={item.linkTo}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-1">
          <span className="text-light-gray text-sm">Newsletter</span>
          <div className="flex mt-4 text-xs gap-2">
            <input type="text" placeholder="Enter Your Email Address" className="font-light outline-none border-b focus:border-b-primary"/>
            <button className="uppercase font-medium border-b transition-all cursor-pointer hover:text-primary hover:border-b-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="hidden md:block text-center text-xs border-t border-light-gray mx-4 py-2 text-light-gray lg:mx-12">Copyright ©2025 Nguyen Tho Quang Vinh. Designed by Dennis Nzioki. All Rights Reserved.</p>
    </>
  );
};

export default ClientFooter;
