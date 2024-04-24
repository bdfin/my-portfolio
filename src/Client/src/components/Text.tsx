import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string | null;
}

export default function Text({ children, className }: Props) {
  const defaultStyles = "text-lg py-2";
  const styles = className ? `${defaultStyles} ${className}` : defaultStyles;

  return <p className={styles}>{children}</p>;
}
