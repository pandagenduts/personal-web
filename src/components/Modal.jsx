import { useDispatch } from "react-redux";
import { modalActions } from "../redux/modal";

const Modal = () => {
  const dispatch = useDispatch();

  const showModalAction = () => {
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
        onClick={showModalAction}
      ></div>
      <div
        id="content"
        className=" z-20 max-w-[1900px] w-full h-[80vh] min-h-[500px] bg-white"
      >
        <p>ada video: 1 min explanation</p>
        <ul>
          <li>iFrame project</li>
          <li>Title</li>
          <li>Description</li>
          <li>Tech Explanation</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
