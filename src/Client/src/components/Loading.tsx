import LoadingSpinner from "./LoadingSpinner";
import logo from "../assets/logo.webp";

export default function Loading() {
  return (
    <div className="bg-black font-mono text-slate-50 antialiased px-6 lg:px-8">
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl items-center justify-center fade-in">
        <img className="h-20 w-auto" src={logo} alt="Logo" />
        <LoadingSpinner />
      </div>
    </div>
  );
}
