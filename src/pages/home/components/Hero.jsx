import portraitImage from "../../../assets/Donny Rendi Portrait.png";
import HyperLink from "../../../components/layouts/HyperLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mx-auto mb-12 flex max-w-3xl flex-col items-center px-4">
      <div className="shadow-bsRound2 mb-10 w-40 rounded-full duration-700 hover:shadow-none">
        <img
          src={portraitImage}
          className="shadow-bsRound rounded-full duration-500 hover:shadow-none"
          alt="Donny-Profile-Photo"
        />
      </div>
      <h1>Donny Rendi</h1>
      <h4 className="mb-8 font-medium">FrontEnd | React | Next JS Developer</h4>
      <div className="flex gap-6 text-bluePrimary mb-12">
        <HyperLink href="#" newTab className="duration-150 hover:scale-95">
          <FaLinkedin className="h-6 w-6" />
        </HyperLink>
        <HyperLink href="#" newTab className="duration-150 hover:scale-95">
          <FaGithub className="h-6 w-6" />
        </HyperLink>
        <HyperLink href="#" newTab className="duration-150 hover:scale-95">
          <MdEmail className="h-6 w-6" />
        </HyperLink>
      </div>
      <div>
        <p>
          A Bachelor of Communication Science which fall in love with frontend programming.
        </p>
        <p>
          Used to work with Vanilla CSS and JavaScript when I was a WordPress
          Developer, thats where I gain enough fundamentals before move on as a
          Frontend React Developer.
        </p>
        <p>
          Specializing slicing Figma design with WordPress, while learning front
          end programming with React JS.
        </p>
        <p>
          HTML5, CSS3, and JavaScript is my combo skill in this field.
          Pixel-perfect, and responsiveness has always been my approach to any
          projects.
        </p>
        <p className="mb-12">Feel free to check out my works below 🙂</p>
        <p className="m-0 text-xs">
          PS: I didn't do the design, only the development part. Source is
          stated
        </p>
      </div>
    </section>
  );
};

export default Hero;
