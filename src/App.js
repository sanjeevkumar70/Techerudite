import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/header/Navbar";
import About from "./components/main/About";
import Mission from "./components/main/Mission";
import Vision from "./components/main/Vision";
import Expertise from "./components/main/Expertise";
import Achievement from "./components/main/Achievement";
import Contact from "./components/main/Contact";
import Client from "./components/main/Client";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/main/Testimonial";
import Whatwedo from "./components/main/Whatwedo";
import NavbarContent from "./components/header/NavbarContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarContent/>
      <About />
      <Mission />
      <Vision />
      <Expertise />
      <Whatwedo />
      <Achievement />
      <Testimonial />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
