import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductPage from "./pages/ProductPage/ProductPage";

import "./index.css";
import RatingsAndReviews from "./components/RatingsAndReviews/RatingsAndReviews";
import ReviewPage from "./pages/ReviewPage/ReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar/>
      <HomePage/>
    </>
  },
  {
    path: "/about",
    element: <>
      <Navbar/>
      <AboutPage/>
    </>
  },
  {
    path: "/contact",
    element: <>
      <Navbar/>
      <ContactPage/>
    </>
  },
  {
    path: "/product/:id",
    element: <>
      <Navbar/>
      <ProductPage/>
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