import { ReactElement } from "react";
import buildClassNames from "../helpers/cssClassFormatter";
import { ListItemProps } from "./ListItem";

interface Props {
  className?: string | null;
  children: ReactElement<ListItemProps> | Array<ReactElement<ListItemProps>>;
}

export default function List({ className, children }: Props) {
  const defaultStyles = "list-disc pl-8 space-y-2";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return <ul className={styles}>{children}</ul>;
}
