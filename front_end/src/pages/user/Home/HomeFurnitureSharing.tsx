import Sofa from '@/assets/sofa1.jpg';
const HomeFurnitureSharing = () => {
  return (
    <div className="mt-7 px-4 lg:px-12 lg:mt-12">
      <p className="text-center text-[10px] font-semibold lg:text-xs">Share your setup with</p>
      <h1 className="text-center font-extrabold md:text-lg lg:text-2xl">#FurniroFurniture</h1>
      <div className="grid grid-cols-12 grid-rows-12 gap-1.5 mt-2 h-[400px]">
        {/* For mobile */}
        <div className="col-span-6 row-span-12 flex flex-col gap-1.5 md:hidden">
          <img src={Sofa} alt="" className="w-full h-full object-cover md:hidden" />
          <img src={Sofa} alt="" className="w-full h-full object-cover md:hidden" />
        </div>
        <div className="col-span-6 row-span-12 md:hidden">
          <img src={Sofa} alt="" className="w-full h-full object-cover md:hidden" />
        </div>

        {/* For tablet - PC */}
        <div className="row-span-6 col-span-1 hidden md:block">
          <img src={Sofa} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-6 col-span-4 hidden md:grid grid-rows-6">
          <div></div>
          <img src={Sofa} alt="" className="w-full h-full object-cover row-span-5" />
        </div>
        <div className="row-span-12 col-span-3 hidden md:grid grid-rows-12">
          <div className="row-span-3"></div>
          <img src={Sofa} alt="" className="w-full h-full object-cover row-span-6" />
          <div className="row-span-3"></div>
        </div>
        <div className="row-span-6 col-span-2 hidden md:grid grid-rows-6">
          <div></div>
          <img src={Sofa} alt="" className="w-full h-full object-cover row-span-5" />
        </div>
        <div className="row-span-6 col-span-2 hidden md:block">
          <div></div>
          <img src={Sofa} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-6 col-span-2 hidden md:block">
          <div></div>
          <img src={Sofa} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-6 col-span-3 hidden md:grid grid-rows-6">
          <img src={Sofa} alt="" className="w-full h-full object-cover row-span-5" />
        </div>
        <div className="row-span-6 col-span-1 hidden md:block">
          <img src={Sofa} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-6 col-span-3 hidden md:grid grid-rows-6">
          <img src={Sofa} alt="" className="w-full h-full object-cover row-span-5" />
        </div>
      </div>
    </div>
  );
};

export default HomeFurnitureSharing;
