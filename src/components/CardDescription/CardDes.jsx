import React from "react";
import "./CardDes.css";
import Card2 from "./Card2";

const CardDes = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default CardDes;
