import { ProductProps } from "../../typings";
import BuyButton from "../BuyButton";
import WishListButton from "../WishListButton";
import "./style.scss";

function ShelfItem({ id, title, price, image }: ProductProps) {
  return (
    <div className="shelf__item" key={id}>
      <WishListButton id={id} title={title} price={price} />
      <img className="shelf__image" src={image} alt={title} />
      <p className="shelf__title">{title}</p>
      <p className="shelf__price">
        <span className="list-price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className="best-price">
          {(price * 0.85).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <p className="installments">
          em até{" "}
          <span>
            12x de{" "}
            {((price * 0.85) / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>{" "}
          sem juros
        </p>
      </p>
      <BuyButton id={id} image={image} title={title} price={price} />
    </div>
  );
}

export default ShelfItem;
