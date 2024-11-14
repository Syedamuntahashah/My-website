import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <div>
<Navbar />
<Hero />
<About />
<Cards />
    </div>
  );
}
