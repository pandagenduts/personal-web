import { useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal";

const ModalV2 = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <div
      id="modal"
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center px-4 py-4"
    >
      <div
        id="backdrop"
        className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-50"
        onClick={showModalHandler}
      ></div>
      <div
        id="content"
        className={`z-20 h-full w-full overflow-y-auto rounded-t-2xl bg-bgWhite transition-all duration-300`}
      >
        <iframe src="https://pandagenduts-space-tourism-2.netlify.app/" className="w-full h-[700px]"></iframe>
      </div>
    </div>
  );
}

export default ModalV2