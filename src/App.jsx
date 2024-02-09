import Body from "./components/Body";
import Header from "./components/Header/Header";
import About from "./pages/About";
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
      </Body>
    </>
  );
}

export default App;
