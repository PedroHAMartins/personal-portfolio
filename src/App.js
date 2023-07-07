import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
