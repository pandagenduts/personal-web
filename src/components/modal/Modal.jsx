import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/modal";
import IFrame from "./components/IFrame/IFrame";
import Pill from "../layouts/Pill";

const Modal = () => {
  const [deviceView, setDeviceView] = useState("DESKTOP");
  const dispatch = useDispatch();

  const { modalData } = useSelector((state) => state.theModal);
  const {
    title,
    description,
    projectURL,
    figmaEmbedURL,
    techUsed,
    techExplanation,
  } = modalData;

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
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center px-4 py-4"
    >
      <div
        id="backdrop"
        className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-50"
        onClick={showModalHandler}
      ></div>
      <div
        id="content"
        className={`z-20 h-full w-full overflow-y-auto rounded-t-2xl bg-bgWhite transition-all duration-300 ${contentWidth}`}
      >
        <IFrame
          projectURL={projectURL}
          figmaEmbedURL={figmaEmbedURL}
          figma
          handleDeviceWidth={handleDeviceWidth}
          deviceView={deviceView}
        />
        <div className="p-2">
          {title && <h3>{title}</h3>}
          {techUsed && (
            <div className="mb-4 flex flex-wrap gap-1">
              {techUsed?.map((item, index) => (
                <Pill key={index}>{item}</Pill>
              ))}
            </div>
          )}
          {description && (
            <>
              <h4>Description</h4>
              <p>{description}</p>
            </>
          )}
          {techExplanation && (
            <>
              <h4>Tech Explanation</h4>
              <p>{techExplanation}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
