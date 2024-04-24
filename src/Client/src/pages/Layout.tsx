import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="bg-black font-mono text-slate-50 min-h-screen antialiased">
      <NavBar />
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl fade-in p-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
