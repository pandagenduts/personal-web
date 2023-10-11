import { useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal";
import IFrame from "./components/IFrame/IFrame";

const Modal = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen px-6"
    >
      <div
        id="backdrop"
        className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-slate-900"
        onClick={showModalHandler}
      ></div>
      <div
        id="content"
        className=" z-20 max-w-[1900px] w-full h-[95vh] min-h-[500px] bg-white p-2 overflow-y-auto"
      >
          <IFrame />
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
  );
};

export default Modal;
