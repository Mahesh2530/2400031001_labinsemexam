import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  return (
    <div className="store-container">
      <h1 className="store-title">🛍 My Store</h1>
      <ProductList />
    </div>
  );
}
