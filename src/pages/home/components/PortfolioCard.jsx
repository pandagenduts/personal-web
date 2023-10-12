const PortfolioCard = () => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-xl">
      <img src={Luxe} className="object-contain" />
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-0 opacity-0 duration-300 hover:bg-opacity-40 hover:opacity-100">
        <button className="rounded-full bg-bluePrimary px-4 py-2 text-white">
          Space Tourism
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
