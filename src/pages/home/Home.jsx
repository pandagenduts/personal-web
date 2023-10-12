import Modal from "../../components/modal/Modal";
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
      {isShowModal ? <Modal /> : null}
    </>
  );
};

export default Home;
