import BreadcrumbImg from '@/assets/breadcrumb.jpg';
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
interface IProps {
  path: string;
  bannerName?: string;
}
const Banner = (props: IProps) => {
  const { path, bannerName } = props;
  const pathItems = path.split("/");
  pathItems[0] = 'home';
  const breadcrumbItems = pathItems.map((item: string) => {
    const links = [];
    for (let i = 1; i <= pathItems.indexOf(item); i++) {
      links.push(pathItems[i]);
    }
    return {
      label: item,
      linkTo: item === 'home' ? '/' : `/${links.join('/')}`
    };
  });
  return (
    <div className="relative h-[200px]">
      <img src={BreadcrumbImg} alt="" className="w-full h-full object-cover opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <h1 className="uppercase font-bold text-2xl text-center">{bannerName ? bannerName : pathItems.slice(-1)[0]}</h1>
        <ul className="flex mt-2">
          {breadcrumbItems.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <Link to={item.linkTo} className={`text-xs ${item.label !== pathItems.slice(-1)[0] && 'font-semibold'} transition-all hover:text-primary`}>{item.label.charAt(0).toUpperCase()}{item.label.substring(1)}</Link>
              {idx !== pathItems.length - 1 && <LuChevronRight size={16} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
