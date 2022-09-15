import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/navbar/Navbar";
import Cart from "./component/pages/cart/Cart";
import Category from "./component/pages/category/Category";
import Footer from "./component/pages/footer/Footer";
import Home from "./component/pages/home/Home";
import Login from "./component/pages/login/Login";
import LoginRegister from "./component/pages/LoginRegister/LoginRegister";
import Myaccount from "./component/pages/myAccount/Myaccount.";
import Register from "./component/pages/register/Register";
import Contact from "./component/pages/shop/contact/Contact";
import Shop from "./component/pages/shop/Shop";
import Singlevendor from "./component/pages/vendor/SingleVendor";
import Wishlist from "./component/pages/wishlist/Wishlist";
import WishlistItemDetails from "./component/pages/wishlist/WishlistItemDetails";
import Order from "./component/pages/myAccount/Order";
import Dashboard from "./component/pages/myAccount/Dashboard";
import Address from "./component/pages/myAccount/Address";
import Editpassword from "./component/pages/myAccount/Editdpassword";
import Accountdetails from "./component/pages/myAccount/Accountdeatils";
import Vendor from "./component/pages/vendorAccount/Vendor";
import VendorDashboard from "./component/pages/vendorAccount/VendorDashboard";
import VendorProducts from "./component/pages/vendorAccount/VendorProducts";
import Setting from "./component/pages/vendorAccount/Setting";
import Checkout from "./component/pages/checkout/Checkout";
export const backgroundContext = React.createContext();
function App() {
  const [popup, setPopup] = useState(false);
  return (
    <div>
      <Navbar />
      <backgroundContext.Provider value={[popup, setPopup]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Singlevendor />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />

          <Route
            path="/product-details/:id"
            element={<WishlistItemDetails />}
          />
          <Route path="loginregister" element={<LoginRegister />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="/my-account" element={<Myaccount />}>
            <Route index element={<Dashboard />} />
            <Route path="order" element={<Order />} />
            <Route path="address" element={<Address />} />
            <Route path="account-details" element={<Accountdetails />} />
            <Route path="edit-password" element={<Editpassword />} />
          </Route>
          <Route path="/vendor" element={<Vendor />}>
            <Route index element={<VendorDashboard />} />
            <Route path="products" element={<VendorProducts />} />
            <Route path="settings" element={<Setting />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </backgroundContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
