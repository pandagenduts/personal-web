// React
import InputComp from "../assets/Input Component Alt.png";
import ButtonComp from "../assets/Button Component Alt.png";
import Windbnb from "../assets/Windbnb.png";
import FoodOrderApp from "../assets/Food Order App.png";
import PixelOverture from "../assets/Pixel Overture.png";

// WordPress
import SpaceTourism from "../assets/space-tourism.png";
import Luxe from "../assets/Luxe.png";
import BrandsIo from "../assets/brands-io.png";
import FurniShop from "../assets/furni-shop.png";
import PivotLight from "../assets/Pivot Light.png";
import ZhongXinDark from "../assets/Zhong Xin Dark.png";
import DongmulFood from "../assets/Dongmul Food.png";

// HTML
import Portfolio from "../assets/Portfolio.png";
import RecipeBlog from "../assets/Recipe Blog.png";
import CheckoutPage from "../assets/Checkout Page.png";
import EdieHomepage from "../assets/Edie Homepage.png";

const reactProjectDatas = [
  {
    title: "Pixel Overture",
    imageCover: PixelOverture,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    description: ["A pixel-perfect conversion from Figma w/ Next JS & Tailwind"],
    techUsed: ["React", "Next JS", "Tailwind CSS", "Framer Motion"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "Windbnb",
    imageCover: Windbnb,
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKGNH8dbclXT1vzXLyPrBeu%2FWindbnb%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1",
    projectURL: "https://donny-challenge3-windbnb.netlify.app/",
    description: [
      "User can filter the stays based on location and number of guests.",
      "To apply filter, simply fill in the filter and press Search button or close the popup filter by clicking the overlay.",
      "A simple clone of Airbnb, a challenge from legacy.devchallenges.io",
    ],
    techUsed: ["React", 'Redux', 'Redux Toolkit', "Tailwind CSS", "Framer Motion"],
    techExplanation: ["Built using React and Tailwind CSS"],
  },
  {
    title: "Food Ordering App",
    imageCover: FoodOrderApp,
    projectURL: "https://react-food-v2.netlify.app/",
    description: [
      "User and chose menus, add it to the cart and place an order.",
      "A simple food ordering app with Cart feature.",
    ],
    techUsed: ["React"],
    techExplanation: [
      "Cart feature is built w/ React Context and Reducer.",
      "The form validation is built w/ Custom Hooks.",
      "The order is sent to Firebase realtime database via API.",
    ],
  },
  {
    title: "Reusable Component: Input",
    imageCover: InputComp,
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FslzHnI05qpbBeC33ZMZGa5%2Finput-component%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1",
    projectURL: "https://donny-button-input-devchallenges.netlify.app/input",
    description: ["Luxe ipsum dolor sit amet"],
    techUsed: ["React", "Next JS", "Tailwind CSS", "CVA", "Tailwind Merge"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "Reusable Component: Button",
    imageCover: ButtonComp,
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvfMDJhGGnqfaskO2aud06o%2Fbutton-component%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1",
    projectURL: "https://donny-button-input-devchallenges.netlify.app/buttons",
    description: ["Luxe ipsum dolor sit amet"],
    techUsed: ["React", "Next JS", "Tailwind CSS", "CVA", "Tailwind Merge"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
];

const wordpressProjectDatas = [
  {
    title: "Dongmul Food",
    imageCover: DongmulFood,
    projectURL: "https://dongmulfood.com/",
    description: [
      "User can choose and buy the products.",
      "User can get pet food portion suggestion on Calculator Page based on the input.",
      "Project is built together w/ team, I work as the WordPress Developer. Project from Pixel Overture Digital Agency.",
    ],
    techUsed: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Crocoblock",
      "Custom HTML CSS JS",
    ],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "ZhongXin",
    imageCover: ZhongXinDark,
    projectURL: "https://zhongxin-sg.com/en/",
    description: [
      "User can choose Chinese or English language.",
      "Project is built together w/ team, I work as the WordPress Developer. Project from my previous company (Harnods).",
    ],
    techUsed: ["WordPress", "WPML", "Custom Theme", "ACF"],
    techExplanation: [
      "Site is built by Custom Theme (PHP) and Multi Language w/ WPML. I handle the WordPress Development part.",
    ],
  },
  {
    title: "Pivot SG",
    imageCover: PivotLight,
    projectURL: "https://pivot.sg/",
    description: [
      "User can choose Commercial or Residential site part.",
      "User can navigate to another multisite by selector on header.",
      "Project is built together w/ team, I work as the WordPress Developer. Project from my previous company (Harnods).",
    ],
    techUsed: ["WordPress", "Multisite", "Custom Theme", "ACF"],
    techExplanation: [
      "Site is built by Custom Theme (PHP) and WordPress Multisite. I handle the WordPress Development part.",
    ],
  },
  {
    title: "Luxe",
    imageCover: Luxe,
    projectURL: "https://luxe.portogarage.com/",
    description: [
      "User can see all rooms, and room details.",
      "Luxe hotel website w/ dynamic feature for rooms.",
    ],
    techUsed: ["WordPress", "Elementor", "Crocoblock", "Custom HTML CSS"],
    techExplanation: [
      "The rooms is built w/ Custom Post Type from Crocoblock.",
    ],
  },
  {
    title: "Brands io",
    imageCover: BrandsIo,
    projectURL: "https://brands-io.portogarage.com/",
    description: [
      "User can click the pulsing button and watch the video w/ popup (bottom CTA section).",
      "A pixel-perfect conversion from Figma w/ Elementor. Design source: arshakir.com",
    ],
    techUsed: ["WordPress", "Elementor", "Custom HTML CSS"],
    techExplanation: [
      "Involves a lot of custom CSS for the pixel-perfect conversion.",
      "Animation is built w/ CSS.",
    ],
  },
  {
    title: "Furni shop",
    imageCover: FurniShop,
    projectURL: "https://furnishop.portogarage.com/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: [
      "User can see slider content by swiping the slider or clicking the arrow buttons (on Hero & Testimonial section).",
      "A pixel-perfect conversion from Figma w/ Elementor. Design source: arshakir.com",
    ],
    techUsed: ["WordPress", "Elementor", "Custom HTML CSS JS"],
    techExplanation: [
      "Involves a lot of custom CSS for the pixel-perfect conversion. 😃",
      "The slider and content matching is built by integrating Swiper JS and custom JavaScript.",
    ],
  },
  {
    title: "Space Tourism",
    imageCover: SpaceTourism,
    projectURL: "https://pandagenduts-space-tourism-2.netlify.app/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: [
      "User can see content by swiping the slider or clicking the navigation button.",
      "A pixel-perfect conversion from Figma w/ Elementor.",
      "Assets and design from frontendmentor.io",
    ],
    techUsed: ["WordPress", "Elementor", "Custom HTML CSS JS"],
    techExplanation: [
      "Involves a lot of custom CSS for the pixel-perfect conversion. 😃",
      "The slider and content matching is built by integrating Swiper JS and custom JavaScript.",
    ],
  },
];

const htmlProjectDatas = [
  {
    title: "Portfolio",
    imageCover: Portfolio,
    projectURL: "https://pandagenduts-portfolio-devchallenges.netlify.app/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: ["lorem ipsum dolor sit amet"],
    techUsed: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "Edie Homepage",
    imageCover: EdieHomepage,
    projectURL: "https://pandagenduts-edie-homepage.netlify.app/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: ["lorem ipsum dolor sit amet"],
    techUsed: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "Recipe Blog",
    imageCover: RecipeBlog,
    projectURL: "https://pandagenduts-recipe-page.netlify.app/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: ["lorem ipsum dolor sit amet"],
    techUsed: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: "Checkout Page",
    imageCover: CheckoutPage,
    projectURL: "https://pandagenduts-checkout-page.netlify.app/",
    figmaEmbedURL:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1",
    description: ["lorem ipsum dolor sit amet"],
    techUsed: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
    techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
];

export { reactProjectDatas, wordpressProjectDatas, htmlProjectDatas };
