import { ReactNode } from "react";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface WishListButtonProps {
  id: number;
  title: string;
  price: number;
}

export interface CartContextProps {
  wishlist: WishListButtonProps[];
  minicart: ProductProps[];
  productWishList: (id: number, title: string, price: number) => void;
  productMinicartList: (
    id: number,
    title: string,
    price: number,
    image: string
  ) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
