import "./style.scss";

interface ShelfItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ShelfItem({ id, title, price, image }: ShelfItemProps) {
  return (
    <div className="shelf__item" key={id}>
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
      <button className="shelf__buy-button">Adicionar</button>
    </div>
  );
}

export default ShelfItem;
