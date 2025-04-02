import "./App.css";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Header from "./common/Header";
import About from "./pages/About";
import Single from "./pages/Single";
import Contact from "./pages/Contact";
import Customer from "./pages/Customer";
import Shop from "./pages/Shop";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Cart1 from "./pages/Cart1";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const login = useSelector((state) => state.Login?.user);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="single/:id" element={<Single />} />
          <Route path="customer" element={<Customer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:name" element={<Product />} />
          <Route
            path="cart"
            element={login ? <Cart1 /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={login ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
