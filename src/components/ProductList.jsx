import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
