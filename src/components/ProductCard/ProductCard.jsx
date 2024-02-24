import React from "react";
import Card from "./Card";
import drgn from "../../assets/dragon-fruit.jpg";
import fiddle from "../../assets/fiddle.jpeg";
import spinach from "../../assets/spinach.jpg";
import carrot from "../../assets/carrot.jpg";
import cucumber from "../../assets/cucumber.webp";
import capsicum from "../../assets/capsicum.png";
import "./product.css";

const ProductCard = () => {
  return (
    <section>
      <div className=" text-center">
        <div className=" productContainer">
          <div className="">
            <Card img={drgn} fruitName="Dragon fruit" />
          </div>
          <div className="">
            <Card img={fiddle} fruitName="Fiddlehead Fern" />
          </div>
          <div className="">
            <Card img={spinach} fruitName="Spinach" />
          </div>
          <div className="">
            <Card img={carrot} fruitName="Carrot" />
          </div>
          <div className="">
            <Card img={capsicum} fruitName="Capsicum" />
          </div>
          <div className="">
            <Card img={cucumber} fruitName="Cucumber" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
