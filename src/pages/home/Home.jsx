// import Modal from "../../components/modal/Modal";
import ModalV2 from "../../components/modal/ModalV2";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { useSelector } from "react-redux";

const body = document.querySelector("body");

const Home = () => {
  const { isShowModal } = useSelector((state) => state.theModal);

  // remove the scrollbar when modal is shown
  if (isShowModal) {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }

  return (
    <>
      <Hero />
      <Portfolio />
      {/* {isShowModal ? <Modal /> : null} */}
      {/* <div className="fixed left-0 top-10 flex w-full items-center justify-center">
        <ModalV2 />
      </div> */}

      <div
        id="modal"
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center px-4 py-4"
      >
        <div
          id="content"
          className={`z-20 h-full w-full overflow-y-auto rounded-t-2xl bg-bgWhite`}
        >
          <ModalV2 />
        </div>
      </div>
    </>
  );
};

export default Home;
