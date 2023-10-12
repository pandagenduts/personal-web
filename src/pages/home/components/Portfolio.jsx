import { useState } from "react";
import PortoReact from "./PortoReact";
import PortoWP from "./PortoWP";
import PortoHTML from "./PortoHTML";

const Portfolio = () => {
  const [cardCategory, setCardCategory] = useState("REACT");

  const buttonClasses = "duration-150 hover:text-bluePrimary";

  return (
    <section className="container w-full px-4">
      <h2 className="text-center">Portfolio</h2>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setCardCategory("REACT")}
          className={`${buttonClasses} ${
            cardCategory === "REACT" ? "text-bluePrimary" : ""
          }`}
        >
          React & Next JS
        </button>
        <button
          onClick={() => setCardCategory("WORDPRESS")}
          className={`${buttonClasses} ${
            cardCategory === "WORDPRESS" ? "text-bluePrimary" : ""
          }`}
        >
          WordPress
        </button>
        <button
          onClick={() => setCardCategory("HTML")}
          className={`${buttonClasses} ${
            cardCategory === "HTML" ? "text-bluePrimary" : ""
          }`}
        >
          HTML CSS JS
        </button>
      </div>
      <div className="grid h-auto  grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 lg:grid-cols-3 ">
        {cardCategory === "REACT" && <PortoReact />}
        {cardCategory === "WORDPRESS" && <PortoWP />}
        {cardCategory === "HTML" && <PortoHTML />}
      </div>
    </section>
  );
};

export default Portfolio;
