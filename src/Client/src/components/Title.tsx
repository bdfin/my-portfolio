import buildClassNames from "../helpers/cssClassFormatter";

interface Props {
  children: string;
  className?: string | null;
}

export default function Title({ children, className }: Props) {
  const defaultStyles = "text-4xl py-4";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return <h1 className={styles}>{children}</h1>;
}
