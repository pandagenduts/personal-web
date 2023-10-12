import { useState } from "react";
import PortoReact from "./PortoReact";
import PortoWP from "./PortoWP";
import PortoHTML from "./PortoHTML";

const Portfolio = () => {
  const [cardCategory, setCardCategory] = useState("REACT");

  return (
    <section className="container w-full px-4">
      <h2 className="text-center">Portfolio</h2>
      <div className="flex justify-center gap-4">
        <button onClick={() => setCardCategory('REACT')}>React & Next JS</button>
        <button onClick={() => setCardCategory('WORDPRESS')}>WordPress</button>
        <button onClick={() => setCardCategory('HTML')}>HTML CSS JS</button>
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {cardCategory === 'REACT' && <PortoReact />}
        {cardCategory === 'WORDPRESS' && <PortoWP />}
        {cardCategory === 'HTML' && <PortoHTML />}
      </div>
    </section>
  );
};

export default Portfolio;
