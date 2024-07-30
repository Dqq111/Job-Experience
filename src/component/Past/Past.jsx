import "./Past.css";

import myPic from "../../assest/personal.png";

export default function Past() {
  return (
    <section className="past">
      <div className="left-side">
        <h1>A Little About Me</h1>
        <p className="about-me-text">
          I graduated with a degree in Chemical Engineering and had the
          opportunity to work with a Chemical Company specializing in specialty
          products such as gas separation membranes and polyimide (engineered
          plastic) products. My strongest expertise lies in gas separation
          membranes, thanks to the mentorship and opportunities provided by my
          bosses. Currently, I am expanding my skills into web development,
          inspired by a friend and driven by the need to secure new
          opportunities. Additionally, I've been investing since July 2020, a
          pursuit that began during the COVID-19 pandemic and one that I
          continue to explore and document.
        </p>
        <button className="white-bg">
          Hopefully my content is useful to you
        </button>
      </div>
      <div className="right-side">
        <img src={myPic} alt="owner" />
      </div>
    </section>
  );
}
