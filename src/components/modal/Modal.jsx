import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal";
import IFrame from "./components/IFrame/IFrame";

const Modal = () => {
  const [deviceView, setDeviceView] = useState("DESKTOP");
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  let contentWidth = "";
  if (deviceView === "DESKTOP") {
    contentWidth = "max-w-full";
  } else if (deviceView === "TABLET") {
    contentWidth = "max-w-[800px]";
  } else if (deviceView === "MOBILE") {
    contentWidth = "max-w-[400px]";
  }

  const handleDeviceWidth = (device) => {
    setDeviceView(device);
  };

  return (
    <div
      id="modal"
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center px-4 py-4"
    >
      <div
        id="backdrop"
        className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-50"
        onClick={showModalHandler}
      ></div>
      <div
        id="content"
        className={`z-20 h-full w-full overflow-y-auto bg-bgWhite transition-all duration-300 ${contentWidth}`}
      >
        <IFrame handleDeviceWidth={handleDeviceWidth} deviceView={deviceView} />
        <div className="p-2">
          <h3>Space Tourism</h3>
          <h4>Description</h4>
          <p>Slicing Challenge from frontendmentor.io</p>
          <h4>Tech Explanation</h4>
          <ul>
            <li>WordPress</li>
            <li>Elementor</li>
            <li>Custom HTML CSS JS</li>
          </ul>
          <h4>1 minute explanation</h4>
        </div>
      </div>
    </div>
  );
};

export default Modal;
