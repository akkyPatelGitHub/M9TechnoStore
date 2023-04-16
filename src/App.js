import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Index from "./container";
import About from "./container/about";
import Blogs from "./container/blogs";
import Contact from "./container/contact";
import Features from "./container/features";
import NotFound from "./container/notFound";
import Products from "./container/products";
import Testimonials from "./container/testimonials";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/*", element: <NotFound /> },
    { path: "/", element: <Index /> },
    { path: "/about", element: <About /> },
    { path: "/products", element: <Products /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/features", element: <Features /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/contact", element: <Contact /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
