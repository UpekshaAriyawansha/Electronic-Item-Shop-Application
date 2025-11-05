import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import OurStore from "./pages/ourStore";
import Blog from "./pages/blog";
import CompareProduct from "./pages/compareProduct";
import Wishlist from "./pages/wishlist";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import RestPassword from "./pages/resetPassword";
import SingleBlog from "./pages/singleBlog";
import PrivacyPolicy from "./pages/privacyPolicy";
import ShippingPolicy from "./pages/shippingPolicy";
import RefundPolicy from "./pages/refundPolicy";
import TermsAndConditions from "./pages/termsAndConditions";
import SingleProduct from "./pages/singleProduct";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { PrivateRoutes } from "./routing/privateRoutes";
import { OpenRoutes } from "./routing/openRoutes";
import Orders from "./pages/orders";
import Profile from "./pages/profile";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="product" element={<OurStore/>}/>
        <Route path="product/:id" element={<SingleProduct/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blog/:id" element={<SingleBlog/>}/>
        <Route path="cart" element={<PrivateRoutes> <Cart/> </PrivateRoutes> }/>
        <Route path="my-orders" element={<PrivateRoutes> <Orders/> </PrivateRoutes> }/>
        <Route path="my-profile" element={<PrivateRoutes> <Profile/> </PrivateRoutes> }/>
        <Route path="checkout" element={<PrivateRoutes> <Checkout/> </PrivateRoutes> }/>
        <Route path="compare-product" element={<CompareProduct/>}/>
        <Route path="wishlist" element={<PrivateRoutes> <Wishlist/> </PrivateRoutes>}/>
        <Route path="login" element={ <OpenRoutes> <Login/> </OpenRoutes> }/>
        <Route path="register" element={<OpenRoutes> <Register/> </OpenRoutes> }/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="reset-password" element={<RestPassword/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="shipping-policy" element={<ShippingPolicy/>}/>
        <Route path="refund-policy" element={<RefundPolicy/>}/>
        <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>  
  );
};

export default App;
