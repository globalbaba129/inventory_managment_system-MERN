import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logut = () => {
  const navigate = useNavigate();

  const logoutAuth = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      localStorage.removeItem("token");  // Remove token
      navigate('/Log_Sin', { replace: true });  // Redirect to login
    } else {
      navigate('/index');  // Redirect back to dashboard if they cancel
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      logoutAuth();  // Ensure this only runs after the component mounts
    }, 0);

    return () => clearTimeout(timer);  // Cleanup the timer if component unmounts
  }, []);  // Empty dependency array ensures this runs only once

  return null;  // No need to render anything
};

export default Logut;
