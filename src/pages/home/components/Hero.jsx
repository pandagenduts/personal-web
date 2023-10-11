import { useDispatch } from "react-redux"
import { modalActions } from "../../../redux/modal";

const Hero = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  }

  return (
    <section className='flex flex-col items-center px-4 mx-auto mb-12 max-w-screen-2xl'>
      {/* <Image
      src={portraitImage}
      className='mb-10 max-w-[150px] rounded-full shadow-md'
    /> */}
      <h1 onClick={showModalHandler}>Donny Rendi</h1>
      <h4 className='mb-10'>FrontEnd | React | Next JS Developer</h4>
      <div>
        <p>A Bachelor of Communication Science which fall in love with web programming. </p>
        <p>Specializing slicing Figma design with WordPress, while learning front end programming with React JS. </p>
        <p>HTML5, CSS3, and JavaScript is my combo skill in this field. Pixel-perfect, and responsiveness has always been my approach to any projects. </p>
        <p className="m-0">Feel free to check out my works below 🙂</p>
      </div>
    </section>
  )
}

export default Hero