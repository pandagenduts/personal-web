import Modal from "../../components/Modal"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import { useSelector } from "react-redux"

const Home = () => {
  const { isShowModal } = useSelector(state => state.theModal)

  return (
    <>
      <Hero />
      <Portfolio />
      {isShowModal ? <Modal /> : null}
      
    </>
  )
}

export default Home