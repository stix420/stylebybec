import { Component, createSignal } from "solid-js";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: Component = () => {
  const [activeSection, setActiveSection] = createSignal("about");

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
