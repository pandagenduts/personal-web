import { useState } from "react"
import Modal from "../../components/Modal"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import { useSelector } from "react-redux"

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const { isShowModal } = useSelector(state => state.theModal)
  console.log( isShowModal );

  const showModalHandler = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <Hero />
      <Portfolio />
      {isShowModal ? <Modal /> : null}
      
    </>
  )
}

export default Home