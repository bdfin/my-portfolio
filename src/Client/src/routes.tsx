import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import WorkPage from "./pages/WorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "work", element: <WorkPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
