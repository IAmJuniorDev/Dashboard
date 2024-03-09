import React, {  useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Workout from "./pages/workout";
import Account from "./pages/account";
import Coupon from "./pages/coupon";
import Clock from "./pages/clock";
import Countdown from "./pages/countdown";
import CoffeePOS from "./pages/coffeePOS";
import Dashboard from "./pages/dashboard";
import EcomLayout from "./pages/ecomLayout";
import EcomRegister from "./components/Ecom/EcomRegister";
import EcomLogin from "./components/Ecom/EcomLogin";
import EcomCart from "./components/Ecom/EcomCart";
import EcomProduct from "./components/Ecom/EcomProduct";
import EcomProductList from "./components/Ecom/EcomProductList";
import EcomSuccess from "./components/Ecom/EcomSuccess";
import MoreProject from "pages/moreProject";
import { useSelector } from "react-redux";
// Product adding
const App=()=>{
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  useEffect(() => {
    document.body.style.backgroundColor =
      location.pathname === "/" ? "var(--bg-color)" : "";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location]);
  return (
    <div className="App">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/coffeePOS" element={<CoffeePOS />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/more-project" element={<MoreProject />} />
            <Route path="/Ecom" element={<EcomLayout />} />
            <Route
              path="/Ecom/products/:category"
              element={<EcomProductList />}
            />
            <Route path="/Ecom/product/:_id" element={<EcomProduct />} />
            <Route path="/Ecom/cart" element={<EcomCart />} />
            <Route
              path="/Ecom/login"
              element={user ? <Navigate to="/Ecom" /> : <EcomLogin />}
            />
            <Route
              path="/Ecom/registration"
              element={user ? <Navigate to="/Ecom" /> : <EcomRegister />}
            />
            <Route path="/Ecom/success" element={<EcomSuccess />} />
          </Routes>
        </div>
    </div>
  );
}

const APP = ()=>{
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default APP;