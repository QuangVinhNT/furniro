import Living from '@/assets/living.jpg';
import Dining from '@/assets/dining.jpg';
import Bedroom from '@/assets/bedroom.jpg';

const rooms = [
  {
    name: 'Dining',
    image: Dining,
    link: '/'
  },
  {
    name: 'Living',
    image: Living,
    link: '/'
  },
  {
    name: 'Bedroom',
    image: Bedroom,
    link: '/'
  },
];

const HomeRoomType = () => {
  return (
    <div className="mt-7 px-4 lg:px-12 lg:mt-12">
      <h1 className="text-center font-extrabold md:text-lg lg:text-2xl">Browse The Range</h1>
      <p className="text-center text-[11px] text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-5 flex gap-1.5 justify-center">
        {rooms.map((room, idx) => (
          <div key={idx}>
            <div className="overflow-hidden">
              <img src={room.image} alt="" className="object-cover object-top-left h-[200px] rounded-md lg:h-[480px] lg:aspect-[3/4] cursor-pointer transition-all hover:scale-105 hover:brightness-110" />
            </div>
            <span className="text-xs font-bold text-center block mt-2 lg:text-sm">{room.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRoomType;
