import React from "react";

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home Appliances" },
  { id: 4, name: "Books" },
  { id: 5, name: "Sports" },
  { id: 6, name: "Toys" },
];

const ManageCategories = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Categories</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left text-gray-600">ID</th>
            <th className="py-2 px-4 text-left text-gray-600">Category Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td className="py-2 px-4">{category.id}</td>
              <td className="py-2 px-4">{category.name}</td>
              <td className="py-2 px-4">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategories;
