export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
