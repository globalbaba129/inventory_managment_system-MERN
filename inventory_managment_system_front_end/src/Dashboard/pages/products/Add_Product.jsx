import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: "Product description goes here.",
  image: "https://via.placeholder.com/150",
}));

const PRODUCTS_PER_PAGE = 6;

const Add_Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add to Cart Page</h1>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="relative">
          <FaShoppingCart className="text-2xl text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
            <div className="absolute top-2 right-2">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                <FaShoppingCart className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Add_Products;
