import { useRef, useState } from "react";

import CartDrawer from "./components/CartDrawer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Storefront from "./components/Storefront";
import CartContextProvider from "./store/CartContext";
import ProductsContextProvider from "./store/ProductsContext";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const sortRef = useRef<HTMLUListElement>(null); // Sort menu toggling
  const filtersRef = useRef<HTMLDivElement>(null); // Filters menu toggling

  function openCartHandler(): void {
    setCartIsOpen(true);
  }

  function closeCartHandler(): void {
    setCartIsOpen(false);
  }

  return (
    <CartContextProvider>
      <header className="z-30 sticky top-0 bg-stone-50 flex justify-between items-center p-4">
        <Navbar onCartOpen={openCartHandler} />
      </header>
      <main className="m-6">
        <Modal open={cartIsOpen} onClose={closeCartHandler}>
          <CartDrawer onCartClose={closeCartHandler} />
        </Modal>
        <ProductsContextProvider>
          <Storefront sortRef={sortRef} filtersRef={filtersRef} />
        </ProductsContextProvider>
      </main>
    </CartContextProvider>
  );
}

export default App;
