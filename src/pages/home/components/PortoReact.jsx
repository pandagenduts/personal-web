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
    projectURL: "https://google.com",
    description: "Luxe ipsum dolor sit amet",
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
  {
    title: "Brands io",
    imageCover: BrandsIo,
    projectURL: "https://legacy.devchallenges.io/",
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
    </>
  );
};

export default PortoReact;
