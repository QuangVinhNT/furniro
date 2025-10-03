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
]

const HomeRoomType = () => {
  return (
    <div className="mt-7 px-4">
      <h1 className="text-center font-black text-lg">Browse The Range</h1>
      <p className="text-center text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-5 flex gap-1.5">
        {rooms.map((room, idx) => (
        <div key={idx}>
          <img src={room.image} alt="" className="object-cover object-top-left h-[200px] rounded-md"/>
          <span className="text-sm font-bold text-center block mt-2">{room.name}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HomeRoomType;
