import React, { useState } from "react";

const ManageOrders = () => {
  const [showDelivered, setShowDelivered] = useState(false);

  const orders = [
    { id: 1, customer: "John Doe", date: "2024-09-01", status: "Shipped" },
    { id: 2, customer: "Jane Smith", date: "2024-09-02", status: "Processing" },
    { id: 3, customer: "Alice Johnson", date: "2024-09-03", status: "Delivered" },
    { id: 4, customer: "Bob Brown", date: "2024-09-04", status: "Canceled" },
    { id: 5, customer: "Carol White", date: "2024-09-05", status: "Shipped" },
    { id: 6, customer: "David Green", date: "2024-09-06", status: "Processing" },
  ];

  const filteredOrders = showDelivered
    ? orders.filter(order => order.status === "Delivered")
    : orders;

  const handleToggle = () => {
    setShowDelivered(!showDelivered);
  };

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log(`Update order with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete order with ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>
      <div className="mb-4 flex items-center">
        <button
          onClick={handleToggle}
          className={`p-2 rounded-md ${showDelivered ? 'bg-green-500 text-white' :  'show all orders bg-blue-500 text-white'} hover:bg-opacity-80`}
        >
          {showDelivered ? "Showing Delivered Orders" : "Show Delivered Orders"}
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleUpdate(order.id)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
