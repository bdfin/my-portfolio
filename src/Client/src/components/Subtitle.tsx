import buildClassNames from "../helpers/cssClassFormatter";

interface Props {
  children: string;
  className?: string | null;
}

export default function Subtitle({ children, className }: Props) {
  const defaultStyles = "text-2xl py-4 font-semibold";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return <h2 className={styles}>{children}</h2>;
}
