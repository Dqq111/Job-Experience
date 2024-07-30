import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./component/NavBar/NavBar.jsx";
import SubNavBox from "./component/SubNavBar/SubNavBox.jsx";
// import Hero from "./component/Hero/Hero.jsx";
// import Experience from "./component/Experience/Experience.jsx";
// import Past from "./component/Past/Past.jsx";
// import Contact from "./component/Contact/Contact.jsx";
import Home from "./component/routes/Home.js";
import CO2membrane from "./component/routes/CO2Membrane.jsx";

// store
import NavContextProvider from "./component/store/NavStore/NavStore.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/CO2membrane", element: <CO2membrane /> },
]);

function App() {
  return (
    <NavContextProvider>
      {/* <NavBar></NavBar> */}
      {/* <SubNavBox></SubNavBox> */}
      <RouterProvider router={router}></RouterProvider>
    </NavContextProvider>
  );
}

export default App;
