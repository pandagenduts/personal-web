import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/modal";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

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

  // console.log(deviceView);

  return (
    <>
      <div className="flex justify-between bg-primaryBlue min-h-[85px] items-center">
        <button onClick={showModalHandler}>Back</button>
        <div className="hidden md:flex md:gap-4">
          <button
            className={`hidden p-4 border-none bg-white duration-150 hover:bg-opacity-30 cursor-pointer lg:inline-block rounded-md ${
              deviceView === "DESKTOP" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickDesktop}
          >
            <FaDesktop />
          </button>
          <button
            className={`p-4 border-none bg-white duration-150 rounded-md hover:bg-opacity-30 cursor-pointer ${
              deviceView === "TABLET" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickTablet}
          >
            <FaTabletAlt />
          </button>
          <button
            className={`p-4 border-none bg-white duration-150 rounded-md hover:bg-opacity-30 cursor-pointer ${
              deviceView === "MOBILE" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickMobile}
          >
            <FaMobileAlt />
          </button>
        </div>
        <a href="#">Visit Site</a>
      </div>
      <div
        id="modal-iframe-wrapper"
        className="w-full h-[90%] overflow-hidden duration-150"
      >
        <iframe
          src="https://pandagenduts-space-tourism-2.netlify.app/"
          frameborder="0"
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
};

export default IFrame;
