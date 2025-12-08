import { Product } from "@/types/Product";
import { Link } from "react-router-dom";

interface IProps {
  product: Product;
}
const ProductCard = (props: IProps) => {
  const { product } = props;
  const discountPrice = product.discount ? product.price - product.price * product.discount / 100 : 0;
  const diffDays = Math.ceil(Math.abs(+new Date() - +new Date(product.createdDate)) / (1000 * 60 * 60 * 24));
  return (
    <div className="relative rounded-md overflow-hidden">
      {product.discount ? (
        <span className="absolute top-3 right-3 bg-red-accents text-white text-[10px] size-8 rounded-full font-bold flex items-center justify-center z-10">-{product.discount}%</span>
      ) : (
        diffDays <= 7 ? (
          <span className="absolute top-3 right-3 bg-green-accents text-white text-[10px] size-8 rounded-full font-bold flex items-center justify-center z-10">New</span>
        ) : ''
      )}
      <div className="overflow-hidden">
        <img src={product.images[0]} alt="" className="aspect-[4/5] object-cover transition-all hover:scale-105 hover:brightness-50" />
      </div>
      <div className="bg-lighter-gray p-2">
        <Link to={''}>
          <h3 className="font-semibold text-sm cursor-pointer transition-all hover:text-primary w-fit">{product.name}</h3>
        </Link>
        <p className="text-[10px] font-medium text-gray">{product.category}</p>
        <div className="text-xs font-medium">
          {product.discount ? (
            <>
              <span className="">${discountPrice}</span>
              <span className="line-through font-normal pl-1 text-light-gray text-[10px]">${product.price}</span>
            </>
          ) : (
            <span className="">${product.price}</span>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
