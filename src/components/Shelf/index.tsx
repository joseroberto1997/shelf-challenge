import { useEffect, useState } from "react";

import ShelfItem from "../ShelfItem";

import "./style.scss";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Shelf() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=4"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="shelf">
      {products.map((product) => (
        <ShelfItem
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Shelf;
