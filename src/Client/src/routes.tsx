import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
