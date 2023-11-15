import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";

import "./index.css";
import RatingsAndReviews from "./components/RatingsAndReviews/RatingsAndReviews";
import ReviewPage from "./pages/ReviewPage/ReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar/>
      <Home/>
    </>
  },
  {
    path: "/about",
    element: <>
      <Navbar/>
      <About/>
    </>
  },
  {
    path: "/contact",
    element: <>
      <Navbar/>
      <Contact/>
    </>
  },
  {
    path: "/product/:id",
    element: <>
      <Navbar/>
      <Product/>
    </>
  },
  {
    path: "/product/:id/review",
    element: <>
      <Navbar/>
      <ReviewPage/>
    </>
  }
]);

export default router;