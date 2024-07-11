import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://api.github.com/users/octocat", {
        mode: "no-cors",
      });

      if (!response.ok) {
        console.log(response);
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

  return <div></div>;
}

export default App;
