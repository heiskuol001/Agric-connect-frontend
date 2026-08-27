
import { useState, useEffect } from "react";

const ProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3000/product/api/fetch",
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch products"
          );
        }

        setProducts(data.products || data);

        console.log("Products fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="min-h-screen w-full p-2 grid grid-cols-1 md:grid-cols-3 gap-2">

      {/* Products Section */}
      <div className="col-span-2 border border-gray-300 rounded-lg p-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            My Products
          </h2>

          {!loading && (
            <span className="text-sm text-gray-500">
              {products.length}{" "}
              {products.length === 1 ? "product" : "products"}
            </span>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-10">
            <p className="text-gray-500">
              Loading products...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex items-center justify-center py-10">
            <p className="text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="flex items-center justify-center py-10">
            <p className="text-gray-500">
              No products found
            </p>
          </div>
        )}

        {/* Products */}
        {!loading && !error && products.length > 0 && (
          <div className="w-full space-y-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-full flex items-center gap-4 border border-gray-200 rounded-lg p-3 hover:shadow-sm transition"
              >

                {/* Product Image */}
                <img
                  src={`http://localhost:3000/${product.image}`}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg shrink-0"
                />

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <p className="text-green-600 font-medium mt-1">
                    UGX{" "}
                    {Number(product.price).toLocaleString()}
                  </p>
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() =>
                    console.log("Delete:", product._id)
                  }
                  className="shrink-0 px-3 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notifications Section */}
      <div className="border border-gray-300 rounded-lg p-4">

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Notifications
        </h2>

        <div className="flex items-center justify-center py-10">
          <p className="text-gray-500">
            No new notifications
          </p>
        </div>

      </div>

    </div>
  );
};

export default ProductPanel;
