import React from "react";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import ProductCard from "./components/ProductCard/ProductCard";
import MidHero from "./components/mid/MidHero";
import CardDes from "./components/CardDescription/CardDes";
import Card3 from "./components/CardDescription/card3";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ProductCard />
      <MidHero />
      <CardDes />
      <Footer />
    </>
  );
};

export default App;
