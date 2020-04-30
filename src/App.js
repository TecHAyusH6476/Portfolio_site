import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/write-a-recommendation"
          component={WriteRecommendation}
        />
        <Route exact path="/project/add" component={AddProject} />
        <Route exact path="/project/:id" component={ProjectPage} />
        <Route exact path="/blog/:id" component={BlogPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
