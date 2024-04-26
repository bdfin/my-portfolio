import { ReactNode } from "react";

interface Props {
  type: "submit" | "button";
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ type, children, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center border-0 ring-1 ring-inset ring-gray-300 bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:bg-gray-800 disabled:cursor-progress"
    >
      {children}
    </button>
  );
}
