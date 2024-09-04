import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero1 from "./Components/Hero1";
import Section1 from "./Components/Section1";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Furniture from "./Components/Furniture";
import Whychoose from "./Components/Whychoose";
import Designers from "./Components/Designers";
import Single from "./Components/Single";
import Alsolike from "./Components/Alsolike";
import Categories from "./Components/Categories";
import Collections from "./Components/Collections";
import AboutUs from "./Components/Whatwedo";
import CollectionSingle from "./Components/CollectionSingle";
import Testingtally from "./Components/testingtally";
import Dashboard from "./Dashboard/Dashboard";
import SingleFetched from "./Components/SingleFetched";
import Contactus from "./Components/Contactus";
import { CartProvider } from "./Components/CartContext";
import Checkout from "./Components/Checkout";
import PurchasePage from "./Components/PurchasePage";
import ThankyouPage from "./Components/ThankyouPage";
import AdminLogin from "./Components/Adminlogin";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/Notfound";
import AboutUsTrial from "./Components/AboutTrial";

function App() {
  return (
    
    <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero1 />
                  <Section1 />
                  <Collections />
                  <About />
                  <Whychoose />
                  <Designers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/artworks"
              element={
                <>
                  <Header />
                  <Furniture />
                  <Footer />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                  <Footer />
                </>
              }
            />
            <Route
              path="/testing2"
              element={
                <>
                  <Header />
                  <Whychoose />
                  <Footer />
                </>
              }
            />
            <Route
              path="/collection/:collectionName"
              element={
                <>
                  <Header />
                  <CollectionSingle />
                  <Footer />
                </>
              }
            />
            <Route
              path="/collection"
              element={
                <>
                  <Header />
                  <Collections />
                  <Footer />
                </>
              }
            />
            <Route
              path="/single/:id"
              element={
                <>
                  <Header />
                  <SingleFetched />
                  <Alsolike />
                  <Designers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/single"
              element={
                <>
                  <Header />
                  <Single />
                  <Alsolike />
                  <Designers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/testing5"
              element={
                <>
                  <Header />
                  <Alsolike />
                  <Whychoose />
                  <Designers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/testing6"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/whatwedo"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/nigger"
              element={
                <>
                  <Header />
                  <CollectionSingle />
                  <Footer />
                </>
              }
            />
            <Route
              path="/testing7"
              element={
                <>
                  <Header />
                  <Testingtally />
                  <Footer />
                </>
              }
            />
            <Route
              path="/purchase"
              element={
                <>
                  <Header />
                  <PurchasePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contactus"
              element={
                <>
                  <Header />
                  <Contactus />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  <Header />
                  <AdminLogin />
                  <Footer />
                </>
              }
            />
            <Route
              path="/thankyou"
              element={
                <>
                  <Header />
                  <ThankyouPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute component={Dashboard} />}
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <NotFound />
                  <Footer />
                </>
              }
            />
            <Route
              path="/abouttrial"
              element={
                <>
                  <Header />
                  <AboutUsTrial />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
