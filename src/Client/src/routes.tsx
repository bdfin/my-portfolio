import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
