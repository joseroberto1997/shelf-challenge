import Shelf from "./components/Shelf";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <div className="container">
      <CartProvider>
        <Shelf />
      </CartProvider>
    </div>
  );
}

export default App;
