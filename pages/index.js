import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import News from "../components/news/News";
import Dimensions from "../components/dimensions/Dimensions";
import WeAre from "../components/weAre/WeAre";
import Agents from "../components/agents/Agents";
import Maps from "../components/maps/Maps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Dimensions />
        <WeAre />
        <Agents />
        <Maps />
        <Footer />
      </main>
    </>
  );
}
