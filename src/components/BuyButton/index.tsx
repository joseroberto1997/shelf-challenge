import { useContext, useEffect, useState } from "react";
import { ProductProps } from "../../typings";
import CheckIcon from "../../assets/checkIcon.svg";

import "./style.scss";
import { CartContext } from "../../context/cart";

function BuyButton({ id, image, title, price }: ProductProps) {
  const [active, setActive] = useState(false);
  const { minicart, productMinicartList } = useContext(CartContext);

  useEffect(() => {
    setActive(minicart.some((item) => item.id === id));
  }, [minicart, id]);

  function handleClick() {
    productMinicartList(id, title, price, image);
  }

  return (
    <button
      className={`shelf__buy-button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {active && <img src={CheckIcon} />}Adicionar
    </button>
  );
}

export default BuyButton;
