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
  productWishList: (id: number, title: string, price: number) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
