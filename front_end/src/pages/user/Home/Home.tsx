import HomeBanner from "./HomeBanner";
import HomeFurnitureSharing from "./HomeFurnitureSharing";
import HomeInspiration from "./HomeInspiration";
import HomeProducts from "./HomeProducts";
import HomeRoomType from "./HomeRoomType";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeRoomType />
      <HomeProducts />
      <HomeInspiration />
      <HomeFurnitureSharing />
    </div>
  );
};

export default Home;
