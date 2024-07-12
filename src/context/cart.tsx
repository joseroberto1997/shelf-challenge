import { createContext, useEffect, useState } from "react";
import {
  CartContextProps,
  CartProviderProps,
  ProductProps,
  WishListButtonProps,
} from "../typings";

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [wishlist, setWishlist] = useState<WishListButtonProps[]>(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const [minicart, setMinicart] = useState<ProductProps[]>(() => {
    const storedMinicart = localStorage.getItem("minicart");
    return storedMinicart ? JSON.parse(storedMinicart) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("minicart", JSON.stringify(minicart));
  }, [minicart]);

  function productWishList(id: number, title: string, price: number) {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some((item) => item.id === id);
      if (itemExists) {
        return prevWishlist.filter((item) => item.id !== id);
      } else {
        const newWishlistItem = { id, title, price };
        return [...prevWishlist, newWishlistItem];
      }
    });
  }

  function productMinicartList(
    id: number,
    title: string,
    price: number,
    image: string
  ) {
    setMinicart((prevMinicartlist) => {
      const itemExists = prevMinicartlist.some((item) => item.id === id);
      if (itemExists) {
        return prevMinicartlist.filter((item) => item.id !== id);
      } else {
        const newMinicartlistItem = { id, title, price, image };
        return [...prevMinicartlist, newMinicartlistItem];
      }
    });
  }

  return (
    <CartContext.Provider
      value={{ wishlist, minicart, productWishList, productMinicartList }}
    >
      {children}
    </CartContext.Provider>
  );
};
