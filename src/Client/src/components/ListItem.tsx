import { ReactNode } from "react";

export interface ListItemProps {
  children: ReactNode;
}

export default function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}
