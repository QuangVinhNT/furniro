import Bedroom from '@/assets/bedroom.jpg';
import Sofa from '@/assets/sofa1.jpg';
import { LuChevronLeft, LuChevronRight, LuMoveRight } from "react-icons/lu";
const HomeInspiration = () => {
  return (
    <div className="flex bg-secondary py-6 pl-4 gap-2 mt-7 lg:mt-12 lg:pl-12 lg:py-12">
      <div className="flex-1 md:flex-1/3 md:flex flex-col justify-center">
        <h2 className="font-extrabold text-2xl lg:text-4xl">50+ Beautiful rooms inspiration</h2>
        <p className="text-xs mt-2 lg:text-sm">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <button className="inline-block border border-primary text-xs bg-primary text-white font-semibold px-4 py-2 mt-3 rounded-md w-fit transition-all cursor-pointer hover:brightness-110">Explore More</button>
      </div>
      <div className="flex-1 md:flex-2/3 md:flex gap-4 lg:h-[500px]">
        <div className="hidden md:block relative flex-1">
          <img src={Bedroom} alt="" className="h-full w-full object-cover" />
          <div className="absolute bottom-2 left-2 flex items-end">
            <div className="bg-white/85 p-4">
              <p className="text-xs text-gray font-medium flex gap-7"><span>01</span><span className="relative before:content-[''] before:w-5 before:h-[1px] before:bg-gray before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:-translate-x-full">Bedroom</span></p>
              <h3 className="font-bold text-lg">Inner Peace</h3>
            </div>
            <button className="bg-primary text-white h-fit p-2 transition-all hover:brightness-110 cursor-pointer"><LuMoveRight size={20}/></button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex overflow-hidden gap-1 relative lg:h-[90%]">
            <button className="absolute bg-white rounded-full p-1 text-primary left-1 top-1/2 -translate-y-1/2 lg:text-2xl transition-all cursor-pointer hover:text-white hover:bg-primary"><LuChevronLeft /></button>
            {Array.from({ length: 4 }).map((_, idx) => (
              <img src={Sofa} alt="" className="aspect-[3/4] object-cover w-[90%]" key={idx} />
            ))}
            <button className="absolute bg-white rounded-full p-1 text-primary right-1 top-1/2 -translate-y-1/2 lg:text-2xl transition-all cursor-pointer hover:text-white hover:bg-primary"><LuChevronRight /></button>
          </div>
          <div className="my-4 flex gap-1">
            <button className="border border-primary flex p-1 rounded-full items-center justify-center"><div className="size-2 rounded-full bg-primary inline-block"></div></button>
            <button className="flex p-1 rounded-full items-center justify-center"><div className="size-2 rounded-full bg-light-gray inline-block"></div></button>
            <button className="flex p-1 rounded-full items-center justify-center"><div className="size-2 rounded-full bg-light-gray inline-block"></div></button>
            <button className="flex p-1 rounded-full items-center justify-center"><div className="size-2 rounded-full bg-light-gray inline-block"></div></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInspiration;
