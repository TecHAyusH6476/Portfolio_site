import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Manikumar Perla" leadText="I am a freelancer from India" />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
