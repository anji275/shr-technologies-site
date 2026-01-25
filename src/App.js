import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Engagement from "./components/Engagement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Engagement />
      <Contact />
      <Footer />
    </div>
    </ErrorBoundary>
  );
}

export default App;