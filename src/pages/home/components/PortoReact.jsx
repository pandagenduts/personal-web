import Luxe from "../../../assets/Luxe.png";
import BrandsIo from "../../../assets/brands-io.png";
import FurniShop from "../../../assets/furni-shop.png";
import SpaceTourism from "../../../assets/space-tourism.png";
import PortfolioCard from "./PortfolioCard";

const projectDatas = [
  {
    title: "Space Tourism",
    imageCover: SpaceTourism,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    description: "lorem ipsum dolor sit amet",
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
  {
    title: "Luxe",
    imageCover: Luxe,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    description: "Luxe ipsum dolor sit amet",
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
  {
    title: "Brands io",
    imageCover: BrandsIo,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    description: "Brands io ipsum dolor sit amet",
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
];

const PortoReact = () => {

  return (
    <>
      {projectDatas.map((item, index) => (
        <PortfolioCard key={index} itemData={item} />

      ))}
      {/* <div className="relative cursor-pointer overflow-hidden rounded-xl">
        <img src={Luxe} className="object-contain" />
        <div className="absolute left-0 top-0 z-10 flex flex-col h-full w-full items-center justify-center bg-slate-900 bg-opacity-0 opacity-0 duration-300 hover:bg-opacity-40 hover:opacity-100">
          <p className="text-white text-xl font-montserrat">LUXe</p>
          <button className="text-sm rounded-full bg-bluePrimary px-4 py-2 text-white">
            See Preview
          </button>
        </div>
      </div> */}
    </>
  );
};

export default PortoReact;
