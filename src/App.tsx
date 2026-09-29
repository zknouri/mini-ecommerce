import Navbar from "./components/Navbar";
import Storefront from "./components/Storefront";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <header className="flex justify-between items-center p-4">
        <Navbar />
      </header>
      <main className="m-6">
        <Storefront />
      </main>
    </CartContextProvider>
  );
}

export default App;
