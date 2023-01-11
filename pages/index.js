import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Footer />
      </main>
    </>
  );
}
