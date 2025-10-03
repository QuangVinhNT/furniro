import Banner from '@/assets/banner.jpg';
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div className="relative">
      <img src={Banner} alt="" className="object-cover w-full h-[200px]"/>
      <div className="absolute bg-secondary/80 top-1/2 right-4 px-4 py-4 w-[calc(100%-32px)] -translate-y-1/2">
        <span className="text-[8px] font-black tracking-widest">New Arrival</span>
        <h1 className="font-black text-xl text-primary leading-5">Discover Our New Collection</h1>
        <p className="text-[8px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Link to={'/'} className="uppercase text-[6px] font-bold text-white bg-primary py-1 px-2 inline-block mt-2">Buy now</Link>
      </div>
    </div>
  );
};

export default HomeBanner;
