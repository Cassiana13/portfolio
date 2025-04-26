import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../sections/Hero/index";
import About from "../sections/About/index";
import Skills from "../sections/Skills/index";
import Projects from "../sections/Projects/index";
import ErrorPage from "../components/ErrorPage";
//import Contact from "../sections/Contact/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Hero /> }, // Já carrega a Home automaticamente
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      //{ path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
