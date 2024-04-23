import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black font-mono text-slate-50 min-h-screen antialiased">
      <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl fade-in px-4 md:px-12 lg:px-24">
        <Outlet />
      </div>
    </div>
  );
}
