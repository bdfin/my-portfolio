import buildClassNames from "../helpers/cssClassFormatter";

interface Props {
  children: string;
  href?: string;
  target?: "_blank" | "";
  className?: string | null;
}

export default function Link({ children, href, target, className }: Props) {
  const defaultStyles = "underline underline-offset-2 hover:underline-offset-4";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return (
    <a href={href} target={target} className={styles}>
      {children}
    </a>
  );
}
