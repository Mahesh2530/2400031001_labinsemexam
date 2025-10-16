export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => alert(`Added ${product.name} to cart!`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}