import { useState } from "react"
import Modal from "../../components/Modal"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const showModalHandler = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <Hero />
      <Portfolio showModalHandler={showModalHandler} />
      {showModal ? <Modal showModalHandler={showModalHandler} /> : null}
      
    </>
  )
}

export default Home