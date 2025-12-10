import Banner from '@/assets/banner.jpg';
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div className="relative">
      <img src={Banner} alt="" className="object-cover w-full h-[200px] md:h-[250px] lg:h-[500px]"/>
      <div className="absolute bg-secondary/90 top-1/2 right-4 px-4 py-4 w-[calc(100%-32px)] -translate-y-1/2 rounded-md md:w-[300px] lg:w-[550px] lg:right-12">
        <span className="text-[8px] font-bold tracking-widest lg:text-sm">New Arrival</span>
        <h1 className="font-extrabold text-xl text-primary leading-5 md:leading-6 lg:text-4xl lg:my-4">Discover Our New Collection</h1>
        <p className="text-[8px] font-medium md:my-2 md:text-[10px] md:leading-4 lg:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Link to={'/shop'} className="uppercase text-[6px] font-bold text-white bg-primary py-1 px-2 inline-block mt-2 md:text-[10px] md:font-medium md:py-2 md:px-4 md:rounded-md transition-all hover:brightness-110">Buy now</Link>
      </div>
    </div>
  );
};

export default HomeBanner;
