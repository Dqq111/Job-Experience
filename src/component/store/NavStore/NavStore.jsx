import { createContext, useState } from "react";

export const navContext = createContext({
  showNavBox: false,
  handleShowNavBox: () => {},
});

export default function NavContextProvider({ children }) {
  const [showNavBox, setShowNavBox] = useState(false);

  function handleShowNavBox() {
    setShowNavBox((prevNav) => !prevNav);
  }

  const navCtxValue = {
    showNavBox,
    handleShowNavBox,
  };

  return (
    <navContext.Provider value={navCtxValue}>{children}</navContext.Provider>
  );
}
