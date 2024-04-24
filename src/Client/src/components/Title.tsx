interface Props {
  children: string;
  className?: string | null;
}

export default function Title({ children, className }: Props) {
  const defaultStyles = "text-4xl";
  const styles = className ? `${defaultStyles} ${className}` : defaultStyles;

  return <h1 className={styles}>{children}</h1>;
}
