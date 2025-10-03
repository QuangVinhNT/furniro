import { Product } from "@/types/Product";

interface IProps {
  product: Product;
}
const ProductCard = (props: IProps) => {
  const { product } = props;
  const discountPrice = product.discount ? product.price - product.price * product.discount / 100 : 0;
  const diffDays = Math.ceil(Math.abs(+new Date() - +new Date(product.createdDate)) / (1000 * 60 * 60 *24));
  return (
    <div className="relative">
      {product.discount ? (
          <span className="absolute top-3 right-3 bg-red-accents text-white text-[10px] size-8 rounded-full font-bold flex items-center justify-center">-{product.discount}%</span>
        ) : (
          diffDays <= 7 ? (
            <span className="absolute top-3 right-3 bg-green-accents text-white text-[10px] size-8 rounded-full font-bold flex items-center justify-center">New</span>
          ) : ''
        )}
      <div className="bg-secondary">
        <img src={product.images[0]} alt="" />
      </div>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-xs">{product.category}</p>
      <div className="text-xs font-bold">
        {product.discount ? (
          <>
            <span className="line-through font-normal pr-2">${product.price}</span>
            <span className="">${discountPrice}</span>
          </>
          ) : (
            <span className="">${product.price}</span>
          )
        }

      </div>
    </div>
  );
};

export default ProductCard;
