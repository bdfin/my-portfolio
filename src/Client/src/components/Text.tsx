import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Text({ children }: Props) {
  return <p className="text-xl py-4">{children}</p>;
}
