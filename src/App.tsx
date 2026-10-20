import { useRef, useState } from "react";

import CartDrawer from "./components/CartDrawer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Storefront from "./components/Storefront";
import CartContextProvider from "./store/CartContext";
import ProductsContextProvider from "./store/ProductsContext";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  function openCartHandler(): void {
    setCartIsOpen(true);
  }

  function closeCartHandler(): void {
    setCartIsOpen(false);
  }

  return (
    <CartContextProvider>
      <header className="z-30 sticky top-0 bg-stone-50 flex justify-between items-center p-4 xl:px-10 2xl:px-46 3xl:px-56 4xl:px-76">
        <Navbar onCartOpen={openCartHandler} />
      </header>
      <main className="m-6">
        <Modal open={cartIsOpen} onClose={closeCartHandler}>
          <CartDrawer onCartClose={closeCartHandler} />
        </Modal>
        <ProductsContextProvider>
          <Storefront/>
        </ProductsContextProvider>
      </main>
    </CartContextProvider>
  );
}

export default App;
