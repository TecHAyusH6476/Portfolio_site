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
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Title
            name="Manikumar Perla"
            leadText="I am a freelancer from India"
          />
          <RecommendationSection />
          <SkillsSection />
          <ProjectSection />
          <About />
          <BlogSection />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/write-a-recommendation">
          <WriteRecommendation />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
