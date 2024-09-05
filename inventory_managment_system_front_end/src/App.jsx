import "./App.css";
import AddUser from "./Dashboard/pages/users/AddUser";
import Add_Category from "./Dashboard/pages/catagories/Add_Category";
import Add_Order from "./Dashboard/pages/Order/Add_Order";
import Add_Products from "./Dashboard/pages/products/Add_Product";
import Index from "./Dashboard";
import Layout from "./Dashboard/Layout";
import Log_Sin from "./Auth/Log-Sin";
import Logut from "./Dashboard/Logut";
import ManageCategories from "./Dashboard/pages/catagories/ManageCategories";
import ManageOrders from "./Dashboard/pages/Order/ManageOrders";
import ManageProduct from "./Dashboard/pages/products/ManageProduct";
import ManageUsers from "./Dashboard/pages/users/ManageUsers";
import Profile from "./Dashboard/pages/settings/Profile";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Add the import statement for Index

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* //login /Register Routes */}
        <Route path="/" element={<Navigate to="/Log_Sin" />} />
        <Route path="/Log_Sin" element={<Log_Sin />} />

        {/* //Admin panel Routes */}
        <Route element={<Layout />}>
          <Route path="/index" element={<Index />} /> {/* Use the imported Index component */}
          <Route path="/Logut" element={<Logut />} />
          {/* //Products Routes */}
          <Route path="/Add_Products" element={<Add_Products />} />
          <Route path="/ManageProduct" element={<ManageProduct />} />
          {/* //categories Routes */}
          <Route path="/Add_Category" element={<Add_Category />} />
          <Route path="/ManageCategories" element={<ManageCategories />} />
          {/* //Users Routes */}
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/ManageUsers" element={<ManageUsers />} />
          {/* //Orders Routes */}
          <Route path="/Add_Order" element={<Add_Order />} />
          <Route path="/ManageOrders" element={<ManageOrders />} />
          {/* //Settings Routes */}
          
          <Route path="/Profile" element={<Profile />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
