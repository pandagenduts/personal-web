import { useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal";
import IFrame from "./components/IFrame/IFrame";
import { useState } from "react";

const Modal = () => {
  const [deviceView, setDeviceView] = useState('DESKTOP');
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  }

  let contentWidth = '';
  if(deviceView === 'DESKTOP') {
    contentWidth = 'max-w-full'
  }
  else if (deviceView === 'TABLET') {
    contentWidth = 'max-w-[800px]'
  }
  else if (deviceView === 'MOBILE') {
    contentWidth = 'max-w-[400px]'
  }

  const handleDeviceWidth = (device) => {
    setDeviceView(device);
  }

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen px-4 py-4"
    >
      <div
        id="backdrop"
        className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-slate-900"
        onClick={showModalHandler}
      ></div>
      <div
        id="content"
        className={`z-20 w-full h-full overflow-y-auto bg-white transition-all duration-300 ${contentWidth}`}
      >
          <IFrame handleDeviceWidth={handleDeviceWidth} deviceView={deviceView} />
          <div className="p-2">
          <h3>Project Title</h3>
          <h4>Description</h4>
          <p>Lorem ipsum dolor sit amet</p>
          <h4>Tech Explanation:</h4>
          <ul>
            <li>tech goes here</li>
            <li>tech goes here</li>
            <li>tech goes here</li>
          </ul>
          <h4>1 minute explanation</h4>

          </div>
      </div>
    </div>
  );
};

export default Modal;
