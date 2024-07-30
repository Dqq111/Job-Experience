import "./Experience.css";

import ExperienceDivider from "./experienceDivider.jsx";

import membraneImg from "../../assest/membrane.jpeg";
import webDesignImg from "../../assest/web-development.jpeg";
import investmentImg from "../../assest/investing.jpeg";

export default function Experience() {
  return (
    <div className="experiences">
      <ExperienceDivider
        to="hero"
        offset={-100}
        imgSrc={membraneImg}
        imgDesc="Membrane Image"
        description="Gas Separation Membrane 👉🏼"
      ></ExperienceDivider>
      <ExperienceDivider
        imgSrc={webDesignImg}
        imgDesc="Web Design Image"
        description="Web Development 👉🏼 "
      ></ExperienceDivider>
      <ExperienceDivider
        imgSrc={investmentImg}
        imgDesc="Investment Image"
        description="Investing 👉🏼"
      ></ExperienceDivider>
    </div>
  );
}
