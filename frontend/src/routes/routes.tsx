import AboutMe from "../aboutMe/aboutMe";
import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Home from "../home/home";
import Service from "../service/service";
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];
