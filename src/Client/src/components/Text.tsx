import { ReactNode } from "react";
import buildClassNames from "../helpers/cssClassFormatter";

interface Props {
  children: ReactNode;
  className?: string | null;
}

export default function Text({ children, className }: Props) {
  const defaultStyles = "text-lg py-2";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return <p className={styles}>{children}</p>;
}
