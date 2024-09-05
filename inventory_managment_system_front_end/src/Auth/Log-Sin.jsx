import Login from "./Login";
import React, { useState } from "react";
import Signup from "./Signup";

const Log_Sin = () => {
  const [isLogin, setIsLogin] = useState(true);  

  return (
    <>
     <center>
     {isLogin ? <Login /> : <Signup />}
      <button 
        onClick={() => setIsLogin(!isLogin)}  
        className="flex justify-center mt-4 px-4 py-2 bg-blue-600 text-white rounded justify-items-center"
      >
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
     </center>
    </>
  );
};

export default Log_Sin;
