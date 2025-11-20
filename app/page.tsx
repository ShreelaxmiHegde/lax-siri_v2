import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Works />
      <Experience />
      <Contact />
    </main>
  );
}
