import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "./Components/Testing";
import Hero1 from "./Components/Hero1";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import About from "./Components/About";
import Footer from "./Components/Footer";
import SocialIcons from "./Components/SocialIcons";
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

function App() {
  return (
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
                <Section2 />
                <Categories />
                <About />
                <Whychoose />
                <Designers />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/steelwork"
            element={
              <>
                <Header />
                <Furniture />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/testing2"
            element={
              <>
                <Header />
                <Whychoose />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/collection"
            element={
              <>
                <Header />
                <Collections />
                <Footer />
              </>
            }
          ></Route>
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
          ></Route>
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
          ></Route>
          <Route
            path="/testing6"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/whatwedo"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/nigger"
            element={
              <>
                <Header />
                <CollectionSingle />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/testing7"
            element={
              <>
                <Header />
                <Testingtally />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
