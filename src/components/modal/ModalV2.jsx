import { useDispatch } from "react-redux";
import { modalActions } from "../../redux/modal";

const ModalV2 = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <>
      <iframe
        src="https://pandagenduts-space-tourism-2.netlify.app/"
        className="h-[700px] w-full"
      ></iframe>
    </>
  );
};

export default ModalV2;
