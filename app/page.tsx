import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Works />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
