import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Test />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
