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
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: "lorem ipsum dolor sit amet",
    techUsed: ["WordPress", "Elementor", "Custom HTML CSS JS"],
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
  {
    title: "Luxe",
    imageCover: Luxe,
    projectURL: "https://zhongxin-sg.com/en/",
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
