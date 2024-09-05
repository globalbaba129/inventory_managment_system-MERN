import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageProduct = () => {
  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: "$10.00", stock: "In Stock" },
    { id: 2, name: "Product 2", price: "$20.00", stock: "Out of Stock" },
    { id: 3, name: "Product 3", price: "$30.00", stock: "In Stock" },
    { id: 4, name: "Product 4", price: "$40.00", stock: "In Stock" },
    { id: 5, name: "Product 5", price: "$50.00", stock: "Out of Stock" },
    { id: 6, name: "Product 6", price: "$60.00", stock: "In Stock" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="p-4 text-left">Product Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4 flex space-x-2">
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  <FaEdit />
                </button>
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
