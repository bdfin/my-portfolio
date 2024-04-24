import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-black font-mono text-slate-50 antialiased px-6 lg:px-8">
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl fade-in ">
        <NavBar />
        <div className="flex-1 py-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
