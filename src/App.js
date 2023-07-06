import About from "./components/About";
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
    </div>
  );
}

export default App;
