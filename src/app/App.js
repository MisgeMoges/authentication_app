import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import pages
import Security from "../pages/Security";
import Home from "../pages/Homepage";
import Contact from "../pages/Contact";

// import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Auth from "../components/auth";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../actions/LoginAction";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          dispatch(loginSuccess(resObject.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/security" element={<Security />} /> */}
        <Route
          path="/security"
          element={user ? <Security /> : <Navigate to="/auth" />}
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/security" /> : <Auth />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
