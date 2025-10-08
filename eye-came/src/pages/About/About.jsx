import React, { useState } from "react";
import "./About.css";
import ServiesHeader from "../../components/ServiesHeader/ServiesHeader";
import ServiesDetails from "../../components/ServiesDetails/ServiesDetails";
import ServiesItems from "../../components/ServiesItems/ServiesItems";

const About = () => {
  const [category, setCatgory] = useState("All");
  return (
    <div className="about-container">
      <h1 className="about-head">All Servies</h1>
      <div>
        <ServiesHeader category={category} setCatgory={setCatgory} />
        <ServiesItems category={category} setCatgory={setCatgory} />
      </div>
    </div>
  );
};

export default About;
