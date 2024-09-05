import React from "react";

const Add_Category = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-2xl transform perspective-1000 transition hover:scale-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add Category</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="categoryName" className="block text-lg font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter category name"
              required
            />
          </div>

          <div>
            <label htmlFor="categoryDescription" className="block text-lg font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="categoryDescription"
              name="categoryDescription"
              rows="3"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter category description"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-lg font-medium text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:translate-y-1"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_Category;



