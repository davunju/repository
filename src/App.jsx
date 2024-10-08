// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Home from "./Components/Home/Home";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Courts from "./Components/Courts/Courts";
import News from "./Components/News/News";

const App = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover bg-fixed bg-slate-100">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="" title="Latest News" />
      </div>
      <News />
      <div className="container">
        <Title
          subTitle="Judiciary of Tanzania"
          title="Organizational Structure"
        />
        <Home />
        <div className="container">
          <Title subTitle="Judiciary of Tanzania" title="LINKS" />
          <Courts />
          <About />
        </div>
      </div>
    </div>
  );
};

export default App;
