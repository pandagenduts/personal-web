import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/modal";

const IFrame = ({handleDeviceWidth}) => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const handleClickDesktop = () => {
    handleDeviceWidth('DESKTOP')
  }

  const handleClickTablet = () => {
    handleDeviceWidth('TABLET')
  }

  const handleClickMobile = () => {
    handleDeviceWidth('MOBILE')
  }

  return (
    <>
      <div className="flex justify-between">
        <button onClick={showModalHandler}>Back</button>
        <div className="hidden md:flex md:gap-4">
          <button className="hidden lg:inline-block" onClick={handleClickDesktop}>Desktop</button>
          <button onClick={handleClickTablet}>Tablet</button>
          <button onClick={handleClickMobile}>Mobile</button>
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
