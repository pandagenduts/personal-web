import portraitImage from "../../../assets/Donny Rendi Portrait.png";
import HyperLink from "../../../components/layouts/HyperLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mx-auto mb-12 flex max-w-3xl flex-col items-center px-4">
      <div className="mb-10 w-40 rounded-full shadow-bsRound2 duration-700 hover:shadow-none">
        <img
          src={portraitImage}
          className="rounded-full shadow-bsRound duration-500 hover:shadow-none"
          alt="Donny-Profile-Photo"
        />
      </div>
      <h1>Donny Rendi</h1>
      <h4 className="mb-8 font-medium">FrontEnd | React | Next JS Developer</h4>
      <div className="mb-12 flex gap-6 text-bluePrimary">
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
          A Bachelor of Communication which now a FrontEnd React Next JS
          developer with about 2 years experience in HTML, CSS and JavaScript.
        </p>
        <p>
          Over my career, I've handled dozens of Professional Website accross
          country. From Indonesia, Singapore, Australia, to Europe and US.
        </p>
        <p>
          I have exceptional attention to detail. Pixel-perfect has always been
          my approach, which you can below.
        </p>
        <p>
          Besides, I also founded a free Collaboration Community for Developers
          and Web Designer on Dec 2022. Also the leader to the team of 4
          Community Managers. To this day, the community had more than 280+
          members on Telegram and 100+ people has involved in our Events.
        </p>
        <p className="mb-12">
          Currently open to any opportunity as a FrontEnd React Next JS
          Developer. <br />
          Feel free to check out my works below 🙂
        </p>
        <p className="m-0 text-xs">
          PS: I didn't do the design, only the development part. Source is
          stated
        </p>
      </div>
    </section>
  );
};

export default Hero;
