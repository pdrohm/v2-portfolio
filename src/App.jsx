import Body from "./components/Body";
import Email from "./components/Email/Email";
import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import { Work } from "./pages/Work";
function App() {
  return (
    <>
      <Header />
      <Body>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </Body>
      <Socials />
      <Email />
    </>
  );
}

export default App;
