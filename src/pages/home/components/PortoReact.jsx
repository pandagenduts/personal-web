import Luxe from "../../../assets/Luxe.png";
import BrandsIo from "../../../assets/brands-io.png";
import FurniShop from "../../../assets/furni-shop.png";
import SpaceTourism from "../../../assets/space-tourism.png";

const projectDatas = [
  {
    title: "Space Tourism",
    imageCover: SpaceTourism,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    description: "lorem ipsum dolor sit amet",
    techExplanation: "wordpress elementor custom HTML CSS JS",
  },
];

const PortoReact = () => {
  const cardClasses =
    "min-h-[400px] rounded-xl overflow-hidden relative cursor-pointer";
  const cardOverlayClasses = "opacity";

  return (
    <>
      <div className={`${cardClasses} bg-slate-500`}>
        <img src={Luxe} className="h-full w-full object-cover" />
        <div
          className={`${cardOverlayClasses} absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-0 opacity-0 duration-300 hover:bg-opacity-40 hover:opacity-100 `}
        >
          <button className="rounded-full bg-bluePrimary px-4 py-2 text-white">
            Space Tourism
          </button>
        </div>
      </div>
      <div className={`${cardClasses} bg-slate-700`}></div>
      <div className={`${cardClasses} bg-slate-900`}></div>
    </>
  );
};

export default PortoReact;
