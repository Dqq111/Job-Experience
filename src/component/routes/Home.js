import NavBar from "../NavBar/NavBar.jsx";
import SubNavBox from "../SubNavBar/SubNavBox.jsx";
import Hero from "../Hero/Hero.jsx";
import Past from "../Past/Past.jsx";
import Experience from "../Experience/Experience.jsx";
import Contact from "../Contact/Contact.jsx";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <SubNavBox />
      <Hero />
      <Past></Past>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}
