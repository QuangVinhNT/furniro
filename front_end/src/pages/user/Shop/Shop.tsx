import { Banner } from "@/components";
import { useLocation } from "react-router-dom";
import ShopFilter from "./ShopFilter";
import ShopProducts from "./ShopProducts";
import ShopCommit from "./ShopCommit";

const Shop = () => {
  const location = useLocation();
  return (
    <>
      <Banner path={location.pathname}/>
      <ShopFilter />
      <ShopProducts />
      <ShopCommit />
    </>
  );
};

export default Shop;
