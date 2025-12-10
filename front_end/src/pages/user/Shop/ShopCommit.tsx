import { LuBadgeCheck, LuGem, LuHeadset, LuPackage } from "react-icons/lu";

const commits = [
  {
    icon: <LuGem />,
    label: 'High Quality',
    description: 'Crafted from top materials'
  },
  {
    icon: <LuBadgeCheck />,
    label: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: <LuPackage />,
    label: 'Free Delivery',
    description: 'Order over 150$'
  },
  {
    icon: <LuHeadset />,
    label: '24/7 Support',
    description: 'Dedicated support'
  },
]
const ShopCommit = () => {
  return (
    <ul className="mt-6 py-8 px-4 bg-secondary grid grid-cols-2 gap-4 -mb-12 md:grid-cols-4 lg:flex lg:justify-between lg:px-12">
      {commits.map((commit, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <div className="text-4xl">{commit.icon}</div>
          <div className="">
            <h3 className="text-lg font-semibold">{commit.label}</h3>
            <p className="text-xs text-gray">{commit.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShopCommit;
