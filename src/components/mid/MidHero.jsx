import React from "react";
import "./Midhero.css";
import hero from "../../assets/midhero.jpg";

const MidHero = () => {
  return (
    <section>
      <div
        className="mid-hero"
        style={{
          backgroundImage: `url(${hero})`,
          height: "50vh",
        }}
      >
        <div className="mid-hero-content">
          <div className="mid-hero-title">
            <h1>FRESH & NON-GMO PRODUCTS</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto
            quibusdam aliquid molestias dolor similique iste ab, tempora vitae
            exercitationem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidHero;
