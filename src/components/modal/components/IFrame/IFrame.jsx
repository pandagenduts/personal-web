import { useDispatch } from "react-redux";
import { modalActions } from "../../../../redux/modal";

const IFrame = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <div className="flex flex-col h-[85%]">
      <div className="flex justify-between">
        <button onClick={showModalHandler}>Back</button>
        <div className="flex gap-4">
          <button>Desktop</button>
          <button>Tablet</button>
          <button>Mobile</button>
        </div>
        <a href="#">Visit Site</a>
      </div>
      <div id="modal-iframe-wrapper" className="w-full h-full min-h-[678px] overflow-hidden">
        <iframe
          src="https://pandagenduts-space-tourism-2.netlify.app/"
          frameborder="0"
          className=""
        ></iframe>
      </div>
    </div>
  );
};

export default IFrame;
