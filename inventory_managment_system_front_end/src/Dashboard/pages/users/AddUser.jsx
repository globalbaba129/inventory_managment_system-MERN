import React from "react";

const AddUser = () => {
  // Example user data
  const users = [
    { id: 1, username: "john_doe", email: "john@example.com", role: "Admin" },
    { id: 2, username: "jane_doe", email: "jane@example.com", role: "User" },
    { id: 3, username: "sam_smith", email: "sam@example.com", role: "User" },
    { id: 4, username: "mary_jones", email: "mary@example.com", role: "Admin" },
    { id: 5, username: "michael_brown", email: "michael@example.com", role: "User" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registered Users</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="p-4 text-left">Username</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-4">{user.username}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4 flex space-x-2">
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
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

export default AddUser;
