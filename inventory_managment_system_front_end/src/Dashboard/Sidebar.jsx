import React, { useState } from "react";
import { FaBox, FaChartBar, FaCog, FaSignOutAlt, FaTags, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(""); // State to track which dropdown is open

    const handleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-64 p-4 text-white bg-blue-950">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-lg font-bold">Inventory Management System</h1>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>

                <nav>
                    <Link to="/index" className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("dashboard")}>
                        <FaChartBar />
                        <span className="ml-3">Dashboard</span>
                    </Link>

                    <div>
                        <Link className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("products")}>
                            <FaBox />
                            <span className="ml-3">Products</span>
                        </Link>
                        {openDropdown === "products" && (
                            <div className="ml-6 mt-2">
                                <Link to="/Add_Products" className="block p-2 text-sm hover:bg-gray-600">Add Product</Link>
                                <Link to="/ManageProduct" className="block p-2 text-sm hover:bg-gray-600">Manage Product</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <Link className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("categories")}>
                            <FaTags />
                            <span className="ml-3">Categories</span>
                        </Link>
                        {openDropdown === "categories" && (
                            <div className="ml-6 mt-2">
                                <Link to="/Add_Category" className="block p-2 text-sm hover:bg-gray-600">Add Category</Link>
                                <Link to="/ManageCategories" className="block p-2 text-sm hover:bg-gray-600">Manage Categories</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <Link className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("users")}>
                            <FaUsers />
                            <span className="ml-3">Users</span>
                        </Link>
                        {openDropdown === "users" && (
                            <div className="ml-6 mt-2">
                                <Link to="/AddUser" className="block p-2 text-sm hover:bg-gray-600">See Users</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <Link className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("orders")}>
                            <FaBox />
                            <span className="ml-3">Orders</span>
                        </Link>
                        {openDropdown === "orders" && (
                            <div className="ml-6 mt-2">
                                <Link to="/ManageOrders" className="block p-2 text-sm hover:bg-gray-600">Manage Orders</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <Link className="flex items-center p-3 rounded-md hover:bg-blue-600" onClick={() => handleDropdown("settings")}>
                            <FaCog />
                            <span className="ml-3">Settings</span>
                        </Link>
                        {openDropdown === "settings" && (
                            <div className="ml-6 mt-2">
                                <Link to="/Profile" className="block p-2 text-sm hover:bg-gray-600">Profile</Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <Link to="/Logout" className="flex items-center p-3 rounded-md hover:bg-blue-600">
                            <FaSignOutAlt />
                            <span className="ml-3">Logout</span>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64 p-4 overflow-y-auto">
                {/* Body content goes here */}
            </div>
        </div>
    );
};

export default Sidebar;
