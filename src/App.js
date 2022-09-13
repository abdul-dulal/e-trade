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
import Register from "./component/pages/register/Register";
import Contact from "./component/pages/shop/contact/Contact";
import Shop from "./component/pages/shop/Shop";
import Singlevendor from "./component/pages/vendor/SingleVendor";
import Wishlist from "./component/pages/wishlist/Wishlist";
import WishlistItemDetails from "./component/pages/wishlist/WishlistItemDetails";
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
          <Route
            path="/product-details/:id"
            element={<WishlistItemDetails />}
          />
          <Route path="loginregister" element={<LoginRegister />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </backgroundContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
