import "./App.css";
import Contact from "./screens/Contact";
import Education from "./screens/Education";
import Exp from "./screens/Experience";
import HomeHero from "./screens/HomeHero";
import NavBar from "./screens/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <Education />
      <Exp />
      <Contact />
    </>
  );
}

export default App;
