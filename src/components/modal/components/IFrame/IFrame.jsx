import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/modal";
import {
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaLongArrowAltLeft,
} from "react-icons/fa";
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

  const buttonClasses = 'h-9 w-9 cursor-pointer items-center justify-center rounded-md border-none bg-white duration-150 hover:bg-opacity-30'

  return (
    <>
      <div className={`bg-bluePrimary flex items-center ${deviceView === 'MOBILE' ? 'justify-center' : 'justify-between'} px-6 py-4`}>
        <button
          className={`${deviceView === 'MOBILE' ? 'hidden' : ''} flex cursor-pointer items-center gap-2 border-none bg-transparent font-medium text-white text-sm`}
          onClick={showModalHandler}
        >
          <FaLongArrowAltLeft />
          Back
        </button>
        <div className="hidden md:flex md:gap-6">
          <button
            className={`hidden ${buttonClasses} lg:flex ${
              deviceView === "DESKTOP" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickDesktop}
          >
            <FaDesktop className="h-4 w-4 text-white" />
          </button>
          <button
            className={`flex ${buttonClasses} ${
              deviceView === "TABLET" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickTablet}
          >
            <FaTabletAlt className="h-4 w-4 text-white" />
          </button>
          <button
            className={`flex ${buttonClasses} ${
              deviceView === "MOBILE" ? "bg-opacity-30" : "bg-opacity-10"
            }`}
            onClick={handleClickMobile}
          >
            <FaMobileAlt className="h-4 w-4 text-white" />
          </button>
        </div>
        <HyperLink
          href="#"
          className={`${deviceView === 'MOBILE' ? 'hidden' : ''} bg-redSecondary rounded-md px-3 py-2 text-sm text-white no-underline`}
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
    </div>
  );
};

export default IFrame;
