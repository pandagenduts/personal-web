import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/modal";
import { FaDesktop, FaTabletAlt, FaMobileAlt, FaLongArrowAltLeft } from "react-icons/fa";
import HyperLink from "../../../layouts/HyperLink";

const IFrame = ({ handleDeviceWidth, deviceView }) => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const handleClickDesktop = () => {
    handleDeviceWidth("DESKTOP");
  };

  const handleClickTablet = () => {
    handleDeviceWidth("TABLET");
  };

  const handleClickMobile = () => {
    handleDeviceWidth("MOBILE");
  };

  return (
    <>
      <div className="bg-bluePrimary flex items-center justify-between p-4">
        <button className="flex gap-2 items-center border-none bg-transparent text-white font-medium" onClick={showModalHandler}><FaLongArrowAltLeft />Back</button>
        <div className="hidden md:flex md:gap-6">
          <button
            className={`hidden h-9 w-9 cursor-pointer items-center justify-center rounded-md border-none bg-white duration-150 hover:bg-opacity-30 lg:flex ${
              deviceView === "DESKTOP" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickDesktop}
          >
            <FaDesktop className="h-4 w-4 text-white" />
          </button>
          <button
            className={`flex h-9 w-9 cursor-pointer  items-center justify-center rounded-md border-none bg-white duration-150 hover:bg-opacity-30 ${
              deviceView === "TABLET" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickTablet}
          >
            <FaTabletAlt className="h-4 w-4 text-white" />
          </button>
          <button
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-none bg-white duration-150 hover:bg-opacity-30 ${
              deviceView === "MOBILE" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickMobile}
          >
            <FaMobileAlt className="h-4 w-4 text-white" />
          </button>
        </div>
        <HyperLink
          href="#"
          className="bg-redSecondary rounded-md px-3 py-2 text-sm text-white no-underline"
          newTab
        >
          Visit Site
        </HyperLink>
      </div>
      <div
        id="modal-iframe-wrapper"
        className="h-[85%] w-full overflow-hidden duration-150"
      >
        <iframe
          src="https://pandagenduts-space-tourism-2.netlify.app/"
          frameborder="0"
          className="h-full w-full"
        ></iframe>
      </div>
    </>
  );
};

export default IFrame;
