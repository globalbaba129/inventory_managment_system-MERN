import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Profile</h1>
      <div className="p-8 max-w-4xl mx-auto bg-white shadow-2xl rounded-lg border border-gray-200">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-3xl font-bold mt-4">John Doe</h2>
          <p className="text-gray-600 text-lg mb-4">Full Stack Developer</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> +1234567890</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">About Me</h3>
          <p className="text-gray-700">
            I am a passionate full stack developer with 5 years of experience in building scalable web applications. 
            I specialize in React, Node.js, and have a strong background in database management and cloud services.
          </p>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium">
            <FaArrowLeft className="mr-2" />
            <span>Previous</span>
          </button>
          <div className="grid grid-cols-3 gap-8 w-full">
            <div className="text-center bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Profile</h3>
              <p className="text-gray-700">Update your profile information</p>
            </div>
            <div className="text-center bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-700">Manage your account security settings</p>
            </div>
            <div className="text-center bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Notifications</h3>
              <p className="text-gray-700">Configure notification preferences</p>
            </div>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium">
            <span className="mr-2">Next</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
