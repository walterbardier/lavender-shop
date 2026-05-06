import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/shop"
          element={
            <PageWrapper>
              <Shop />
            </PageWrapper>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PageWrapper>
              <ProductDetail />
            </PageWrapper>
          }
        />

        <Route
          path="/cart"
          element={
            <PageWrapper>
              <Cart />
            </PageWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}