import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  let errorCode = "Oops";
  let errorTitle = "Something went wrong.";
  let errorMessage = "This error has been automatically logged.";

  if (isRouteErrorResponse(error)) {
    errorCode = "404";
    errorTitle = "Page not found";
    errorMessage = "Sorry, this page dosen't exist.";
  }

  return (
    <div className="bg-black font-mono text-slate-50 antialiased px-6 lg:px-8">
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl fade-in">
        <NavBar />
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold ">{errorCode}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              {errorTitle}
            </h1>
            <p className="mt-6 text-base leading-7 ">{errorMessage}</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
