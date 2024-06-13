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
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/testing"
            element={
              <>
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
