import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import SkillsSection from "./components/SkillsSection";
import RecommendationSection from "./components/RecommendationSection";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Manikumar Perla" leadText="I am a freelancer from India" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
