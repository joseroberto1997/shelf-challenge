import { createContext, useEffect, useState } from "react";
import {
  CartContextProps,
  CartProviderProps,
  WishListButtonProps,
} from "../typings";

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [wishlist, setWishlist] = useState<WishListButtonProps[]>(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function productWishList(id: number, title: string, price: number) {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some((item) => item.id === id);
      if (itemExists) {
        return prevWishlist.filter((item) => item.id !== id);
      } else {
        const newWishlistItem = { id, title, price, active: true };
        return [...prevWishlist, newWishlistItem];
      }
    });
  }

  return (
    <CartContext.Provider value={{ wishlist, productWishList }}>
      {children}
    </CartContext.Provider>
  );
};
