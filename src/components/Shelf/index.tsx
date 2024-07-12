import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

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
        "https://fakestoreapi.com/products/category/electronics"
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
      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          rewind: true,
          width: 1600,
          gap: "128px",
          perPage: 4,
          breakpoints: {
            1280: {
              perPage: 3,
              width: "1224px",
            },
            992: {
              perPage: 2,
              gap: "64px",
              width: "612px",
            },
            576: {
              perPage: 1,
              gap: "16px",
              width: "320px",
            },
          },
        }}
      >
        <SplideTrack>
          {products.map((product) => (
            <SplideSlide key={product.id}>
              <ShelfItem
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}

export default Shelf;

<Splide hasTrack={false} aria-label="...">
  <SplideTrack>
    <SplideSlide>...</SplideSlide>
  </SplideTrack>

  <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>;
