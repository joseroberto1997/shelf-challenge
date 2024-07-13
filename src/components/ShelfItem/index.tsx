import { ProductProps } from "../../typings";
import BuyButton from "../BuyButton";
import CaritemSummary from "../CartItemSummary";
import WishListButton from "../WishListButton";
import "./style.scss";

function ShelfItem({ id, title, price, image }: ProductProps) {
  return (
    <div className="shelf__item" key={id}>
      <WishListButton id={id} title={title} price={price} />
      <CaritemSummary image={image} title={title} price={price} />
      <BuyButton id={id} image={image} title={title} price={price} />
    </div>
  );
}

export default ShelfItem;
