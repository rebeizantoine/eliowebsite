import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";

// Layouts (Header + Footer handled inside Layout)
import Layout from "./Components/Layout/Layout";

// Light/frequently-used components (normal import)
import Furniture from "./Components/Furniture";
import Whychoose from "./Components/Whychoose";
import Designers from "./Components/Designers";
import Single from "./Components/Single";
import Alsolike from "./Components/Alsolike";
import AboutUs from "./Components/Whatwedo";
import Testingtally from "./Components/testingtally";
import Contactus from "./Components/Contactus";
import NotFound from "./Components/Notfound";
import AdminLogin from "./Components/Adminlogin";
import ProtectedRoute from "./Components/ProtectedRoute";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import "./App.css";

// Simple spinner fallback
const Spinner = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
);

// Lazy-loaded heavy pages
const HomeLayout = lazy(() => import("./Components/Layout/HomeLayout"));
const SinglePage = lazy(() => import("./Components/pages/SinglePage"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const CollectionSingle = lazy(() => import("./Components/CollectionSingle"));
const Collections = lazy(() => import("./Components/Collections"));
const Checkout = lazy(() => import("./Components/Checkout"));
const PurchasePage = lazy(() => import("./Components/PurchasePage"));
const ThankyouPage = lazy(() => import("./Components/ThankyouPage"));
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomeLayout />
                </Suspense>
              }
            />

            {/* Artworks */}
            <Route
              path="/artworks"
              element={
                <Layout>
                  <Furniture />
                </Layout>
              }
            />

            {/* Checkout / Purchase */}
            <Route
              path="/checkout"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <Checkout />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/purchase"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <PurchasePage />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/thankyou"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <ThankyouPage />
                  </Layout>
                </Suspense>
              }
            />

            {/* Collections */}
            <Route
              path="/collection"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <Collections />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/collection/:collectionName"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <CollectionSingle />
                  </Layout>
                </Suspense>
              }
            />

            {/* Single artworks */}
            <Route
              path="/single"
              element={
                <Layout>
                  <Single />
                  <Alsolike />
                  <Designers />
                </Layout>
              }
            />
            <Route
              path="/single/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <SinglePage />
                </Suspense>
              }
            />

            {/* About / What we do */}
            <Route
              path="/whatwedo"
              element={
                <Layout>
                  <AboutUs />
                </Layout>
              }
            />
            {/* <Route
              path="/abouttrial"
              element={
                <Suspense fallback={<Spinner />}>
                  <Layout>
                    <AboutUsTrial />
                  </Layout>
                </Suspense>
              }
            /> */}

            {/* Other sections */}
            <Route
              path="/testing2"
              element={
                <Layout>
                  <Whychoose />
                </Layout>
              }
            />
            <Route
              path="/testing5"
              element={
                <Layout>
                  <Alsolike />
                  <Whychoose />
                  <Designers />
                </Layout>
              }
            />
            <Route
              path="/testing6"
              element={
                <Layout>
                  <AboutUs />
                </Layout>
              }
            />
            <Route
              path="/testing7"
              element={
                <Layout>
                  <Testingtally />
                </Layout>
              }
            />

            {/* Contact / Admin */}
            <Route
              path="/contactus"
              element={
                <Layout>
                  <Contactus />
                </Layout>
              }
            />
            <Route
              path="/admin"
              element={
                <Layout>
                  <AdminLogin />
                </Layout>
              }
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<Spinner />}>
                  <ProtectedRoute component={Dashboard} />
                </Suspense>
              }
            />

            {/* Catch-all 404 */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
