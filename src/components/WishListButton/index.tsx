import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import "./style.scss";
import { WishListButtonProps } from "../../typings";

function WishListButton({ id, title, price }: WishListButtonProps) {
  const [active, setActive] = useState(false);
  const { wishlist, productWishList } = useContext(CartContext);

  useEffect(() => {
    setActive(wishlist.some((item) => item.id === id));
  }, [wishlist, id]);

  function handleClick() {
    productWishList(id, title, price);
  }

  return (
    <button
      className={`shelf__wishlist ${active ? "active" : ""}`}
      onClick={handleClick}
    ></button>
  );
}

export default WishListButton;
