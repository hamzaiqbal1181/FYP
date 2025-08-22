import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import BestPlacesPage from "./pages/BestPlacesPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

// Feature Components
import SearchForm from "./components/SearchForm";
import SearchHistory from "./components/SearchHistory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Main layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="places" element={<PlacesRoute />} />
          <Route path="bestplacespage" element={<BestPlacesPage />} />
          <Route path="about" element={<About />} />
          <Route path="search-form" element={<SearchForm />} />
          <Route path="search-history" element={<SearchHistory />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
